"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Multi-layer atmospheric system, per the Ombre color philosophy:
 * - primary: Peacock (brand atmosphere) — large, soft, dominant
 * - luminous: Misty Aqua (life / interaction energy) — smaller, offset
 * - depth: Obsidian Violet (hidden dimensionality) — faint, discovered
 *   rather than announced
 *
 * Rare warm accents (Warm Sand / Rose Quartz) are deliberately absent
 * from the default ambient atmosphere — they're reserved for specific
 * editorial moments, not background use. All layers animate only
 * opacity/transform (GPU-friendly) and move slowly and independently
 * so the effect reads as atmosphere, not a glowing shape.
 */
export function AmbientGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <motion.div
        className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[150px]"
        animate={{ opacity: [0.7, 1, 0.7], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent-highlight/[0.10] blur-[110px]"
        animate={{ opacity: [0.5, 0.85, 0.5], x: [0, -16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet/[0.18] blur-[130px]"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}
