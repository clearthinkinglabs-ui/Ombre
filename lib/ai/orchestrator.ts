import type { AIProvider } from "@/lib/ai/provider";
import type { Message, AIResult, ContextPackage } from "@/lib/conversation/types";

function buildEmptyContextPackage(): ContextPackage {
  return {};
}

/**
 * Coordination layer between the conversation UI and a concrete AI
 * provider. Real Project / Mentor / Library / Memory / Decision context
 * will flow through here once the Context Engine exists — for now it
 * always attaches an empty context package rather than fabricating one.
 */
export async function requestGeneralAIResponse(
  provider: AIProvider,
  conversationId: string,
  messages: Message[],
  signal?: AbortSignal
): Promise<AIResult> {
  return provider.generate(
    { conversationId, messages, context: buildEmptyContextPackage() },
    signal
  );
}
