"use client";

import { useState } from "react";
import { MessageCircle, Mail, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/lib/constants";
import Link from "next/link";

const FAQS = [
  {
    q: "Is everything I share confidential?",
    a: "Absolutely. All information shared with EIA Therapeutic Haven is treated with strict confidentiality. Your sessions, intake information, and conversations are seen only by your practitioner.",
  },
  {
    q: "Is this therapy or coaching?",
    a: "EIA Therapeutic Haven offers structured emotional wellness support, clarity sessions, and wellness guidance. We position this as a wellness and emotional clarity practice — not clinical psychotherapy, but professional, structured, and deeply caring support.",
  },
  {
    q: "Do you offer faith-based sessions?",
    a: "Yes — but only if you choose it. Faith-based guidance is entirely optional and available when you&apos;d like it. It is never assumed or imposed.",
  },
  {
    q: "How are sessions delivered?",
    a: "All sessions are delivered online via video or voice call — making them fully accessible wherever you are in the world.",
  },
  {
    q: "What days are sessions available?",
    a: "Sessions are currently available on Monday, Wednesday, and Friday. Specific time slots are arranged after your booking.",
  },
  {
    q: "Is this for emergencies or psychiatric crises?",
    a: "No. EIA Therapeutic Haven is structured for emotional support, clarity, and wellness guidance. If you or someone you know is in urgent psychiatric need, please contact emergency services or a local crisis line immediately. We will always guide you to appropriate help.",
  },
  {
    q: "How do I pay for sessions?",
    a: "Payment is made at the time of booking to confirm your session. Instructions are provided during the booking process via WhatsApp or after submitting your intake form.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e9e8df] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left hover:text-[#5a6b57] transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-[#33342e] group-hover:text-[#5a6b57] transition-colors duration-200 leading-relaxed">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown className="w-4 h-4 text-[#7c8b74]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-body text-[#5c5e54] pb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <OrgBlob className="absolute top-0 right-0" color="sage" size="xl" speed="slow" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">Contact</p>
            <h1 className="text-display text-[#33342e] mb-6 max-w-2xl">
              We&apos;re here when{" "}
              <span className="text-[#5a6b57] italic" style={{ fontFamily: "var(--font-script)" }}>
                you&apos;re ready.
              </span>
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-xl">
              No scripts. No wait lists. Just a genuine, structured conversation —
              whenever you&apos;re ready to reach out.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* Contact methods */}
      <section className="bg-[#efe9dd] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp */}
            <StaggerItem>
              <div className="bg-[#5a6b57] rounded-3xl p-8 text-[#fcfaf5] hover:-translate-y-1 transition-transform duration-500">
                <div className="w-12 h-12 bg-[#4a5e47] rounded-2xl flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5 text-[#b9ccb4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  WhatsApp (Primary)
                </h3>
                <p className="text-[#b9ccb4] text-sm mb-5">
                  The fastest way to begin. Message &ldquo;HELP&rdquo; to start.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#fcfaf5] text-[#5a6b57] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white transition-colors"
                >
                  Message us
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <div className="bg-[#fcfaf5] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-500 shadow-[0_16px_48px_rgba(90,107,87,0.08)]">
                <div className="w-12 h-12 bg-[#d5e8cf] rounded-2xl flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[#33342e] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  Email
                </h3>
                <p className="text-[#5c5e54] text-sm mb-5">
                  For longer enquiries or formal communication.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#5a6b57] font-semibold text-sm hover:underline underline-offset-4"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </StaggerItem>

            {/* Hours */}
            <StaggerItem>
              <div className="bg-[#d5e8cf]/50 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-500">
                <div className="w-12 h-12 bg-[#fcfaf5] rounded-2xl flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-[#33342e] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  Session Availability
                </h3>
                <p className="text-[#5c5e54] text-sm mb-5">
                  Sessions run on three days per week.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Monday", "Wednesday", "Friday"].map((d) => (
                    <span key={d} className="text-xs font-semibold text-[#5a6b57] bg-[#fcfaf5] px-3 py-1.5 rounded-full">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* FAQ */}
      <section className="bg-[#f6f3ec] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <SectionReveal>
              <p className="text-label text-[#7c8b74] mb-3">FAQ</p>
              <h2 className="text-h2 text-[#33342e] mb-5">Frequently asked questions</h2>
              <p className="text-body text-[#5c5e54] mb-8">
                Common questions answered openly and honestly. If yours isn&apos;t here,
                just message us.
              </p>
              <Link
                href="/begin"
                className="inline-flex items-center gap-2 text-[#5a6b57] font-semibold hover:gap-4 transition-all duration-300"
              >
                Ready to begin?
                <span className="w-6 h-px bg-[#5a6b57] inline-block" />
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.15} direction="right">
              <div className="bg-[#fcfaf5] rounded-3xl px-7 py-2 shadow-[0_16px_48px_rgba(90,107,87,0.07)]">
                {FAQS.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efe9dd] py-20 md:py-24 text-center">
        <SectionReveal>
          <p className="text-script text-[#5a6b57] mb-4">Still have questions?</p>
          <h2 className="text-h2 text-[#33342e] mb-8 max-w-sm mx-auto">
            We&apos;re always happy to talk.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-9 py-4 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_12px_40px_rgba(90,107,87,0.3)] transition-all duration-300 text-base"
          >
            <MessageCircle className="w-4.5 h-4.5" strokeWidth={1.75} />
            Message us on WhatsApp
          </a>
        </SectionReveal>
      </section>
    </>
  );
}
