import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] items-center justify-center py-24">
        <Container className="max-w-md text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl text-ink">
            This page hasn&rsquo;t been connected yet.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            Even Ombre&rsquo;s Context Engine can&rsquo;t retrieve a page
            that doesn&rsquo;t exist.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Back to Ombre</Button>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
