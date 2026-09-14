import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";

export function CategoryCard({
  href,
  icon: Icon,
  name,
  tagline,
  mentorCount,
  subcategoryCount,
}: {
  href: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  mentorCount: number;
  subcategoryCount: number;
}) {
  return (
    <Link
      href={href}
      className="group block h-full transition-transform duration-300 hover:-translate-y-1"
    >
      <GlassPanel className="flex h-full flex-col justify-between p-8">
        <div>
          <Icon className="h-6 w-6 text-accent-highlight" aria-hidden />
          <h2 className="mt-5 font-display text-2xl text-ink transition-colors duration-300 group-hover:text-accent-highlight">
            {name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{tagline}</p>
        </div>
        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
          {mentorCount} mentors · {subcategoryCount} areas
        </p>
      </GlassPanel>
    </Link>
  );
}
