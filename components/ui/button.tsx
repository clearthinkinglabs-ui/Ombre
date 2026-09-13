"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  showArrow?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-highlight hover:text-background",
  secondary:
    "border border-line text-ink hover:border-accent/50 hover:text-accent",
  ghost: "text-ink-secondary hover:text-ink",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const hoverMotion = {
  whileHover: { scale: 1.02, y: -1 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium tracking-tight transition-colors duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );

  if (href) {
    return (
      <motion.div {...hoverMotion} className="inline-block">
        <Link href={href} onClick={onClick} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...hoverMotion}
    >
      {content}
    </motion.button>
  );
}
