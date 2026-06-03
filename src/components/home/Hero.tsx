"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Heart } from "lucide-react";
import { OrgBlob } from "@/components/ui/OrgBlob";
import { WHATSAPP_URL } from "@/lib/constants";

const TRUST_ITEMS = [
  { icon: Shield, label: "Confidential" },
  { icon: Globe, label: "Online" },
  { icon: Heart, label: "Compassionate" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Background blobs */}
      <OrgBlob
        className="absolute -top-32 -right-32 opacity-[0.07]"
        color="sage"
        size="xl"
        speed="slow"
      />
      <OrgBlob
        className="absolute bottom-0 -left-24 opacity-[0.06]"
        color="clay"
        size="lg"
        delay={4}
      />

      {/* Breath line */}
      <div
        className="breath-line hidden xl:block h-full top-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="max-w-2xl">
            {/* Label */}
            <motion.p
              className="text-label text-[#7c8b74] mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Mental Wellness · Emotional Clarity · Life Structure
            </motion.p>

            {/* Headline — line reveal stagger */}
            <h1
              id="hero-heading"
              className="text-display text-[#33342e] mb-6 overflow-hidden"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15,
                }}
              >
                Even when your mind
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
              >
                feels{" "}
                <motion.span
                  className="text-[#5a6b57] italic"
                  style={{ fontFamily: "var(--font-script)", fontSize: "1em" }}
                  initial={{ opacity: 0, strokeDashoffset: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  overwhelmed,
                </motion.span>
              </motion.span>
              <motion.span
                className="block text-[#5a6b57]"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.45,
                }}
              >
                find your way back.
              </motion.span>
            </h1>

            {/* Lead */}
            <motion.p
              className="text-lead text-[#5c5e54] mb-10 max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              Structured emotional wellness and clarity support for individuals
              navigating stress, overwhelm, and life transitions — wherever you
              are in the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
            >
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              >
                <Link
                  href="/begin"
                  className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-8 py-4 rounded-full hover:bg-[#4a5e47] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(90,107,87,0.3)] group"
                >
                  Begin Your Session
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-[#5a6b57] font-semibold border-[1.5px] border-[#aeb9a4] px-8 py-4 rounded-full hover:border-[#7c8b74] hover:bg-[#aeb9a4]/10 transition-all duration-300"
              >
                How It Works
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 text-[#7c8b74]"
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  <span className="text-label text-[#5c5e54]">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            {/* Image container — organic asymmetric radius */}
            <div
              className="relative w-full aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: "80px 24px 80px 24px",
              }}
            >
              <motion.div
                className="w-full h-full"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
                  alt="A serene woman with a calm, composed expression — representing the emotional clarity and peace that EIA Therapeutic Haven helps clients find"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 40vw, 500px"
                />
              </motion.div>

              {/* Sage overlay tint */}
              <div className="absolute inset-0 bg-[#5a6b57]/8 mix-blend-multiply" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-8 bg-[#fcfaf5] rounded-2xl px-5 py-4 shadow-[0_16px_48px_rgba(90,107,87,0.14)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs text-[#aeb9a4] font-semibold tracking-widest uppercase mb-0.5">
                You are safe here
              </p>
              <p
                className="text-[#5a6b57] text-lg leading-tight"
                style={{ fontFamily: "var(--font-script)" }}
              >
                You are not alone.
              </p>
            </motion.div>

            {/* Drifting blob behind image */}
            <div
              className="absolute -top-12 -right-12 w-56 h-56 bg-[#aeb9a4] opacity-10 pointer-events-none"
              style={{
                borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
                filter: "blur(48px)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f3ec] to-transparent pointer-events-none" />
    </section>
  );
}
