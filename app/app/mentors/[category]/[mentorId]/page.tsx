import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import {
  MENTORS,
  getCategoryById,
  getSubcategoryById,
  getMentorById,
} from "@/lib/mentors-data";

export function generateStaticParams() {
  return MENTORS.map((mentor) => ({
    category: mentor.categoryId,
    mentorId: mentor.id,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string; mentorId: string };
}): Metadata {
  const mentor = getMentorById(params.mentorId);
  return { title: mentor ? mentor.name : "Mentor" };
}

export default function MentorProfilePage({
  params,
}: {
  params: { category: string; mentorId: string };
}) {
  const mentor = getMentorById(params.mentorId);
  const category = mentor ? getCategoryById(mentor.categoryId) : undefined;
  const subcategory = mentor ? getSubcategoryById(mentor.subcategoryId) : undefined;

  if (!mentor || !category || !subcategory || category.id !== params.category) {
    notFound();
  }

  return (
    <div className="relative">
      <AmbientGlow className="opacity-70" />
      <Container className="py-10 sm:py-14">
        <Link
          href={`/app/mentors/${category.id}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {category.name}
        </Link>

        <Eyebrow className="mb-6">
          {category.name} / {subcategory.name}
        </Eyebrow>

        <h1 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {mentor.name}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-secondary">
          {mentor.description}
        </p>

        {mentor.focusAreas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {mentor.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-line/60 px-3 py-1.5 text-xs text-ink-secondary"
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Button href={`/app/mentors/${category.id}/${mentor.id}/chat`} size="lg" showArrow>
            Start Conversation
          </Button>
        </div>
      </Container>
    </div>
  );
}
