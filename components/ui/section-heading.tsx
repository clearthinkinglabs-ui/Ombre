import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-2xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
