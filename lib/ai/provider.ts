import type { AIRequest, AIResult } from "@/lib/conversation/types";

/**
 * Any concrete provider (Gemini, OpenAI, Anthropic, etc.) implements this
 * interface. The conversation UI and orchestrator only ever depend on this
 * contract — never on a specific vendor SDK — so a provider can be added
 * later without rewriting the conversation experience.
 */
export interface AIProvider {
  readonly name: string;
  readonly isConnected: boolean;
  generate(request: AIRequest, signal?: AbortSignal): Promise<AIResult>;
}
