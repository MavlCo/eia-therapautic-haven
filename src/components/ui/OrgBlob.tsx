"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrgBlobProps {
  className?: string;
  color?: "sage" | "clay" | "cream" | "terracotta";
  size?: "sm" | "md" | "lg" | "xl";
  speed?: "fast" | "normal" | "slow";
  delay?: number;
}

const colorMap = {
  sage: "bg-sage-mist",
  clay: "bg-clay",
  cream: "bg-cream-warm",
  terracotta: "bg-terracotta",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[32rem] h-[32rem]",
};

export function OrgBlob({
  className,
  color = "sage",
  size = "lg",
  speed = "normal",
  delay = 0,
}: OrgBlobProps) {
  const duration = speed === "fast" ? 18 : speed === "slow" ? 32 : 24;

  return (
    <motion.div
      className={cn(
        "organic-blob opacity-10 pointer-events-none select-none",
        colorMap[color],
        sizeMap[size],
        className
      )}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
        scale: [1, 1.05, 0.97, 1],
        rotate: [0, 3, -2, 0],
        borderRadius: [
          "60% 40% 70% 30% / 50% 60% 40% 70%",
          "40% 60% 30% 70% / 60% 40% 70% 50%",
          "70% 30% 50% 50% / 40% 70% 30% 60%",
          "60% 40% 70% 30% / 50% 60% 40% 70%",
        ],
      }}
      transition={{
        duration,
        delay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      aria-hidden="true"
    />
  );
}
