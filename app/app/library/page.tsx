import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Library" };

export default function LibraryPage() {
  return (
    <ComingSoon
      title="Library"
      description="Uploading, processing and retrieving your knowledge — available everywhere but never blindly injected everywhere — is planned alongside the Context Engine."
    />
  );
}
