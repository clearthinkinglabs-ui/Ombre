"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ExploreScrollHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  return (
    <section ref={ref} className="relative flex h-[90vh] items-center overflow-hidden">
      <motion.div style={{ opacity, y, scale }} className="w-full">
        <Container className="max-w-2xl">
          <Eyebrow className="mb-6">Explore Ombre</Eyebrow>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Scroll through what a persistent workspace actually feels like.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary">
            Not a feature list. The shape of the thing.
          </p>
        </Container>
      </motion.div>
    </section>
  );
}
