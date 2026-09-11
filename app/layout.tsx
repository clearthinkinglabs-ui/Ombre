import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ombre — A Persistent Intelligence Workspace",
    template: "%s · Ombre",
  },
  description:
    "Ombre connects General AI, specialized Mentors, Projects, and persistent knowledge into one intelligence workspace that remembers what matters.",
  metadataBase: new URL("https://ombre.app"),
  openGraph: {
    title: "Ombre — A Persistent Intelligence Workspace",
    description:
      "General AI helps you do. Mentors help you think. Ombre connects both, with everything else that matters, into one place.",
    siteName: "Ombre",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
