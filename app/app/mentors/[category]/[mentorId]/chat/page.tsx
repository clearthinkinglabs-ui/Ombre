import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/app/coming-soon";
import { MENTORS, getMentorById } from "@/lib/mentors-data";

export function generateStaticParams() {
  return MENTORS.map((mentor) => ({
    category: mentor.categoryId,
    mentorId: mentor.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { mentorId: string };
}): Metadata {
  const mentor = getMentorById(params.mentorId);
  return { title: mentor ? `Chat with ${mentor.name}` : "Mentor Chat" };
}

export default function MentorChatPage({
  params,
}: {
  params: { mentorId: string };
}) {
  const mentor = getMentorById(params.mentorId);
  if (!mentor) notFound();

  return (
    <ComingSoon
      title={`Chat with ${mentor.name}`}
      description="Mentor conversations will connect to the same conversation architecture as General AI — provider-agnostic, with a dedicated environment so New Chat never crosses into another Mentor or General AI. This mentor's real intelligence arrives with its master prompt; wiring the conversation up is the next slice after that."
    />
  );
}
