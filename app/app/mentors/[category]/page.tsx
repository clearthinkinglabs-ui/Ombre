import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { MentorCard } from "@/components/sections/mentors/mentor-card";
import { CATEGORIES, getCategoryById, getMentorsBySubcategory } from "@/lib/mentors-data";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.id }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategoryById(params.category);
  return { title: category ? category.name : "Mentors" };
}

export default function MentorCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategoryById(params.category);
  if (!category) notFound();

  return (
    <Container className="py-10 sm:py-14">
      <Link
        href="/app/mentors"
        className="mb-8 inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        All categories
      </Link>

      <Eyebrow className="mb-4">Mentors / {category.name}</Eyebrow>
      <h1 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {category.name}
      </h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-secondary">
        {category.tagline}
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {category.subcategories.map((subcategory) => {
          const mentors = getMentorsBySubcategory(subcategory.id);
          return (
            <div key={subcategory.id}>
              <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                {subcategory.name}
              </h2>
              <RevealGroup className="grid gap-4 sm:grid-cols-2">
                {mentors.map((mentor) => (
                  <RevealItem key={mentor.id}>
                    <MentorCard
                      mentor={mentor}
                      href={`/app/mentors/${category.id}/${mentor.id}`}
                    />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
