import type { Metadata } from "next";
import { ComingSoon } from "@/components/app/coming-soon";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Projects"
      description="Persistent, goal-oriented workspaces — linking conversations, Mentors, Memory and Decisions without duplication — are planned after Mentors."
    />
  );
}
