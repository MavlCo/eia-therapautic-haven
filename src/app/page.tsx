import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { EmpathyBand } from "@/components/home/EmpathyBand";
import { ApproachSection } from "@/components/home/ApproachSection";
import { PositioningQuote } from "@/components/home/PositioningQuote";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { DiasporaTeaser } from "@/components/home/DiasporaTeaser";
import { CareStrip } from "@/components/home/CareStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { VerseBlock } from "@/components/ui/VerseBlock";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "EIA Therapeutic Haven — Nourishing you. Naturally.",
  description:
    "Structured emotional wellness and clarity support. Navigate stress, overwhelm, and life transitions with guided therapeutic care. Confidential · Online · Global.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmpathyBand />
      <WaveDivider fill="#f6f3ec" />
      <ApproachSection />
      <PositioningQuote />
      <HowItWorksPreview />
      <WaveDivider fill="#f6f3ec" />

      {/* Faith block */}
      <section className="bg-[#f6f3ec] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="max-w-2xl">
            <VerseBlock
              verse="Looking unto Jesus, the author and finisher of our faith."
              reference="Hebrews 12:2"
              note="Faith-based guidance is available — only if you want it."
            />
          </SectionReveal>
        </div>
      </section>

      <DiasporaTeaser />
      <CareStrip />
      <FinalCTA />
    </>
  );
}
