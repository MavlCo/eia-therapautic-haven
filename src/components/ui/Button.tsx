"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  breathing?: boolean;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#5a6b57] text-[#fcfaf5] hover:bg-[#4a5e47] shadow-[0_8px_24px_rgba(90,107,87,0.2)]",
  secondary:
    "bg-transparent text-[#5a6b57] border-[1.5px] border-[#7c8b74] hover:bg-[#aeb9a4]/20 hover:border-[#5a6b57]",
  ghost:
    "bg-transparent text-[#5a6b57] hover:text-[#33342e] underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3.5 text-[0.9375rem] gap-2",
  lg: "px-9 py-4 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      breathing = false,
      href,
      external = false,
      onClick,
      type = "button",
      disabled,
      "aria-label": ariaLabel,
    },
    ref
  ) => {
    const baseClass = cn(
      "inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide",
      "transition-all duration-300 cursor-pointer select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c8b74] focus-visible:ring-offset-2",
      variants[variant],
      sizes[size],
      disabled && "opacity-40 cursor-not-allowed",
      className
    );

    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
            aria-label={ariaLabel}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            animate={breathing ? { scale: [1, 1.03, 1] } : undefined}
            transition={
              breathing
                ? { duration: 4, ease: "easeInOut", repeat: Infinity }
                : undefined
            }
          >
            {children}
          </motion.a>
        );
      }
      return (
        <Link href={href} className={baseClass} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        className={baseClass}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        whileHover={disabled ? undefined : { y: -1 }}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        animate={breathing ? { scale: [1, 1.03, 1] } : undefined}
        transition={
          breathing
            ? { duration: 4, ease: "easeInOut", repeat: Infinity }
            : undefined
        }
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
