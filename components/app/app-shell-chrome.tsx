"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SkipLink } from "@/components/layout/skip-link";
import { TopBar } from "@/components/app/top-bar";
import { DesktopSidebar, MobileSidebarDrawer } from "@/components/app/sidebar";

export function AppShellChrome({ children }: { children: ReactNode }) {
  const [railExpanded, setRailExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMenuClick() {
    setRailExpanded((v) => !v);
    setMobileMenuOpen((v) => !v);
  }

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <div className="flex min-h-screen bg-background">
      <SkipLink />
      <DesktopSidebar expanded={railExpanded} />
      <MobileSidebarDrawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={handleMenuClick} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
