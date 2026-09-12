"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { fadeInUp } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <AmbientGlow />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <Eyebrow>A Persistent Intelligence Workspace</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            General AI helps you do.
            <br />
            <span className="italic text-accent">Mentors help you think.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-balance text-lg leading-relaxed text-ink-secondary"
          >
            Ombre connects broad intelligence, specialized reasoning, your
            projects, and everything you&rsquo;ve taught it into one
            workspace &mdash; so your work stays connected, not scattered
            across a dozen forgotten conversations.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/auth" size="lg" showArrow>
              Enter Ombre
            </Button>
            <Button href="/explore" size="lg" variant="secondary">
              Explore how it works
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
