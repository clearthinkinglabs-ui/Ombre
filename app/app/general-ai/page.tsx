import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "General AI" };

export default function GeneralAIPage() {
  return (
    <ComingSoon
      title="General AI"
      description="The conversation foundation — composer, message history, and AI orchestration — is the next implementation slice, built on a provider-agnostic abstraction."
    />
  );
}
