"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { OrgBlob } from "@/components/ui/OrgBlob";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <OrgBlob className="absolute top-0 left-0" color="sage" size="xl" speed="slow" />
      <OrgBlob className="absolute bottom-0 right-0" color="clay" size="lg" delay={3} speed="slow" />

      <div className="relative z-10 max-w-xl mx-auto px-6 py-20 text-center">
        {/* Animated check */}
        <motion.div
          className="w-20 h-20 bg-[#d5e8cf] rounded-full flex items-center justify-center mx-auto mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Check className="w-8 h-8 text-[#5a6b57]" strokeWidth={2.5} />
          </motion.div>
        </motion.div>

        {/* Sprig decoration */}
        <motion.p
          className="text-script text-[#5a6b57] mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          You did it.
        </motion.p>

        <motion.h1
          className="text-h2 text-[#33342e] mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Thank you for completing your intake form.
        </motion.h1>

        <motion.div
          className="bg-[#fcfaf5] rounded-3xl px-8 py-7 shadow-[0_16px_48px_rgba(90,107,87,0.1)] mb-8 text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-8 h-8 bg-[#5a6b57] rounded-full flex items-center justify-center mb-4">
            <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <p
            className="text-[#33342e] leading-relaxed"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontStyle: "italic" }}
          >
            &ldquo;Your information has been received and will be reviewed before your
            session. We will proceed with scheduling shortly.&rdquo;
          </p>
          <p className="mt-3 text-label text-[#aeb9a4]">— EIA Therapeutic Haven</p>
        </motion.div>

        <motion.p
          className="text-body text-[#5c5e54] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Please check your email or WhatsApp for further instructions. If you
          don&apos;t hear from us within 24 hours, feel free to send us a message.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-7 py-3.5 rounded-full hover:bg-[#4a5e47] transition-colors duration-300"
          >
            Return home
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/resources"
            className="text-[#5a6b57] font-semibold text-sm hover:underline underline-offset-4"
          >
            Read the journal
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
