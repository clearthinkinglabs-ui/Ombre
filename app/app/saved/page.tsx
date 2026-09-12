import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Saved" };

export default function SavedPage() {
  return (
    <ComingSoon
      title="Saved"
      description="Deliberately curated responses, insights and decisions are planned alongside History and Recent."
    />
  );
}
