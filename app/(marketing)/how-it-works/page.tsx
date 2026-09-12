import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "How Ombre Works",
  description:
    "The path from a single conversation to a persistent, connected workspace.",
};

const STEPS = [
  {
    step: "01",
    title: "Start where it's easiest",
    description:
      "Open General AI for broad thinking, or head straight to a specialized Mentor when you already know which kind of reasoning you need.",
  },
  {
    step: "02",
    title: "Let work become a Project",
    description:
      "When something stops being a one-off question, connect the conversation to a Project. Nothing is duplicated — the same conversation now belongs to both places.",
  },
  {
    step: "03",
    title: "Bring in what you already know",
    description:
      "Upload research, notes or documents to your Library. Ombre doesn't dump your entire Library into every reply — it retrieves only what's relevant, or exactly what you ask for.",
  },
  {
    step: "04",
    title: "Let the Context Engine do the remembering",
    description:
      "Behind the scenes, the Context Engine checks your current session, your Project's memory and decisions, and your Library — then hands the model only what actually matters.",
  },
  {
    step: "05",
    title: "Keep what's important",
    description:
      "Important understanding becomes Memory. Important choices become Decisions. Meaningful generated work becomes an Output you can find again.",
  },
  {
    step: "06",
    title: "Leave, and come back to exactly this",
    description:
      "Close the tab. Come back next week. Your Project, your Mentor relationships, your Library and your decisions are still exactly where you left them.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line/60 py-20 sm:py-28">
        <Container className="max-w-2xl">
          <Eyebrow className="mb-6">How Ombre Works</Eyebrow>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            From a single question to a workspace that remembers.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
            You don&rsquo;t need to understand the architecture below to
            benefit from it. Here&rsquo;s the shape of it anyway.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <RevealGroup className="mx-auto flex max-w-3xl flex-col">
            {STEPS.map((item, index) => (
              <RevealItem key={item.step}>
                <div
                  className={`flex gap-6 border-line/60 py-10 sm:gap-10 ${
                    index !== 0 ? "border-t" : ""
                  }`}
                >
                  <span className="font-display text-2xl text-accent/70">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-line/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Underneath"
            title="A Context Engine, not a bigger prompt."
            description="Relevance is checked and authorized before anything reaches the model. Your Library is available everywhere, but it is never blindly injected everywhere."
            className="mx-auto"
          />
        </Container>
      </section>
    </>
  );
}
