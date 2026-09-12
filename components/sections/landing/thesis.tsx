"use client";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

const PILLARS = [
  {
    title: "General AI",
    description:
      "Broad intelligence for thinking, writing, research, planning and execution — a capable partner for the work in front of you right now.",
  },
  {
    title: "Mentors",
    description:
      "Specialized reasoning systems that diagnose, challenge assumptions, and push your thinking in one domain — not a chatbot wearing a different name.",
  },
  {
    title: "Projects & Library",
    description:
      "Goal-oriented workspaces and a persistent knowledge layer, so the context you've built doesn't evaporate between conversations.",
  },
];

export function Thesis() {
  return (
    <section className="border-t border-line/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The Core Idea"
          title="Complexity underneath. Simplicity on top."
          description="Ombre keeps sophisticated architecture working quietly in the background, so what you experience is clarity, continuity, and control."
          className="mx-auto mb-16"
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <RevealItem key={pillar.title}>
              <GlassPanel className="h-full p-8">
                <h3 className="mb-3 font-display text-xl text-ink">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {pillar.description}
                </p>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
