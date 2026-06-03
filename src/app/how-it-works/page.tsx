"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ListChecks,
  Ear,
  Star,
  Calendar,
  CreditCard,
  FileText,
  Sparkles,
} from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";

const STEPS = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Reach out",
    body: 'Message "HELP" on WhatsApp. That single word opens the door — nothing more is required to begin.',
    color: "#d5e8cf",
  },
  {
    icon: ListChecks,
    number: "02",
    title: "Tell us what you need",
    body: "Share whether you need emotional support, stress or anxiety management, or life clarity. We listen without judgement.",
    color: "#efe9dd",
  },
  {
    icon: Ear,
    number: "03",
    title: "A tailored response",
    body: "We respond specifically to what you've shared. This isn't a template — it&apos;s a genuine, personalised follow-up.",
    color: "#ffdbc8",
  },
  {
    icon: Star,
    number: "04",
    title: "Qualification",
    body: "After your response, we recommend the best structured starting point — so your session is prepared before you arrive.",
    color: "#d5e8cf",
  },
  {
    icon: Calendar,
    number: "05",
    title: "Book your slot",
    body: "Choose from our available session days: Monday, Wednesday, or Friday. We offer flexibility to fit your life.",
    color: "#efe9dd",
  },
  {
    icon: CreditCard,
    number: "06",
    title: "Secure your session",
    body: "Payment confirms your booking. This ensures your practitioner has time to prepare specifically for you.",
    color: "#ffdbc8",
  },
  {
    icon: FileText,
    number: "07",
    title: "Complete your intake form",
    body: "A confidential, structured form helps your practitioner understand your needs before you meet. Everything shared is strictly private.",
    color: "#d5e8cf",
  },
  {
    icon: Sparkles,
    number: "08",
    title: "Begin",
    body: "Your structured session, fully prepared. This is where clarity starts — and where your journey forward begins.",
    color: "#efe9dd",
  },
];

const BOOKING_DAYS = ["Monday", "Wednesday", "Friday"];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <OrgBlob className="absolute -top-16 right-0" color="sage" size="xl" speed="slow" />
        <div className="breath-line hidden xl:block h-full top-0" aria-hidden="true" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">The Journey</p>
            <h1 className="text-display text-[#33342e] mb-6 max-w-3xl">
              A clear path, from first message to lasting clarity.
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-xl">
              Every step is intentional. Every interaction is designed to make
              you feel safe, prepared, and supported — before your first session
              even begins.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* 8-step journey */}
      <section className="bg-[#efe9dd] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#aeb9a4]/30 hidden lg:block -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-1 lg:max-w-4xl lg:mx-auto">
            {STEPS.map(({ icon: Icon, number, title, body, color }, idx) => (
              <SectionReveal
                key={number}
                delay={0.05 * idx}
                direction={idx % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className="flex gap-6 bg-[#fcfaf5]/80 rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-500 items-start"
                  style={{
                    borderLeft: `4px solid ${color === "#d5e8cf" ? "#5a6b57" : color === "#efe9dd" ? "#c8b6a0" : "#d8a98e"}`,
                  }}
                >
                  {/* Step indicator */}
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="w-5 h-5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="text-xs text-[#aeb9a4] font-bold tracking-widest font-mono">{number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h3 text-[#33342e] mb-2">{title}</h3>
                    <p className="text-body text-[#5c5e54]" dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Booking slots */}
      <section className="bg-[#f6f3ec] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <SectionReveal className="max-w-xl mx-auto mb-10">
            <p className="text-label text-[#7c8b74] mb-3">Availability</p>
            <h2 className="text-h2 text-[#33342e]">Session days</h2>
            <p className="text-lead text-[#5c5e54] mt-4">
              We offer sessions on three consistent days each week.
            </p>
          </SectionReveal>

          <StaggerReveal className="flex flex-wrap justify-center gap-4 mb-12">
            {BOOKING_DAYS.map((day) => (
              <StaggerItem key={day}>
                <span className="inline-block bg-[#d5e8cf] text-[#5a6b57] font-semibold px-8 py-4 rounded-full text-base">
                  {day}
                </span>
              </StaggerItem>
            ))}
          </StaggerReveal>

          {/* Chat bubble preview */}
          <SectionReveal delay={0.3} className="max-w-md mx-auto">
            <div className="bg-[#5a6b57] text-[#fcfaf5] rounded-2xl rounded-bl-sm px-6 py-5 text-left shadow-[0_16px_48px_rgba(90,107,87,0.2)] mb-3">
              <p className="text-sm leading-relaxed">
                Thank you for completing your intake form. Your information has
                been received and will be reviewed before your session. We will
                proceed with scheduling shortly.
              </p>
            </div>
            <p className="text-xs text-[#aeb9a4] ml-3">EIA Therapeutic Haven · Post-booking message</p>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal delay={0.4} className="mt-14">
            <Link
              href="/begin"
              className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-9 py-4 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_12px_40px_rgba(90,107,87,0.3)] transition-all duration-300 text-base"
            >
              Begin Your Journey
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
