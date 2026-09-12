import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Mentors" };

export default function MentorsAppPage() {
  return (
    <ComingSoon
      title="Mentors"
      description="Full Mentor profiles, search and specialized sessions are planned after the General AI conversation foundation is in place."
    />
  );
}
