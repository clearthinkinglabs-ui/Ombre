import type { Metadata } from "next";
import { GeneralAIWorkspace } from "@/components/app/general-ai/workspace";

export const metadata: Metadata = { title: "General AI" };

export default function GeneralAIPage() {
  return <GeneralAIWorkspace />;
}
