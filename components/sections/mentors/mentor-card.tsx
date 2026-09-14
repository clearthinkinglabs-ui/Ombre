import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { cn } from "@/lib/utils";
import type { Mentor } from "@/lib/mentors-data";
import { getCategoryById, getSubcategoryById } from "@/lib/mentors-data";

export function MentorCard({ mentor, href }: { mentor: Mentor; href?: string }) {
  const category = getCategoryById(mentor.categoryId);
  const subcategory = getSubcategoryById(mentor.subcategoryId);

  const content = (
    <GlassPanel className="flex h-full flex-col justify-between p-6">
      <div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
          {category?.name} / {subcategory?.name}
        </p>
        <h3
          className={cn(
            "mt-3 font-display text-xl text-ink transition-colors duration-300",
            href && "group-hover:text-accent-highlight"
          )}
        >
          {mentor.name}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
          {mentor.description}
        </p>
      </div>

      {mentor.focusAreas.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {mentor.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-line/60 px-2.5 py-1 text-[0.6875rem] text-ink-secondary"
            >
              {area}
            </span>
          ))}
        </div>
      )}
    </GlassPanel>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block h-full transition-transform duration-300 hover:-translate-y-1"
      >
        {content}
      </Link>
    );
  }

  return content;
}
