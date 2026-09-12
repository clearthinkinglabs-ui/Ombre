import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Recent" };

export default function RecentPage() {
  return (
    <ComingSoon
      title="Recent"
      description="A convenience layer for what you were just doing is planned alongside History and Saved."
    />
  );
}
