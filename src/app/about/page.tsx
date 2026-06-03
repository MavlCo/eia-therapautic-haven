import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Leaf, Compass, Wind, PenLine, Heart, Moon, Sprout, ArrowRight } from "lucide-react";
import { VerseBlock } from "@/components/ui/VerseBlock";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";

export const metadata: Metadata = {
  title: "About — Our Approach",
  description:
    "A haven, by design. Learn about EIA Therapeutic Haven's structured-yet-compassionate philosophy and how we support individuals through mental health, wellness, and emotional clarity.",
};

const PILLARS = [
  {
    icon: Brain,
    title: "Mental Health Support",
    body: "Process what you&apos;re experiencing in a safe, structured space. We help you make sense of your thoughts, emotions, and patterns — so understanding becomes the foundation for lasting change.",
    accent: "#d5e8cf",
  },
  {
    icon: Leaf,
    title: "Wellness Guidance",
    body: "Balance is not a destination — it&apos;s a daily practice. We guide you toward intentional habits, restored focus, and calm that comes from within, not from avoiding difficulty.",
    accent: "#efe9dd",
  },
  {
    icon: Compass,
    title: "Emotional Clarity & Life Structure",
    body: "When the path feels unclear, structure brings light. We help you identify what you want, remove the noise, and take purposeful steps — one session at a time.",
    accent: "#ffdbc8",
  },
];

const CARE_PILLARS = [
  { icon: Wind, label: "Breathe deeply", body: "Intentional breathing anchors the nervous system and opens space for clarity." },
  { icon: PenLine, label: "Write it out", body: "Journaling externalizes what&apos;s internal, helping you see patterns and release weight." },
  { icon: Heart, label: "Pray", body: "For those who choose it, faith is a source of groundedness and strength." },
  { icon: Moon, label: "Rest well", body: "Sleep is not a luxury — it&apos;s when your mind consolidates, repairs, and prepares." },
  { icon: Sprout, label: "Grow daily", body: "Small consistent growth compounds into transformation over time." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">
        <OrgBlob className="absolute -top-20 right-0" color="sage" size="xl" speed="slow" />
        <div className="breath-line hidden xl:block h-full top-0" aria-hidden="true" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">Our Philosophy</p>
            <h1
              className="text-display text-[#33342e] mb-6"
              style={{ maxWidth: "700px" }}
            >
              A haven,{" "}
              <span
                className="text-[#5a6b57] italic"
                style={{ fontFamily: "var(--font-script)" }}
              >
                by design.
              </span>
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-xl">
              Everything here is intentional — the structure, the warmth, the
              compassion. EIA Therapeutic Haven was built to give overwhelmed
              minds a place to land safely.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* Story block */}
      <section className="bg-[#efe9dd] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-start">
            <SectionReveal direction="left">
              <p className="text-label text-[#7c8b74] mb-5">Our Story</p>
              <h2 className="text-h2 text-[#33342e] mb-8">
                No one should navigate emotional difficulty alone.
              </h2>
              <div className="space-y-5 text-body text-[#5c5e54]">
                <p>
                  EIA Therapeutic Haven was founded on a simple but profound
                  belief: that emotional clarity is not a luxury — it&apos;s a
                  necessity. And yet, millions of people move through life
                  carrying invisible weight, unsure of where to turn.
                </p>
                <p>
                  We exist to change that. Not with clinical coldness or
                  overwhelming processes, but with structured warmth — a
                  combination of professional guidance and genuine compassion that
                  meets you exactly where you are.
                </p>
                <p>
                  Structure brings calm to chaos. Our approach demonstrates this
                  at every touchpoint — from your first message to your ongoing
                  sessions. When your mind is overwhelmed, a clear path forward is
                  the most powerful gift we can offer.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right" delay={0.15}>
              {/* Pull-quote */}
              <blockquote
                className="text-2xl md:text-3xl italic font-light text-[#33342e] leading-relaxed pl-6 border-l-2 border-[#7c8b74]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                &ldquo;Structure is the kindest gift you can offer a chaotic
                mind.&rdquo;
              </blockquote>

              <div className="mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1517971071642-34a2d3ebc9be?auto=format&fit=crop&w=700&q=85"
                  alt="Person writing in a journal — symbolizing the reflective, structured nature of EIA's approach"
                  width={600}
                  height={400}
                  className="w-full object-cover rounded-3xl"
                  style={{ borderRadius: "24px 80px 24px 80px" }}
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Three pillars */}
      <section className="bg-[#f6f3ec] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-label text-[#7c8b74] mb-3">What We Do</p>
            <h2 className="text-h2 text-[#33342e]">
              Three pillars. One purpose.
            </h2>
            <p className="text-lead text-[#5c5e54] mt-4">
              We work across three interconnected domains because wellbeing
              rarely exists in isolation.
            </p>
          </SectionReveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-8">
            {PILLARS.map(({ icon: Icon, title, body, accent }) => (
              <StaggerItem key={title}>
                <div
                  className="h-full rounded-3xl p-8 md:p-10 flex flex-col gap-5"
                  style={{ backgroundColor: accent + "40" }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#fcfaf5] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-[#33342e]">{title}</h3>
                  <p className="text-body text-[#5c5e54] flex-1" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Care philosophy */}
      <section className="bg-[#efe9dd] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-16">
            <p className="text-label text-[#7c8b74] mb-3">Daily Practice</p>
            <h2 className="text-h2 text-[#33342e]">Care for your mind</h2>
            <p className="text-lead text-[#5c5e54] mt-4">
              Beyond sessions, we encourage simple daily practices that
              accumulate into meaningful change.
            </p>
          </SectionReveal>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {CARE_PILLARS.map(({ icon: Icon, label, body }) => (
              <StaggerItem key={label} className="h-full">
                <div className="h-full bg-[#fcfaf5]/70 rounded-2xl p-6 flex gap-4 hover:-translate-y-1 transition-transform duration-500">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-[#d5e8cf] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#33342e] text-base mb-1">{label}</h3>
                    <p className="text-sm text-[#5c5e54] leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Faith dimension */}
      <section className="bg-[#f6f3ec] py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <SectionReveal>
              <p className="text-label text-[#7c8b74] mb-3">Faith Dimension</p>
              <h2 className="text-h2 text-[#33342e] mb-5">
                Always your choice
              </h2>
              <p className="text-body text-[#5c5e54] mb-4">
                For those who choose it, faith can be a profound source of
                grounding, strength, and hope. EIA Therapeutic Haven honours
                this by offering optional, gentle faith integration — available
                only when you want it.
              </p>
              <p className="text-body text-[#5c5e54] mb-8">
                Faith references are never the first thing you see. They are
                offered quietly, as warmth — never as pressure.
              </p>
              <Link
                href="/begin"
                className="inline-flex items-center gap-2.5 text-[#5a6b57] font-semibold hover:gap-5 transition-all duration-300 group"
              >
                Begin Your Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <VerseBlock
                verse="Looking unto Jesus, the author and finisher of our faith."
                reference="Hebrews 12:2"
                note="Faith-based guidance is available — only if you want it."
              />
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
