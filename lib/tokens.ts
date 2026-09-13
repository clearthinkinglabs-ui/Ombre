/**
 * Canonical Ombre color tokens (locked) — the oceanic palette:
 * "A nocturnal ocean of intelligence — deep, calm and sophisticated,
 * illuminated by controlled teal and aqua energy, with hidden violet
 * depth and extremely rare moments of human warmth."
 *
 * See app/globals.css for the CSS-variable source of truth (used by
 * Tailwind). This file mirrors it as plain hex for non-Tailwind
 * contexts (inline SVG, canvas/WebGL, <meta theme-color>, etc.).
 */
export const colors = {
  noir: "#080B10",
  midnight: "#0E1724",
  deepOcean: "#102B3A",
  deepTeal: "#123F43",
  peacock: "#1F6F78",
  mistyAqua: "#8FD8D2",
  obsidianViolet: "#18122B",
  moonlight: "#E8F0EC",
  warmSand: "#CDAA73",
  roseQuartz: "#E2BAA8",
  textSecondary: "#9FB5AF",
  textMuted: "#62766F",
  border: "#1A333D",
  success: "#6FAF8E",
  warning: "#D19A54",
  error: "#D97468",
} as const;
