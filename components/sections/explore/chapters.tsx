"use client";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

interface Chapter {
  eyebrow: string;
  title: string;
  description: string;
}

const CHAPTERS: Chapter[] = [
  {
    eyebrow: "01 — Begin",
    title: "You open General AI with a half-formed idea.",
    description:
      "No project, no setup. Just a conversation that behaves like a serious intelligence, not a search box.",
  },
  {
    eyebrow: "02 — Specialize",
    title: "You bring in a Mentor when the problem needs a sharper angle.",
    description:
      "The Startup Validator doesn't just answer — it diagnoses, challenges your assumptions, and tells you what you didn't want to hear.",
  },
  {
    eyebrow: "03 — Anchor",
    title: "The work becomes a Project.",
    description:
      "Not a folder. A living workspace that starts to understand your goal, your constraints, and what you've already ruled out.",
  },
  {
    eyebrow: "04 — Remember",
    title: "You upload research. Ombre doesn't forget it.",
    description:
      "The Context Engine retrieves what's relevant when it's relevant — never the entire Library, dumped into every reply.",
  },
  {
    eyebrow: "05 — Decide",
    title: "You make a call, and it's preserved on purpose.",
    description:
      "Decisions and Memory stay separate: what you chose, and why, versus what Ombre understands to be true.",
  },
  {
    eyebrow: "06 — Return",
    title: "Three weeks later, you come back.",
    description:
      "Nothing needs to be re-explained. The Project, the Mentor relationship, the documents and the decisions are exactly where you left them.",
  },
];

export function ExploreChapters() {
  return (
    <div className="divide-y divide-line/60 border-y border-line/60">
      {CHAPTERS.map((chapter) => (
        <section key={chapter.title} className="py-24 sm:py-32">
          <Container>
            <RevealGroup className="mx-auto max-w-2xl">
              <RevealItem>
                <Eyebrow className="mb-6">{chapter.eyebrow}</Eyebrow>
              </RevealItem>
              <RevealItem>
                <h2 className="font-display text-3xl font-medium leading-snug tracking-tight text-ink sm:text-4xl">
                  {chapter.title}
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
                  {chapter.description}
                </p>
              </RevealItem>
            </RevealGroup>
          </Container>
        </section>
      ))}
    </div>
  );
}
