import type { Conversation, ConversationEnvironment, Message, MessageRole } from "./types";

function generateId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

export function createMessage(role: MessageRole, content: string): Message {
  return {
    id: generateId("msg"),
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

export function createConversation(environment: ConversationEnvironment): Conversation {
  const now = new Date().toISOString();
  return {
    id: generateId("conv"),
    title: "New conversation",
    environment,
    messages: [],
    createdAt: now,
    updatedAt: now,
  };
}
