"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { OrgBlob } from "@/components/ui/OrgBlob";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <OrgBlob className="absolute top-0 right-0" color="sage" size="xl" speed="slow" />
      <OrgBlob className="absolute bottom-0 left-0" color="clay" size="md" delay={5} speed="slow" />

      {/* Botanical sprig decoration */}
      <svg
        className="absolute right-10 top-1/4 w-24 h-32 text-[#aeb9a4]/20 pointer-events-none hidden lg:block"
        viewBox="0 0 100 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <path d="M50 140 Q50 100 50 70" strokeLinecap="round" />
        <path d="M50 100 Q30 80 20 60" strokeLinecap="round" />
        <path d="M50 85 Q70 65 80 50" strokeLinecap="round" />
        <path d="M50 70 Q35 55 25 40" strokeLinecap="round" />
        <ellipse cx="20" cy="60" rx="12" ry="8" transform="rotate(-20 20 60)" fill="currentColor" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="80" cy="50" rx="12" ry="8" transform="rotate(30 80 50)" fill="currentColor" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="25" cy="40" rx="10" ry="7" transform="rotate(-10 25 40)" fill="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>

      <div className="relative z-10 max-w-xl mx-auto px-6 py-20 text-center">
        <motion.p
          className="text-script text-[#7c8b74] text-4xl mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.p>

        <motion.h1
          className="text-h2 text-[#33342e] mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          This path led somewhere quiet.
        </motion.h1>

        <motion.p
          className="text-lead text-[#5c5e54] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          The page you&apos;re looking for doesn&apos;t exist — but we&apos;re still here, and so
          is a path forward.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-8 py-4 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_12px_40px_rgba(90,107,87,0.3)] transition-all duration-300 group"
          >
            Return home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="text-[#5a6b57] font-semibold text-sm hover:underline underline-offset-4"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
