import type { LucideIcon } from "lucide-react";
import { Home, Sparkles, Users, FolderKanban, Library, History, Clock, Bookmark } from "lucide-react";

export interface AppNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const PRIMARY_NAV: AppNavItem[] = [
  { href: "/app/home", label: "Home", icon: Home },
  { href: "/app/general-ai", label: "General AI", icon: Sparkles },
  { href: "/app/mentors", label: "Mentors", icon: Users },
  { href: "/app/projects", label: "Projects", icon: FolderKanban },
  { href: "/app/library", label: "Library", icon: Library },
];

export const SECONDARY_NAV: AppNavItem[] = [
  { href: "/app/history", label: "History", icon: History },
  { href: "/app/recent", label: "Recent", icon: Clock },
  { href: "/app/saved", label: "Saved", icon: Bookmark },
];
