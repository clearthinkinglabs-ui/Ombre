import type { Metadata } from "next";
import { Hero } from "@/components/sections/landing/hero";
import { Thesis } from "@/components/sections/landing/thesis";
import { SystemsGrid } from "@/components/sections/landing/systems-grid";
import { CTASection } from "@/components/sections/landing/cta";

export const metadata: Metadata = {
  title: "Ombre — A Persistent Intelligence Workspace",
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Thesis />
      <SystemsGrid />
      <CTASection />
    </>
  );
}
