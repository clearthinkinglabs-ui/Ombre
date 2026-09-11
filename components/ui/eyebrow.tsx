import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line/70 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
