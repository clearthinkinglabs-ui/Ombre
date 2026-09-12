import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container className="flex min-h-[70vh] items-center justify-center py-16">
      <GlassPanel className="max-w-md p-10 text-center">
        <Eyebrow className="mb-4">Coming in a Later Slice</Eyebrow>
        <h1 className="font-display text-2xl text-ink">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{description}</p>
        <div className="mt-8 flex justify-center">
          <Button href="/app/home" variant="secondary">
            Back to Home
          </Button>
        </div>
      </GlassPanel>
    </Container>
  );
}
