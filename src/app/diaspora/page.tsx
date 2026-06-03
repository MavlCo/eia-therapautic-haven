import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Globe, Users, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";
import { WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "For the Diaspora — Home-Grown Wellness",
  description:
    "Support for Nigerians in the UK, USA, and Canada. Confidential, culturally attuned, online emotional wellness support — wherever you are.",
};

const WHY_EIA = [
  { icon: Shield, title: "Confidential", body: "Everything you share stays between you and your practitioner — always." },
  { icon: Globe, title: "Online & Global", body: "Sessions delivered online. Access support from the UK, USA, Canada, or anywhere in the world." },
  { icon: Users, title: "Culturally Attuned", body: "We understand the Nigerian context — the expectations, the pressures, the unspoken struggles of life abroad." },
  { icon: Heart, title: "Compassionate", body: "You are not a case file. You are a person. Our approach begins and ends with genuine care." },
];

const WHAT_YOU_GET = [
  { label: "Confidential Support", desc: "A safe, private space to speak freely." },
  { label: "Emotional Clarity Sessions", desc: "Structured sessions that create real insight." },
  { label: "Guided Process", desc: "A clear path — not just listening, but direction." },
  { label: "Global Online Access", desc: "Available wherever you are in the world." },
];

const TESTIMONIALS = [
  {
    quote: "For the first time I felt genuinely understood — not just heard, but understood in a way that acknowledged everything I carry as a Nigerian abroad.",
    location: "A client in London",
  },
  {
    quote: "The structure was exactly what I needed. My mind was chaos, and these sessions gave me back a sense of direction.",
    location: "A client in Toronto",
  },
  {
    quote: "I was skeptical about online sessions, but the warmth and professionalism made it feel completely safe.",
    location: "A client in Houston",
  },
];

export default function DiasporaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end pb-20 pt-40 overflow-hidden">
        <OrgBlob className="absolute top-0 right-0" color="clay" size="xl" speed="slow" />
        <OrgBlob className="absolute bottom-0 left-0" color="sage" size="md" delay={3} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">For the Diaspora</p>
            <h1 className="text-display text-[#33342e] mb-6 max-w-3xl">
              Carrying home with you,{" "}
              <span
                className="text-[#5a6b57] italic"
                style={{ fontFamily: "var(--font-script)" }}
              >
                wherever you are.
              </span>
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-xl mb-8">
              You&apos;re building a life abroad while carrying the weight of family,
              culture, and expectation. You deserve structured support that truly
              understands your context.
            </p>
            <div className="flex flex-wrap gap-3">
              {["🇬🇧 United Kingdom", "🇺🇸 United States", "🇨🇦 Canada", "🌍 & beyond"].map((f) => (
                <span
                  key={f}
                  className="text-sm text-[#5c5e54] bg-[#fcfaf5] px-4 py-2 rounded-full border border-[#c8b6a0]/40"
                >
                  {f}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* Empathy copy */}
      <section className="bg-[#efe9dd] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal direction="left">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85"
                alt="A serene woman of African descent — representing the quiet strength of the diaspora community"
                width={600}
                height={500}
                className="w-full object-cover"
                style={{ borderRadius: "80px 24px 80px 24px" }}
              />
            </SectionReveal>

            <SectionReveal direction="right">
              <h2 className="text-h2 text-[#33342e] mb-6">
                Silent struggles deserve visible support.
              </h2>
              <div className="space-y-4 text-body text-[#5c5e54]">
                <p>
                  Many Nigerians living abroad are silently carrying stress,
                  emotional pressure, and the weight of life transitions — while
                  appearing fine to the outside world.
                </p>
                <p>
                  There&apos;s the pressure to succeed. The loneliness of adapting to a
                  new culture. The guilt of being far from family. The exhaustion of
                  doing it all, always. And often, no one to tell.
                </p>
                <p>
                  EIA Therapeutic Haven was built with your context in mind. We
                  understand the nuances, the cultural expectations, and the silent
                  battles. You don&apos;t have to explain everything from scratch.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Why EIA */}
      <section className="bg-[#f6f3ec] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-16">
            <p className="text-label text-[#7c8b74] mb-3">Why EIA</p>
            <h2 className="text-h2 text-[#33342e]">Why choose EIA Therapeutic Haven?</h2>
          </SectionReveal>

          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_EIA.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="bg-[#fcfaf5] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500 h-full shadow-[0_8px_32px_rgba(90,107,87,0.06)]">
                  <div className="w-10 h-10 rounded-xl bg-[#d5e8cf] flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-[#5a6b57]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-[#33342e] text-base mb-2">{title}</h3>
                  <p className="text-sm text-[#5c5e54] leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#5a6b57] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-12">
            <p className="text-label text-[#aeb9a4] mb-3">What you receive</p>
            <h2 className="text-h2 text-[#d5e8cf]">Everything you need to begin</h2>
          </SectionReveal>

          <StaggerReveal className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto items-stretch">
            {WHAT_YOU_GET.map(({ label, desc }) => (
              <StaggerItem key={label} className="h-full">
                <div className="h-full bg-[#4a5e47] rounded-2xl p-5 flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-[#b9ccb4] mt-1.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-[#d5e8cf] font-semibold text-sm mb-0.5">{label}</p>
                    <p className="text-[#aeb9a4] text-sm">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Testimonials */}
      <section className="bg-[#f6f3ec] py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="text-center max-w-xl mx-auto mb-14">
            <p className="text-label text-[#7c8b74] mb-3">Voices</p>
            <h2 className="text-h2 text-[#33342e]">What clients say</h2>
          </SectionReveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, location }, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#fcfaf5] rounded-3xl p-8 shadow-[0_16px_48px_rgba(90,107,87,0.07)] h-full flex flex-col gap-4 border border-[#e9e8df]">
                  <blockquote
                    className="text-[#33342e] italic font-light leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}
                  >
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <p className="text-label text-[#aeb9a4]">{location}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efe9dd] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 text-center">
          <SectionReveal>
            <h2 className="text-h2 text-[#33342e] mb-6 max-w-lg mx-auto">
              Ready to feel understood?
            </h2>
            <p className="text-lead text-[#5c5e54] mb-10 max-w-md mx-auto">
              One message is all it takes. We&apos;ll guide you through the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#5a6b57] text-[#fcfaf5] font-semibold px-9 py-4 rounded-full hover:bg-[#4a5e47] hover:shadow-[0_12px_40px_rgba(90,107,87,0.3)] transition-all duration-300 text-base"
              >
                <MessageCircle className="w-4.5 h-4.5" strokeWidth={1.75} />
                Send HELP on WhatsApp
              </a>
              <Link
                href="/begin"
                className="inline-flex items-center gap-2.5 text-[#5a6b57] font-semibold border-[1.5px] border-[#aeb9a4] px-9 py-4 rounded-full hover:border-[#7c8b74] hover:bg-[#aeb9a4]/10 transition-all duration-300 text-base"
              >
                Complete intake form
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
