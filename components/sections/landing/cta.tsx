"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { AmbientGlow } from "@/components/ui/ambient-glow";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line/60 py-24 sm:py-32">
      <AmbientGlow className="opacity-60" />
      <Container>
        <RevealGroup className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <RevealItem>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Your work deserves to stay connected.
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="max-w-md text-base leading-relaxed text-ink-secondary">
              Start with a single conversation. Ombre keeps the thread as your
              work grows.
            </p>
          </RevealItem>
          <RevealItem>
            <Button href="/auth" size="lg" showArrow>
              Enter Ombre
            </Button>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
