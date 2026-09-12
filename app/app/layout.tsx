import type { ReactNode } from "react";
import { AppShellChrome } from "@/components/app/app-shell-chrome";

export default function AppLayout({ children }: { children: ReactNode }) {
  return <AppShellChrome>{children}</AppShellChrome>;
}
