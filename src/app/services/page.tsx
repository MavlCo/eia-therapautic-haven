import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Globe, MessageCircle, Layers } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";

export const metadata: Metadata = {
  title: "Services — Tailored Support",
  description:
    "Structured emotional support, stress & anxiety management, and life clarity sessions. Confidential, online, globally available.",
};

const SERVICES = [
  {
    number: "01",
    title: "Emotional Support & Counselling",
    subtitle: "Process what you&apos;re experiencing in a safe, structured way.",
    body: "Life can leave us carrying more than we were meant to carry alone. Our emotional support sessions create a confidential, guided space where you can speak freely, be heard fully, and begin to process what you&apos;ve been holding.",
    outcomes: [
      "Feel genuinely heard and understood",
      "Identify patterns that keep you stuck",
      "Process past and present experiences safely",
      "Build emotional vocabulary and self-awareness",
      "Reduce the weight of unspoken burden",
    ],
    forWho: "Individuals, couples, and families experiencing sadness, confusion, emotional overwhelm, or relationship struggles.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=85",
    imageAlt: "A calm, thoughtful woman — representing the safety and compassion of emotional support sessions",
    accent: "#d5e8cf",
    imageLeft: false,
  },
  {
    number: "02",
    title: "Stress & Anxiety Management",
    subtitle: "Release pressure that&apos;s been building silently.",
    body: "Stress doesn&apos;t announce itself — it accumulates quietly until it affects everything. Our structured sessions help you identify your stressors, understand your responses, and develop sustainable strategies for lasting calm.",
    outcomes: [
      "Understand your stress triggers and responses",
      "Develop personalized coping strategies",
      "Restore sleep, focus, and daily function",
      "Learn to set healthy boundaries",
      "Build long-term emotional resilience",
    ],
    forWho: "Individuals, couples, and families experiencing chronic stress, anxiety, burnout, or persistent sleep difficulties.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Peaceful meditation scene representing calm and stress relief",
    accent: "#efe9dd",
    imageLeft: true,
  },
  {
    number: "03",
    title: "Life Clarity & Direction",
    subtitle: "Find your footing when the path feels unclear.",
    body: "Life transitions, difficult decisions, and the fog of uncertainty can leave you feeling lost. Our clarity sessions are structured to help you cut through the noise, reconnect with what matters, and take deliberate, confident steps forward.",
    outcomes: [
      "Gain clarity on your values and priorities",
      "Make better decisions with structured thinking",
      "Rebuild confidence in your direction",
      "Develop a clear personal roadmap",
      "Move forward with purpose and intention",
    ],
    forWho: "Individuals, couples, and families at life crossroads, feeling stuck, overwhelmed by decisions, or uncertain about next steps.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Light through trees symbolising direction and clarity emerging from uncertainty",
    accent: "#ffdbc8",
    imageLeft: false,
  },
];

