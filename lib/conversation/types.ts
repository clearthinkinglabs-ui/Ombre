export type ConversationEnvironment = "general-ai" | "mentor";

export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  title: string;
  environment: ConversationEnvironment;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

export type GenerationState =
  | "idle"
  | "submitting"
  | "generating"
  | "completed"
  | "error"
  | "cancelled";

export interface AIProviderError {
  code: "not_connected" | "network_error" | "provider_error" | "cancelled";
  message: string;
}

/**
 * Deliberately empty for this slice. Project / Mentor / Library / Memory /
 * Decisions / explicit-context retrieval belong to the Context Engine,
 * which is a later slice. This type exists now purely as a stable boundary
 * so AIRequest's shape doesn't need to change when that lands — and so
 * nothing here is tempted to inject fake context in the meantime.
 */
export type ContextPackage = Record<string, never>;

export interface AIRequest {
  conversationId: string;
  messages: Message[];
  context?: ContextPackage;
}

export type AIResult =
  | { ok: true; message: Message }
  | { ok: false; error: AIProviderError };
