import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { MentorCard } from "@/components/sections/mentors/mentor-card";
import { getFeaturedMentors } from "@/lib/mentors-data";
import { Sparkles, Users, FolderKanban } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const featuredMentors = getFeaturedMentors();

  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-10">
        <Eyebrow className="mb-4">Home</Eyebrow>
        <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          What do you want to work on?
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
          Start broad with General AI, go straight to a specialized Mentor, or
          pick up a Project you&rsquo;ve already started.
        </p>
      </div>

      <div className="mb-14 grid gap-4 sm:grid-cols-2">
        <GlassPanel className="flex flex-col justify-between p-6">
          <div>
            <Sparkles className="mb-4 h-5 w-5 text-accent" aria-hidden />
            <h2 className="font-display text-lg text-ink">General AI</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              Broad intelligence for thinking, writing, research and
              execution.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/app/general" showArrow>
              Start a conversation
            </Button>
          </div>
        </GlassPanel>

        <GlassPanel className="flex flex-col justify-between p-6">
          <div>
            <Users className="mb-4 h-5 w-5 text-accent" aria-hidden />
            <h2 className="font-display text-lg text-ink">Mentors</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
              Specialized reasoning for one kind of problem at a time.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/app/mentors" variant="secondary" showArrow>
              Browse Mentors
            </Button>
          </div>
        </GlassPanel>
      </div>

      <div className="mb-14">
        <SectionHeading eyebrow="Continue" title="Where you left off" className="mb-6" />
        <GlassPanel className="flex flex-col items-center gap-3 p-10 text-center">
          <p className="text-sm text-ink-secondary">
            Nothing yet — conversations and Projects you work on will show up
            here.
          </p>
        </GlassPanel>
      </div>

      <div className="mb-14">
        <SectionHeading
          eyebrow="Projects"
          title="Persistent, goal-oriented work"
          className="mb-6"
        />
        <GlassPanel className="flex flex-col items-center gap-4 p-10 text-center">
          <FolderKanban className="h-6 w-6 text-ink-muted" aria-hidden />
          <p className="max-w-sm text-sm text-ink-secondary">
            No Projects yet. A Project keeps conversations, Mentors, memory
            and decisions connected to one goal.
          </p>
          <Button href="/app/projects" variant="secondary" size="sm">
            Go to Projects
          </Button>
        </GlassPanel>
      </div>

      <div>
        <SectionHeading
          eyebrow="Discover"
          title="A few Mentors to start with"
          className="mb-6"
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredMentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              href={`/app/mentors/${mentor.categoryId}/${mentor.id}`}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button href="/app/mentors" variant="ghost" showArrow>
            See all Mentors
          </Button>
        </div>
      </div>
    </Container>
  );
}
