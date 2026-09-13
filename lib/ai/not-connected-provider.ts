import type { AIProvider } from "@/lib/ai/provider";
import type { AIRequest, AIResult } from "@/lib/conversation/types";

/**
 * Stand-in until a real provider is connected. It never fabricates a
 * response or simulated "thinking" delay — it always resolves with a clear
 * "not connected" error so the surrounding UI's error/retry/cancel states
 * are exercised against real (if trivial) async behavior rather than a
 * mocked success.
 */
export const notConnectedProvider: AIProvider = {
  name: "none",
  isConnected: false,
  async generate(_request: AIRequest, signal?: AbortSignal): Promise<AIResult> {
    if (signal?.aborted) {
      return {
        ok: false,
        error: { code: "cancelled", message: "Generation was cancelled." },
      };
    }

    return {
      ok: false,
      error: {
        code: "not_connected",
        message: "No AI provider is connected yet — this is an interface preview only.",
      },
    };
  },
};
