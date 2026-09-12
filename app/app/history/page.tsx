import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "History" };

export default function HistoryPage() {
  return (
    <ComingSoon
      title="History"
      description="A chronological record of what you've done is planned alongside Recent and Saved, once real activity exists to record."
    />
  );
}
