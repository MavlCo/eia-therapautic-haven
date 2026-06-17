"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function PositioningQuote() {
  return (
    <section
      className="relative bg-[#5a6b57] py-24 md:py-32 overflow-hidden"
      aria-label="Mission statement"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 bg-[#4a5e47] opacity-60 pointer-events-none"
        style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%", filter: "blur(80px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#3d4f3a] opacity-50 pointer-events-none"
        style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 70% 50%", filter: "blur(64px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <SectionReveal>
          <motion.div
            className="text-[#c9a86a] flex justify-center mb-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          >
            <Heart className="w-8 h-8 fill-[#c9a86a]" aria-hidden="true" />
          </motion.div>

          <blockquote
            className="text-[#d5e8cf] max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.375rem, 3vw, 2.25rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            &ldquo;A structured mental wellness and emotional clarity practice
            supporting individuals, couples, and families through stress,
            overwhelm, and life transitions — using guided therapeutic care.&rdquo;
          </blockquote>

          <p
            className="mt-6 text-[#aeb9a4] text-label"
          >
            EIA Therapeutic Haven
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
