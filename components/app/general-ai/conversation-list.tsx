"use client";

import { Plus } from "lucide-react";
import type { Conversation } from "@/lib/conversation/types";
import { cn } from "@/lib/utils";

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  onNew,
}: {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
}) {
  return (
    <nav aria-label="Conversations" className="flex h-full flex-col gap-4 p-4">
      <button
        type="button"
        onClick={onNew}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-line/60 px-3 py-2.5 text-sm text-ink-secondary transition-colors duration-200 hover:border-accent/40 hover:text-ink"
      >
        <Plus className="h-4 w-4" aria-hidden />
        New conversation
      </button>

      <ul className="flex flex-col gap-1 overflow-y-auto">
        {conversations.map((conversation) => {
          const active = conversation.id === activeId;
          return (
            <li key={conversation.id}>
              <button
                type="button"
                onClick={() => onSelect(conversation.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "w-full cursor-pointer truncate rounded-md px-3 py-2 text-left text-sm transition-colors duration-200",
                  active
                    ? "bg-surface-elevated text-accent-highlight"
                    : "text-ink-secondary hover:bg-surface hover:text-ink"
                )}
              >
                {conversation.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
