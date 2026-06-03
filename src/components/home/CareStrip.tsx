"use client";

import { motion } from "framer-motion";
import { Wind, PenLine, Heart, Moon, Sprout } from "lucide-react";
import { StaggerReveal, StaggerItem, SectionReveal } from "@/components/ui/SectionReveal";

const PILLARS = [
  { icon: Wind, label: "Breathe deeply" },
  { icon: PenLine, label: "Write it out" },
  { icon: Heart, label: "Pray" },
  { icon: Moon, label: "Rest well" },
  { icon: Sprout, label: "Grow daily" },
];

export function CareStrip() {
  return (
    <section className="bg-[#efe9dd] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <SectionReveal className="mb-12">
          <p className="text-label text-[#7c8b74] mb-3">Daily Practice</p>
          <h2 className="text-h2 text-[#33342e]">Care for your mind</h2>
        </SectionReveal>

        <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5" stagger={0.08}>
          {PILLARS.map(({ icon: Icon, label }, i) => (
            <StaggerItem key={label}>
              <motion.div
                className="flex flex-col items-center gap-4 bg-[#fcfaf5] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 cursor-default"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#d5e8cf] flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 text-[#5a6b57]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm font-medium text-[#5c5e54] text-center leading-tight">
                  {label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
