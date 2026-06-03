import type { Metadata } from "next";
import { MessageCircle, FileText, Shield } from "lucide-react";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Begin — Booking & Intake",
  description:
    "Take your first step. Message us on WhatsApp or complete our confidential intake form to begin your session with EIA Therapeutic Haven.",
};

export default function BeginPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <OrgBlob className="absolute top-0 right-0" color="sage" size="xl" speed="slow" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">Take the first step</p>
            <h1 className="text-display text-[#33342e] mb-5">
              Let&apos;s begin,{" "}
              <span
                className="text-[#5a6b57] italic"
                style={{ fontFamily: "var(--font-script)" }}
              >
                gently.
              </span>
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-lg mx-auto">
              There&apos;s no pressure here. Choose the path that feels right for you —
              we&apos;ll meet you where you are.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-[#f6f3ec] py-8 md:py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto items-stretch">
            {/* Path A — WhatsApp */}
            <SectionReveal direction="left" className="h-full">
              <div className="h-full bg-[#5a6b57] rounded-3xl p-8 text-[#fcfaf5] hover:-translate-y-1 transition-transform duration-500 flex flex-col">
                <div className="w-12 h-12 bg-[#4a5e47] rounded-2xl flex items-center justify-center mb-5">
                  <MessageCircle className="w-5 h-5 text-[#b9ccb4]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  Start a conversation
                </h2>
                <p className="text-[#b9ccb4] text-sm leading-relaxed mb-6 flex-1">
                  Message us &ldquo;HELP&rdquo; on WhatsApp to begin. We&apos;ll respond
                  personally and guide you through the next step.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 bg-[#fcfaf5] text-[#5a6b57] font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 text-sm self-start"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={2} />
                  Message HELP on WhatsApp
                </a>
              </div>
            </SectionReveal>

            {/* Path B — Form */}
            <SectionReveal direction="right" className="h-full">
              <div className="h-full bg-[#efe9dd] rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-500 flex flex-col">
                <div className="w-12 h-12 bg-[#d5e8cf] rounded-2xl flex items-center justify-center mb-5">
                  <FileText className="w-5 h-5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-[#33342e] mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  Share first, talk later
                </h2>
                <p className="text-[#5c5e54] text-sm leading-relaxed mb-6 flex-1">
                  Prefer to share your situation privately before speaking? Complete
                  our confidential intake form below and we&apos;ll follow up to schedule
                  your session.
                </p>
                <a
                  href="#intake-form"
                  className="mt-auto inline-flex items-center gap-2 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-6 py-3 rounded-full hover:bg-[#4a5e47] transition-colors duration-300 text-sm self-start"
                >
                  Complete intake form
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Confidentiality note */}
          <SectionReveal delay={0.2} className="max-w-xl mx-auto text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-[#7c8b74] text-sm">
              <Shield className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Everything you share is strictly confidential</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Intake form */}
      <section id="intake-form" className="bg-[#f6f3ec] py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-12">
            <p className="text-label text-[#7c8b74] mb-3">Confidential Intake Form</p>
            <h2 className="text-h2 text-[#33342e] mb-4">Tell us about you</h2>
            <p className="text-body text-[#5c5e54]">
              Take your time. Every answer helps your practitioner prepare for you.
              This form is private, guided, and saves as you go.
            </p>
          </SectionReveal>

          <div className="max-w-2xl mx-auto">
            <IntakeForm />
          </div>
        </div>
      </section>
    </>
  );
}
