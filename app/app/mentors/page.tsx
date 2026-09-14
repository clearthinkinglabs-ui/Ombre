import type { Metadata } from "next";
import { Briefcase, Code2, Target, HeartPulse } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CategoryCard } from "@/components/app/mentors/category-card";
import { CATEGORIES, getMentorsByCategory } from "@/lib/mentors-data";

export const metadata: Metadata = { title: "Mentors" };

const CATEGORY_ICONS = {
  business: Briefcase,
  coding: Code2,
  productivity: Target,
  health: HeartPulse,
} as const;

export default function MentorsHubPage() {
  return (
    <Container className="py-10 sm:py-14">
      <Eyebrow className="mb-4">Mentors</Eyebrow>
      <h1 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        A specialized mind for every kind of problem.
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
        Four worlds of expertise, each built from mentors who think
        differently about the same kind of problem.
      </p>

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <RevealItem key={category.id}>
            <CategoryCard
              href={`/app/mentors/${category.id}`}
              icon={CATEGORY_ICONS[category.id]}
              name={category.name}
              tagline={category.tagline}
              mentorCount={getMentorsByCategory(category.id).length}
              subcategoryCount={category.subcategories.length}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
