"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Settings, CircleUserRound } from "lucide-react";
import type { AppNavItem } from "@/components/app/nav-items";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/components/app/nav-items";
import { cn } from "@/lib/utils";

const BOTTOM_NAV: AppNavItem[] = [
  { href: "/app/settings", label: "Settings", icon: Settings },
  { href: "/app/profile", label: "Profile", icon: CircleUserRound },
];

function NavList({
  items,
  expanded,
  pathname,
  onNavigate,
}: {
  items: AppNavItem[];
  expanded: boolean;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors duration-200",
                active
                  ? "bg-surface-elevated text-ink"
                  : "text-ink-secondary hover:bg-surface hover:text-ink"
              )}
            >
              <Icon className="h-[1.125rem] w-[1.125rem] flex-shrink-0" aria-hidden />
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DesktopSidebar({ expanded }: { expanded: boolean }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden shrink-0 flex-col justify-between border-r border-line/60 bg-background-secondary py-6 md:flex",
        expanded ? "w-64" : "w-[4.5rem]"
      )}
    >
      <div className="flex flex-col gap-6 px-3">
        <NavList items={PRIMARY_NAV} expanded={expanded} pathname={pathname} />
        <div className="border-t border-line/60 pt-4">
          <NavList items={SECONDARY_NAV} expanded={expanded} pathname={pathname} />
        </div>
      </div>

      <div className="px-3">
        <NavList items={BOTTOM_NAV} expanded={expanded} pathname={pathname} />
      </div>
    </aside>
  );
}

export function MobileSidebarDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col justify-between border-r border-line/60 bg-background-secondary py-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="flex flex-col gap-6 px-3">
              <NavList items={PRIMARY_NAV} expanded pathname={pathname} onNavigate={onClose} />
              <div className="border-t border-line/60 pt-4">
                <NavList items={SECONDARY_NAV} expanded pathname={pathname} onNavigate={onClose} />
              </div>
            </div>
            <div className="px-3">
              <NavList items={BOTTOM_NAV} expanded pathname={pathname} onNavigate={onClose} />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
