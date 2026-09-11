"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AmbientGlow({
  className,
  variant = "accent",
}: {
  className?: string;
  variant?: "accent" | "neutral";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <motion.div
        className={cn(
          "absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full blur-[120px]",
          variant === "accent" ? "bg-accent/10" : "bg-ink/5"
        )}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
