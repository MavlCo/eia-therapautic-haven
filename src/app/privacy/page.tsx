import type { Metadata } from "next";
import { Shield } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Privacy & Confidentiality",
  description: "EIA Therapeutic Haven's commitment to client confidentiality, session scope, and referral policy.",
};

const SECTIONS = [
  {
    title: "Our commitment to confidentiality",
    body: `All information shared with EIA Therapeutic Haven — including personal details, session content, intake form responses, and any communication — is treated with strict confidentiality.

Your information is seen only by your assigned practitioner and is never shared, sold, or disclosed to any third party without your explicit consent, except as required by law.`,
  },
  {
    title: "What our sessions are for",
    body: `EIA Therapeutic Haven provides structured emotional wellness support, emotional clarity sessions, and wellness guidance. Our sessions are designed to help individuals, couples, and families navigate stress, emotional overwhelm, life transitions, and related challenges.

This is not emergency psychiatric care, clinical psychotherapy, or crisis intervention. We are a structured emotional wellness and clarity practice.`,
  },
  {
    title: "What happens in urgent situations",
    body: `If you present with indicators of psychiatric emergency, immediate risk of harm to yourself or others, or needs that require urgent medical or psychiatric intervention, we will:

— Acknowledge your situation with care
— Pause our standard session process
— Guide you to appropriate emergency services, crisis lines, or psychiatric care

We will never leave you unsupported in an urgent situation — we will always point you toward the right help.`,
  },
  {
    title: "Online sessions & data",
    body: `Sessions are conducted online via secure video or voice calls. We do not record sessions without your explicit prior consent.

Intake form data is stored securely and used solely for session preparation purposes. We do not retain data indefinitely — it is held only as long as necessary for your ongoing support.`,
  },
  {
    title: "Your rights",
    body: `You may request to update, correct, or have your personal information removed from our records at any time by contacting us directly via WhatsApp or email.

You may also withdraw your consent to participate at any time, with no obligation to provide a reason.`,
  },
  {
    title: "Contact & questions",
    body: `If you have questions about how your information is handled, or would like to exercise your rights, please contact us:

WhatsApp: Our primary channel — message us directly
Email: hello@eiatherapeutichaven.com

We will respond to all data and privacy enquiries within 5 working days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 max-w-3xl">
          <SectionReveal>
            <Shield className="w-8 h-8 text-[#5a6b57] mb-6" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-label text-[#7c8b74] mb-4">Legal</p>
            <h1 className="text-display text-[#33342e] mb-5">
              Privacy & Confidentiality
            </h1>
            <p className="text-lead text-[#5c5e54]">
              Your trust is the foundation of everything we do. Here is how we
              protect it.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f6f3ec] py-12 pb-24 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {SECTIONS.map(({ title, body }, idx) => (
              <SectionReveal key={title} delay={idx * 0.06}>
                <div className="bg-[#fcfaf5] rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(90,107,87,0.06)]">
                  <h2 className="text-h3 text-[#33342e] mb-5">{title}</h2>
                  <div className="space-y-3">
                    {body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-body text-[#5c5e54] whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.3}>
              <div className="bg-[#d5e8cf]/40 rounded-3xl p-6 border border-[#aeb9a4]/30 text-center">
                <p className="text-sm text-[#5c5e54]">
                  <strong className="text-[#5a6b57]">EIA Therapeutic Haven</strong> is registered as EIA Therapeutic Haven Wellness and Natural Products Ltd.
                  CAC-registered limited company, Nigeria.
                </p>
                <p className="text-xs text-[#7c8b74] mt-2">
                  Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
