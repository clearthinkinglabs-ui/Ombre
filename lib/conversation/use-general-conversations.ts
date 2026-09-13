"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { Conversation, Message, GenerationState } from "@/lib/conversation/types";
import { createConversation, createMessage } from "@/lib/conversation/factory";
import { notConnectedProvider } from "@/lib/ai/not-connected-provider";
import { requestGeneralAIResponse } from "@/lib/ai/orchestrator";

/**
 * In-memory only. There is no persistence layer yet, so conversations do
 * not survive a refresh — this hook does not pretend otherwise. A real
 * repository can replace the internal state management here later without
 * changing the interface this hook exposes to the UI.
 */
export function useGeneralConversations() {
  const [conversations, setConversations] = useState<Conversation[]>(() => [
    createConversation("general-ai"),
  ]);
  const [activeId, setActiveId] = useState<string>(() => conversations[0].id);
  const [generationState, setGenerationState] = useState<GenerationState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeId) ?? conversations[0],
    [conversations, activeId]
  );

  const startNewConversation = useCallback(() => {
    const next = createConversation("general-ai");
    setConversations((prev) => [next, ...prev]);
    setActiveId(next.id);
    setGenerationState("idle");
    setErrorMessage(null);
    setDraft("");
  }, []);

  const selectConversation = useCallback((id: string) => {
    setActiveId(id);
    setGenerationState("idle");
    setErrorMessage(null);
  }, []);

  const runGeneration = useCallback(async (conversationId: string, history: Message[]) => {
    setErrorMessage(null);
    setGenerationState("submitting");
    const controller = new AbortController();
    abortRef.current = controller;

    setGenerationState("generating");
    const result = await requestGeneralAIResponse(
      notConnectedProvider,
      conversationId,
      history,
      controller.signal
    );
    abortRef.current = null;

    if (result.ok) {
      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? {
                ...c,
                messages: [...c.messages, result.message],
                updatedAt: new Date().toISOString(),
              }
            : c
        )
      );
      setGenerationState("completed");
    } else if (result.error.code === "cancelled") {
      setGenerationState("cancelled");
    } else {
      setErrorMessage(result.error.message);
      setGenerationState("error");
    }
  }, []);

  /** Adds the user's message, then requests a response. Never called for retry. */
  const sendMessage = useCallback(
    (content: string) => {
      const trimmed = content.trim();
      if (!trimmed) return;
      if (generationState === "submitting" || generationState === "generating") return;
      if (!activeConversation) return;

      const conversationId = activeConversation.id;
      const userMessage = createMessage("user", trimmed);
      const updatedMessages = [...activeConversation.messages, userMessage];

      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? {
                ...c,
                title: c.messages.length === 0 ? trimmed.slice(0, 48) : c.title,
                messages: updatedMessages,
                updatedAt: new Date().toISOString(),
              }
            : c
        )
      );
      setDraft("");
      void runGeneration(conversationId, updatedMessages);
    },
    [activeConversation, generationState, runGeneration]
  );

  const cancelGeneration = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  /** Re-attempts generation for the existing history — never re-adds the user message. */
  const retry = useCallback(() => {
    if (!activeConversation) return;
    void runGeneration(activeConversation.id, activeConversation.messages);
  }, [activeConversation, runGeneration]);

  return {
    conversations,
    activeConversation,
    activeId,
    generationState,
    errorMessage,
    draft,
    setDraft,
    startNewConversation,
    selectConversation,
    sendMessage,
    cancelGeneration,
    retry,
  };
}
