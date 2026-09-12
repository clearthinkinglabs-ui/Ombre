import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ExploreScrollHero } from "@/components/sections/explore/scroll-hero";
import { ExploreChapters } from "@/components/sections/explore/chapters";

export const metadata: Metadata = {
  title: "Explore",
  description: "Scroll through what a persistent intelligence workspace feels like.",
};

export default function ExplorePage() {
  return (
    <>
      <ExploreScrollHero />
      <ExploreChapters />
      <section className="py-24 text-center sm:py-32">
        <Container>
          <h2 className="mx-auto max-w-xl font-display text-2xl font-medium text-ink sm:text-3xl">
            This is what Ombre is for.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/auth" size="lg" showArrow>
              Enter Ombre
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
