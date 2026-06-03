"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Share2,
  Users,
  AtSign,
} from "lucide-react";
import { NAV_LINKS, REASSURANCE_LINES, WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/constants";

const HASHTAGS = [
  "#EmotionalWellness",
  "#MindfulLiving",
  "#SelfCompassion",
  "#StressRelief",
  "#HopeAndHealing",
  "#EIATherapeuticHaven",
];

export function Footer() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setLineIndex((i) => (i + 1) % REASSURANCE_LINES.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-[#5a6b57] text-[#f6f3ec] relative overflow-hidden">
      {/* Reassurance strip */}
      <div className="bg-[#4a5e47] py-6 px-6 text-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={lineIndex}
            className="text-2xl md:text-3xl font-light text-[#d5e8cf]"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {REASSURANCE_LINES[lineIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/logos/logo.png"
                alt="EIA Therapeutic Haven"
                width={140}
                height={48}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p
              className="text-3xl text-[#aeb9a4] leading-tight mb-4"
              style={{ fontFamily: "var(--font-script)" }}
            >
              Nourishing you.<br />Naturally.
            </p>
            <p className="text-sm text-[#b9ccb4] leading-relaxed">
              A structured mental wellness and emotional clarity practice
              supporting individuals through stress, overwhelm, and life
              transitions.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: AtSign, label: "Instagram" },
                { icon: Users, label: "Facebook" },
                { icon: Share2, label: "Twitter/X" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#7c8b74] flex items-center justify-center hover:border-[#b9ccb4] hover:text-[#d5e8cf] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="text-label text-[#aeb9a4] mb-5">Navigate</h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b9ccb4] hover:text-[#d5e8cf] transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-label text-[#aeb9a4] mb-5">Contact</h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[#b9ccb4] hover:text-[#d5e8cf] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>WhatsApp (Primary)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-[#b9ccb4] hover:text-[#d5e8cf] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li className="text-sm text-[#b9ccb4]">
                <p className="text-[#aeb9a4] text-xs font-semibold uppercase tracking-wider mb-1">
                  Session Days
                </p>
                Monday · Wednesday · Friday
              </li>
              <li className="text-sm text-[#b9ccb4]">
                <p className="text-[#aeb9a4] text-xs font-semibold uppercase tracking-wider mb-1">
                  Delivery
                </p>
                Online · Global
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-label text-[#aeb9a4] mb-5">Legal</h3>
            <ul className="space-y-3" role="list">
              {[
                { label: "Privacy & Confidentiality", href: "/privacy" },
                { label: "Begin / Intake Form", href: "/begin" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#b9ccb4] hover:text-[#d5e8cf] transition-colors hover:underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-label text-[#aeb9a4] mb-3">Community</h3>
              <div className="flex flex-wrap gap-1.5">
                {HASHTAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#7c8b74] hover:text-[#aeb9a4] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#4a5e47] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#7c8b74]">
            &copy; {new Date().getFullYear()} EIA Therapeutic Haven. All rights reserved.
          </p>
          <p className="text-xs text-[#7c8b74]">
            Registered as EIA Therapeutic Haven Wellness and Natural Products Ltd
          </p>
        </div>
      </div>

      {/* Background blob */}
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#4a5e47] opacity-30 pointer-events-none"
        style={{
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
    </footer>
  );
}