const WHAT_YOU_RECEIVE = [
  { icon: Shield, title: "Confidential Support", body: "Everything shared stays strictly between you and your practitioner." },
  { icon: Layers, title: "Emotional Clarity Sessions", body: "Structured sessions designed to deliver real insight and lasting change." },
  { icon: MessageCircle, title: "Guided Process", body: "A clear, step-by-step structure that makes progress visible." },
  { icon: Globe, title: "Global Online Access", body: "Sessions delivered online — available wherever you are in the world." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <OrgBlob className="absolute top-0 right-0" color="sage" size="xl" speed="slow" />
        <div className="breath-line hidden xl:block h-full top-0" aria-hidden="true" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">Our Services</p>
            <h1 className="text-display text-[#33342e] mb-6 max-w-3xl">
              Structured support, tailored to where you are.
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-xl">
              Whether you need emotional support, relief from stress and anxiety,
              or clarity on your life&apos;s direction — we have a structured path for
              you.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* Service deep-dives */}
      <section className="bg-[#efe9dd] py-4">
        {SERVICES.map(({ number, title, subtitle, body, outcomes, forWho, image, imageAlt, accent, imageLeft }, idx) => (
          <div
            key={number}
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ backgroundColor: idx % 2 === 0 ? "#efe9dd" : "#f6f3ec" }}
          >
            {idx > 0 && <WaveDivider fill={idx % 2 === 0 ? "#efe9dd" : "#f6f3ec"} />}
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  imageLeft ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text */}
                <SectionReveal className={imageLeft ? "lg:col-start-2" : ""} direction={imageLeft ? "right" : "left"}>
                  <span className="text-[#aeb9a4] text-xs font-bold tracking-widest font-mono mb-4 block">
                    {number}
                  </span>
                  <h2 className="text-h2 text-[#33342e] mb-3">{title}</h2>
                  <p
                    className="text-lead text-[#5a6b57] italic mb-6"
                    style={{ fontFamily: "var(--font-serif)" }}
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  />
                  <p className="text-body text-[#5c5e54] mb-8" dangerouslySetInnerHTML={{ __html: body }} />

                  <div
                    className="p-6 rounded-2xl mb-6"
                    style={{ backgroundColor: accent + "50" }}
                  >
                    <p className="text-label text-[#5a6b57] mb-4">What you&apos;ll gain</p>
                    <ul className="space-y-2.5">
                      {outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#5a6b57] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                          <span className="text-sm text-[#5c5e54]">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-[#7c8b74] italic mb-8">
                    <strong className="font-semibold not-italic text-[#5c5e54]">For:</strong> {forWho}
                  </p>

                  <Link
                    href="/begin"
                    className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-7 py-3.5 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_8px_24px_rgba(90,107,87,0.25)] transition-all duration-300 group"
                  >
                    Begin this journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </SectionReveal>

                {/* Image */}
                <SectionReveal className={imageLeft ? "lg:col-start-1 lg:row-start-1" : ""} direction={imageLeft ? "left" : "right"} delay={0.15}>
                  <div
                    className="relative w-full aspect-[4/3] overflow-hidden"
                    style={{ borderRadius: imageLeft ? "24px 80px 24px 80px" : "80px 24px 80px 24px" }}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[#5a6b57]/5 mix-blend-multiply" />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      <WaveDivider fill="#5a6b57" />

      {/* What every client receives */}
      <section className="bg-[#5a6b57] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-16">
            <p className="text-label text-[#aeb9a4] mb-3">Included in every session</p>
            <h2 className="text-h2 text-[#d5e8cf]">What every client receives</h2>
          </SectionReveal>

          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_YOU_RECEIVE.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="bg-[#4a5e47] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 h-full">
                  <Icon className="w-6 h-6 text-[#b9ccb4] mb-4" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-base font-semibold text-[#d5e8cf] mb-2">{title}</h3>
                  <p className="text-sm text-[#aeb9a4] leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Scope honesty */}
      <section className="bg-[#f6f3ec] py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <div className="bg-[#d5e8cf]/40 rounded-3xl p-8 md:p-12 border border-[#aeb9a4]/30">
              <Shield className="w-8 h-8 text-[#5a6b57] mx-auto mb-5" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-h3 text-[#33342e] mb-4">A note on our scope</h3>
              <p className="text-body text-[#5c5e54]">
                EIA Therapeutic Haven offers structured emotional wellness support,
                clarity sessions, and wellness guidance. This is not emergency
                psychiatric care. If you or someone you know is in urgent need of
                psychiatric intervention, we will always guide you to appropriate,
                professional help immediately.
              </p>
            </div>
          </SectionReveal>

          {/* Future products teaser */}
          <SectionReveal className="mt-12 max-w-3xl mx-auto" delay={0.2}>
            <div className="bg-[#efe9dd] rounded-3xl p-6 md:p-8 border border-[#c8b6a0]/30 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="text-label text-[#c8b6a0] mb-1.5">Coming soon</p>
                <h4 className="text-base font-semibold text-[#5c5e54] mb-1">
                  Natural Wellness Products
                </h4>
                <p className="text-sm text-[#7c8b74]">
                  Skincare · Herbal wellness · Supplements — a future holistic line to complement your inner work.
                </p>
              </div>
              <span className="text-xs text-[#aeb9a4] bg-[#f6f3ec] px-3 py-1.5 rounded-full whitespace-nowrap">
                Launching soon
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
