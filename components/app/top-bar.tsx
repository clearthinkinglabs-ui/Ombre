"use client";

import Link from "next/link";
import { Menu, CircleUserRound } from "lucide-react";

export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-line/60 bg-background/80 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle navigation"
          className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-ink-secondary transition-colors duration-200 hover:bg-surface hover:text-ink"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
        <Link href="/app/home" className="font-display text-base tracking-tight text-ink">
          Ombre
        </Link>
      </div>

      <button
        type="button"
        aria-label="Account — not connected yet"
        disabled
        className="inline-flex cursor-not-allowed items-center justify-center rounded-full p-1.5 text-ink-muted opacity-60"
      >
        <CircleUserRound className="h-6 w-6" aria-hidden />
      </button>
    </header>
  );
}
