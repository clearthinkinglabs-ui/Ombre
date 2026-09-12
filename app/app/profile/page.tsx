import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <ComingSoon
      title="Profile"
      description="Your account details are planned once real authentication exists — this button is intentionally disabled until then."
    />
  );
}
