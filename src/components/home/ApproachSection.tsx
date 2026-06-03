import Link from "next/link";
import { Brain, Leaf, Compass } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { WaveDivider } from "@/components/ui/WaveDivider";

const DOMAINS = [
  {
    icon: Brain,
    title: "Mental Health Support",
    body: "Process what you&apos;re experiencing in a safe, structured space. Understanding your mind is the first step toward lasting change.",
    linkLabel: "Explore support",
    href: "/services",
    accent: "bg-[#d5e8cf]/60",
    delay: 0,
    offset: "lg:mt-0",
  },
  {
    icon: Leaf,
    title: "Wellness Guidance",
    body: "Restore balance, focus, and calm through intentional wellness practices tailored to your unique needs and life context.",
    linkLabel: "Explore wellness",
    href: "/services",
    accent: "bg-[#efe9dd]",
    delay: 0.12,
    offset: "lg:mt-16",
  },
  {
    icon: Compass,
    title: "Emotional Clarity & Life Structure",
    body: "Find direction when you feel stuck. Gain clarity, rebuild confidence, and take purposeful steps forward — one session at a time.",
    linkLabel: "Explore clarity",
    href: "/services",
    accent: "bg-[#ffdbc8]/30",
    delay: 0.24,
    offset: "lg:mt-32",
  },
];

export function ApproachSection() {
  return (
    <section className="bg-[#f6f3ec] py-24 md:py-32 relative overflow-hidden">
      <WaveDivider fill="#efe9dd" className="absolute top-0 left-0 right-0" flip />

      {/* Breath line spine */}
      <div
        className="absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#aeb9a4]/30 to-transparent hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <SectionReveal className="max-w-xl mb-16 lg:mb-24">
          <p className="text-label text-[#7c8b74] mb-3">Our Approach</p>
          <h2 className="text-h2 text-[#33342e]">
            Three domains, one haven
          </h2>
          <p className="text-lead text-[#5c5e54] mt-4">
            We work across mental health, wellness, and emotional clarity — because
            healing rarely fits a single box.
          </p>
        </SectionReveal>

        {/* Asymmetric stagger grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {DOMAINS.map(({ icon: Icon, title, body, linkLabel, href, accent, delay, offset }) => (
            <SectionReveal key={title} delay={delay} className={offset}>
              <div
                className={[
                  "group relative rounded-3xl p-8 md:p-10",
                  "hover:-translate-y-2 transition-transform duration-700",
                  accent,
                ].join(" ")}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#fcfaf5] flex items-center justify-center mb-6 shadow-sm">
                  <Icon
                    className="w-5 h-5 text-[#5a6b57]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-h3 text-[#33342e] mb-3">{title}</h3>
                <p
                  className="text-body text-[#5c5e54] mb-6"
                  dangerouslySetInnerHTML={{ __html: body }}
                />

                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[#5a6b57] text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  {linkLabel}
                  <span className="w-5 h-px bg-[#5a6b57] inline-block transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
