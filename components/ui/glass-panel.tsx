import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line/60 bg-surface/60 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
