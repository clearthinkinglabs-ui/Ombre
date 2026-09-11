/**
 * Canonical Ombre color tokens (locked).
 *
 * These are the source values. `app/globals.css` mirrors them as
 * space-separated RGB CSS variables so Tailwind's opacity modifiers work;
 * use this file wherever a plain hex string is needed instead (inline SVG,
 * canvas/WebGL, <meta theme-color>, etc.).
 */
export const colors = {
  background: "#0B0B0A",
  backgroundSecondary: "#111110",
  surface: "#171716",
  surfaceElevated: "#1D1D1B",
  textPrimary: "#F3F0E8",
  textSecondary: "#A7A39A",
  textMuted: "#706D66",
  border: "#292925",
  accent: "#C8A96B",
  accentHighlight: "#E0C58A",
  success: "#8FAF8A",
  warning: "#C9A86A",
  error: "#C77C73",
} as const;
