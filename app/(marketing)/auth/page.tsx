"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center py-16">
      <Container className="max-w-md">
        <GlassPanel className="p-8 sm:p-10">
          <div
            className="mb-8 flex rounded-md border border-line/60 p-1"
            role="tablist"
            aria-label="Authentication mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "signin"}
              onClick={() => {
                setMode("signin");
                setSubmitted(false);
              }}
              className={cn(
                "flex-1 cursor-pointer rounded-sm px-4 py-2 text-sm transition-colors duration-200",
                mode === "signin"
                  ? "bg-surface-elevated text-ink"
                  : "text-ink-secondary hover:text-ink"
              )}
            >
              Sign in
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "signup"}
              onClick={() => {
                setMode("signup");
                setSubmitted(false);
              }}
              className={cn(
                "flex-1 cursor-pointer rounded-sm px-4 py-2 text-sm transition-colors duration-200",
                mode === "signup"
                  ? "bg-surface-elevated text-ink"
                  : "text-ink-secondary hover:text-ink"
              )}
            >
              Create account
            </button>
          </div>

          <h1 className="mb-2 font-display text-2xl text-ink">
            {mode === "signin" ? "Welcome back" : "Start with Ombre"}
          </h1>
          <p className="mb-8 text-sm text-ink-secondary">
            {mode === "signin"
              ? "Sign in to pick up exactly where you left off."
              : "A name and an email — Ombre asks for nothing else to start."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {mode === "signup" && (
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-ink-secondary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="h-11 rounded-md border border-line bg-background px-4 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent/60"
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-ink-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-11 rounded-md border border-line bg-background px-4 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent/60"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm text-ink-secondary">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
                minLength={8}
                className="h-11 rounded-md border border-line bg-background px-4 text-sm text-ink outline-none transition-colors duration-200 focus:border-accent/60"
              />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full justify-center">
              {mode === "signin" ? "Sign in" : "Create account"}
            </Button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                className="rounded-md border border-line/60 bg-surface px-4 py-3 text-center text-xs leading-relaxed text-ink-secondary"
              >
                This is an interface preview — authentication isn&rsquo;t
                connected in this build yet.
              </motion.p>
            )}
          </form>
        </GlassPanel>

        <p className="mt-6 text-center text-xs text-ink-muted">
          Returning to{" "}
          <Link
            href="/"
            className="text-ink-secondary underline underline-offset-4 hover:text-ink"
          >
            Ombre
          </Link>
        </p>
      </Container>
    </section>
  );
}
