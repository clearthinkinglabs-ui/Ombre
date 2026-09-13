"use client";

import { motion } from "framer-motion";
import { Sparkles, AlertCircle } from "lucide-react";
import type { Conversation, GenerationState } from "@/lib/conversation/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MessageList({
  conversation,
  generationState,
  errorMessage,
  onRetry,
}: {
  conversation: Conversation;
  generationState: GenerationState;
  errorMessage: string | null;
  onRetry: () => void;
}) {
  const hasMessages = conversation.messages.length > 0;

  return (
    <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-4 py-8 sm:px-8">
      {!hasMessages && generationState === "idle" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
          <Sparkles className="h-6 w-6 text-accent" aria-hidden />
          <p className="max-w-sm text-sm leading-relaxed text-ink-secondary">
            Ask anything. This conversation stays in General AI — nothing
            here switches you into a Mentor without you choosing to.
          </p>
        </div>
      )}

      {conversation.messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex flex-col gap-1",
            message.role === "user" ? "items-end" : "items-start"
          )}
        >
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
            {message.role === "user" ? "You" : "Ombre"}
          </span>
          <div
            className={cn(
              "max-w-[85%] whitespace-pre-wrap rounded-lg px-4 py-3 text-sm leading-relaxed sm:max-w-[70%]",
              message.role === "user"
                ? "bg-accent/10 text-ink"
                : "border border-line/60 bg-surface text-ink"
            )}
          >
            {message.content}
          </div>
        </div>
      ))}

      {generationState === "generating" && (
        <div className="flex flex-col items-start gap-1" role="status" aria-live="polite">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
            Ombre
          </span>
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-lg border border-line/60 bg-surface px-4 py-3 text-sm text-ink-secondary"
          >
            Thinking…
          </motion.div>
        </div>
      )}

      {generationState === "error" && errorMessage && (
        <div
          role="alert"
          className="flex flex-col items-start gap-3 rounded-lg border border-state-error/40 bg-state-error/5 px-4 py-4 text-sm text-ink-secondary"
        >
          <div className="flex items-center gap-2 text-ink">
            <AlertCircle className="h-4 w-4 text-state-error" aria-hidden />
            <span>Generation didn&rsquo;t complete.</span>
          </div>
          <p>{errorMessage} Your message was kept — nothing was lost.</p>
          <Button variant="secondary" size="sm" onClick={onRetry}>
            Retry
          </Button>
        </div>
      )}
    </div>
  );
}
