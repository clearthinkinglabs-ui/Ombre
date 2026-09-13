"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useGeneralConversations } from "@/lib/conversation/use-general-conversations";
import { ConversationList } from "@/components/app/general-ai/conversation-list";
import { MessageList } from "@/components/app/general-ai/message-list";
import { Composer } from "@/components/app/general-ai/composer";

export function GeneralAIWorkspace() {
  const {
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
  } = useGeneralConversations();

  const [mobileListOpen, setMobileListOpen] = useState(false);

  if (!activeConversation) return null;

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="hidden w-72 shrink-0 border-r border-line/60 md:block">
        <ConversationList
          conversations={conversations}
          activeId={activeId}
          onSelect={selectConversation}
          onNew={startNewConversation}
        />
      </div>

      <AnimatePresence>
        {mobileListOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileListOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="dialog"
              aria-modal="true"
              aria-label="Conversations"
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-line/60 bg-background-secondary md:hidden"
            >
              <ConversationList
                conversations={conversations}
                activeId={activeId}
                onSelect={(id) => {
                  selectConversation(id);
                  setMobileListOpen(false);
                }}
                onNew={() => {
                  startNewConversation();
                  setMobileListOpen(false);
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-line/60 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setMobileListOpen((v) => !v)}
            aria-label={mobileListOpen ? "Close conversation list" : "Open conversation list"}
            aria-expanded={mobileListOpen}
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-ink-secondary hover:bg-surface hover:text-ink md:hidden"
          >
            {mobileListOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
          <h1 className="truncate font-display text-base text-ink">
            {activeConversation.title}
          </h1>
        </div>

        <MessageList
          conversation={activeConversation}
          generationState={generationState}
          errorMessage={errorMessage}
          onRetry={retry}
        />

        <Composer
          value={draft}
          onChange={setDraft}
          onSubmit={() => sendMessage(draft)}
          onCancel={cancelGeneration}
          generationState={generationState}
        />
      </div>
    </div>
  );
}
