"use client";

import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Brain,
  Users,
  FolderKanban,
  Library,
  BookMarked,
  GitBranch,
  MessagesSquare,
  FileOutput,
  Network,
} from "lucide-react";

const SYSTEMS = [
  { icon: Brain, name: "General AI", detail: "Broad intelligence for execution." },
  { icon: Users, name: "Mentors", detail: "Specialized reasoning and perspective." },
  { icon: FolderKanban, name: "Projects", detail: "Persistent, goal-oriented workspaces." },
  { icon: Library, name: "Library", detail: "Your knowledge and generated assets." },
  { icon: BookMarked, name: "Memory", detail: "What Ombre understands about your work." },
  { icon: GitBranch, name: "Decisions", detail: "What you chose, and why." },
  { icon: MessagesSquare, name: "Conversations", detail: "Every interaction, always available." },
  { icon: FileOutput, name: "Outputs", detail: "The work that mattered enough to keep." },
  { icon: Network, name: "Context Engine", detail: "Connects the right information at the right time." },
];

export function SystemsGrid() {
  return (
    <section className="border-t border-line/60 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="One Connected System"
          title="Nine systems. One intelligence."
          description="Each piece of Ombre is useful on its own. Connected, they stop you from re-explaining your work every time you open a new conversation."
          className="mb-16"
        />

        <RevealGroup className="grid gap-px overflow-hidden rounded-lg border border-line/60 bg-line/60 sm:grid-cols-3">
          {SYSTEMS.map(({ icon: Icon, name, detail }) => (
            <RevealItem key={name}>
              <div className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-surface">
                <Icon
                  className="mb-4 h-5 w-5 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
                  aria-hidden
                />
                <h3 className="mb-2 text-base font-medium text-ink">{name}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
