import Link from "next/link";
import { Container } from "@/components/ui/container";

const LINKS = [
  { href: "/concept", label: "Concept" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/mentors", label: "Mentors" },
  { href: "/explore", label: "Explore" },
  { href: "/auth", label: "Sign in" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60 py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-base text-ink">Ombre</p>
          <p className="mt-1 max-w-xs text-sm text-ink-secondary">
            A persistent intelligence workspace.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end"
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-secondary transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container>
        <p className="mt-8 text-center text-xs text-ink-muted sm:text-left">
          © {new Date().getFullYear()} Ombre. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
