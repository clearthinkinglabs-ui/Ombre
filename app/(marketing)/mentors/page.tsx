import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { MentorCard } from "@/components/sections/mentors/mentor-card";
import { getFeaturedMentors } from "@/lib/mentors-data";

export const metadata: Metadata = {
  title: "Mentors",
  description:
    "Specialized reasoning systems — a preview of the Ombre Mentor library.",
};

export default function MentorsPreviewPage() {
  return (
    <>
      <section className="border-b border-line/60 py-20 sm:py-28">
        <Container className="max-w-2xl">
          <Eyebrow className="mb-6">Mentors</Eyebrow>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            A specialized way of thinking, not a different avatar.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            A Mentor isn&rsquo;t General AI with a new name. Each one
            diagnoses, challenges and reasons within one domain — the same
            way a good advisor would, not a generalist pretending to be one.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A Preview"
            title="A small set of Mentors, done well."
            description="The full library grows over time. Here's a preview of what's available at launch."
            className="mb-12"
          />

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getFeaturedMentors().map((mentor) => (
              <RevealItem key={mentor.id}>
                <MentorCard mentor={mentor} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-line/60 py-20 text-center sm:py-28">
        <Container>
          <h2 className="mx-auto max-w-xl font-display text-2xl font-medium text-ink sm:text-3xl">
            Explore a Mentor by starting a session, not by guessing what it
            does.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/auth" size="lg" showArrow>
              Sign up to explore Mentors
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
