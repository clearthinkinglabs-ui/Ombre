"use client";

import { useEffect, useRef, type ChangeEvent, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Square } from "lucide-react";
import type { GenerationState } from "@/lib/conversation/types";

export function Composer({
  value,
  onChange,
  onSubmit,
  onCancel,
  generationState,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  generationState: GenerationState;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isBusy = generationState === "submitting" || generationState === "generating";

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
    const el = event.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (!isBusy && value.trim()) onSubmit();
    }
  }

  return (
    <div className="border-t border-line/60 p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl items-end gap-3 rounded-lg border border-line bg-surface p-3">
        <label htmlFor="general-ai-composer" className="sr-only">
          Message General AI
        </label>
        <textarea
          ref={textareaRef}
          id="general-ai-composer"
          name="message"
          rows={1}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask General AI anything…"
          disabled={isBusy}
          className="max-h-40 min-h-[2.5rem] flex-1 resize-none overflow-y-auto bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none disabled:opacity-60"
        />

        {isBusy ? (
          <motion.button
            type="button"
            onClick={onCancel}
            whileTap={{ scale: 0.95 }}
            aria-label="Cancel generation"
            className="inline-flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-md border border-line text-ink-secondary transition-colors duration-200 hover:text-ink"
          >
            <Square className="h-4 w-4" aria-hidden />
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={onSubmit}
            disabled={!value.trim()}
            whileTap={{ scale: 0.95 }}
            aria-label="Send message"
            className="inline-flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-accent text-background transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </motion.button>
        )}
      </div>
      <p className="mx-auto mt-2 max-w-3xl text-center text-xs text-ink-muted">
        Enter to send, Shift+Enter for a new line.
      </p>
    </div>
  );
}
