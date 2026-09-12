import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Concept",
  description:
    "What Ombre is, what it deliberately isn't, and the idea of a persistent intelligence workspace.",
};

const NOT_LIST = [
  "An AI chatbot",
  "A mentor chatbot wearing different names",
  "A file manager with a chat window bolted on",
  "A project-management tool",
  "A collection of disconnected AI personas",
];

export default function ConceptPage() {
  return (
    <>
      <section className="border-b border-line/60 py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">Concept</Eyebrow>
            <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              An interconnected intelligence environment.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
              Most AI products give you a blank text box and a short memory.
              Ombre is built around a different premise: your intelligence,
              knowledge, projects, mentors, conversations and decisions should
              stay connected — not scattered across a hundred forgotten tabs.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line/60 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="What Ombre is" />
            <p className="mt-6 text-base leading-relaxed text-ink-secondary">
              Ombre is a persistent intelligence workspace where General AI,
              specialized Mentors, Projects, Library knowledge, Memory,
              Decisions, conversations and generated outputs remain related
              to one another. A Context Engine works quietly underneath,
              connecting the right information to the right moment — without
              you having to manage it by hand.
            </p>
          </div>

          <div>
            <SectionHeading title="What Ombre deliberately isn't" />
            <ul className="mt-6 space-y-3">
              {NOT_LIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed text-ink-secondary"
                >
                  <span
                    className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-ink-muted"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Governing Idea"
            title="Complexity underneath. Simplicity on top."
            description="You should never need to understand Ombre's architecture to benefit from it. The system maintains relationships in the background; the surface stays calm, clear and predictable."
            className="mx-auto mb-16"
          />

          <RevealGroup className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <RevealItem>
              <GlassPanel className="h-full p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Without Ombre
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  Every new chat starts from zero. You re-paste the same
                  context, re-explain the same project, and re-upload the
                  same document — again.
                </p>
              </GlassPanel>
            </RevealItem>
            <RevealItem>
              <GlassPanel className="h-full border-accent/30 p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  With Ombre
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  Your project already knows its own goal, its prior
                  decisions, and which documents matter. You pick up exactly
                  where you left off.
                </p>
              </GlassPanel>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
