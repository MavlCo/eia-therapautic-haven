"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-[#f6f3ec] py-28 md:py-36 relative overflow-hidden">
      {/* Organic blob backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#aeb9a4] opacity-[0.07]"
          style={{
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <SectionReveal>
          <p className="text-label text-[#7c8b74] mb-4">Your Wellbeing Matters</p>
          <h2
            className="text-[#33342e] mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.15,
            }}
          >
            Your mental health <br className="hidden md:block" />
            matters too.
          </h2>
          <p className="text-lead text-[#5c5e54] max-w-lg mx-auto mb-12">
            Taking the first step is the hardest. We&apos;re here to make it gentle,
            structured, and completely confidential.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          >
            <Link
              href="/begin"
              className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-9 py-4 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_12px_40px_rgba(90,107,87,0.3)] transition-all duration-300 group text-base"
            >
              Begin Your Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[#5a6b57] font-semibold border-[1.5px] border-[#aeb9a4] px-9 py-4 rounded-full hover:border-[#7c8b74] hover:bg-[#aeb9a4]/10 transition-all duration-300 text-base"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            Send HELP on WhatsApp
          </a>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <p className="mt-8 text-sm text-[#aeb9a4]">
            Confidential · Online · Available globally
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
