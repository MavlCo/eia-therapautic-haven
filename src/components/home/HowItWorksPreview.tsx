import Link from "next/link";
import { MessageCircle, MessageSquare, CalendarCheck, Sparkles } from "lucide-react";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";

const STEPS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Reach out",
    body: 'Message "HELP" on WhatsApp to begin your journey.',
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Talk it through",
    body: "Share what you need — emotional support, stress relief, or clarity.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book your session",
    body: "Choose a convenient slot — Monday, Wednesday, or Friday.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Begin your clarity journey",
    body: "Your practitioner prepares for you. Your session is structured, safe, and transformative.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="bg-[#efe9dd] py-24 md:py-32 relative overflow-hidden">
      {/* Blob */}
      <div
        className="absolute left-0 bottom-0 w-72 h-72 bg-[#aeb9a4] opacity-[0.08] pointer-events-none"
        style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%", filter: "blur(72px)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-3">The Process</p>
            <h2 className="text-h2 text-[#33342e] max-w-sm">
              A clear path to clarity
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[#5a6b57] font-semibold text-sm hover:gap-4 transition-all duration-300 group"
            >
              See the full journey
              <span className="w-6 h-px bg-[#5a6b57] inline-block group-hover:w-10 transition-all duration-300" />
            </Link>
          </SectionReveal>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {STEPS.map(({ icon: Icon, step, title, body }, i) => (
            <StaggerItem key={step}>
              <div className="relative flex flex-col gap-4 p-6 rounded-2xl bg-[#fcfaf5]/60 hover:bg-[#fcfaf5] transition-colors duration-300 border border-[#c8b6a0]/20 h-full">
                {/* Connector line — desktop only */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute right-0 top-10 w-px h-full bg-[#c8b6a0]/30 hidden lg:block translate-x-[calc(50%+0.5rem)]"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#d5e8cf] flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-[#5a6b57]" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className="text-[#c8b6a0] text-xs font-bold tracking-widest font-mono">
                    {step}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-[#33342e] mb-1.5 text-base">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5c5e54] leading-relaxed">{body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
