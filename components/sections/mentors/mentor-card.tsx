import { GlassPanel } from "@/components/ui/glass-panel";
import type { MentorPreview } from "@/lib/mentors-data";

export function MentorCard({ mentor }: { mentor: MentorPreview }) {
  return (
    <GlassPanel className="flex h-full flex-col justify-between p-6">
      <div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-muted">
          {mentor.category}
        </p>
        <h3 className="mt-3 font-display text-lg text-ink">{mentor.name}</h3>
        <p className="mt-1 text-sm text-accent">{mentor.specialization}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
          {mentor.description}
        </p>
      </div>
    </GlassPanel>
  );
}
