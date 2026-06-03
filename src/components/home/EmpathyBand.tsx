"use client";

import { motion } from "framer-motion";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { EMOTIONAL_STATES } from "@/lib/constants";

export function EmpathyBand() {
  return (
    <section className="bg-[#efe9dd] py-20 md:py-28 relative overflow-hidden">
      {/* Blob */}
      <div
        className="absolute right-0 top-0 w-64 h-64 bg-[#c8b6a0] opacity-[0.08] pointer-events-none"
        style={{
          borderRadius: "40% 60% 30% 70% / 60% 40% 70% 50%",
          filter: "blur(64px)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <SectionReveal>
          <h2 className="text-h2 text-[#33342e] mb-4">
            We understand what you&apos;re carrying
          </h2>
          <p className="text-lead text-[#5c5e54] max-w-xl mx-auto mb-12">
            Whatever has brought you here — you deserve to be heard, supported,
            and understood.
          </p>
        </SectionReveal>

        {/* Emotional state pills */}
        <StaggerReveal className="flex flex-wrap justify-center gap-3 mb-14" stagger={0.06}>
          {EMOTIONAL_STATES.map((state, i) => (
            <StaggerItem key={state}>
              <motion.span
                className="inline-block bg-[#fcfaf5] text-[#5c5e54] text-sm font-medium px-5 py-2.5 rounded-full border border-[#c8b6a0]/60 shadow-sm"
                animate={{
                  y: [0, -4, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4 + i * 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                {state}
              </motion.span>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Script line */}
        <SectionReveal delay={0.3}>
          <p
            className="text-script text-[#5a6b57]"
          >
            You are not alone.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
