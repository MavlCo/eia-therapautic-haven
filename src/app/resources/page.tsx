import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { SectionReveal, StaggerReveal, StaggerItem } from "@/components/ui/SectionReveal";
import { OrgBlob } from "@/components/ui/OrgBlob";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export const metadata: Metadata = {
  title: "Resources — The Journal",
  description:
    "Gentle words for heavy days. Articles on emotional wellness, stress, self-compassion, mindful living, and hope.",
};

const ARTICLES = [
  {
    category: "Stress Relief",
    title: "Why your mind won't switch off — and what to do about it",
    excerpt:
      "Chronic stress rewires how your brain processes rest. Understanding the cycle is the first step to breaking it.",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    category: "Self-Compassion",
    title: "You are not behind. You are becoming.",
    excerpt:
      "The comparison trap steals more peace than any circumstance. Here's how to gently step out of it.",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    category: "Mindful Living",
    title: "Five minutes that change everything: a morning grounding practice",
    excerpt:
      "You don't need an hour. You need intention. This simple morning ritual builds emotional resilience slowly but surely.",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    category: "Hope & Healing",
    title: "When prayer feels unanswered: holding faith in hard seasons",
    excerpt:
      "Faith doesn't always mean certainty. Sometimes it means continuing to show up when the path is unclear.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    category: "Emotional Wellness",
    title: "The quiet cost of always being strong",
    excerpt:
      "Strength that has no outlet becomes weight. Permission to rest isn't weakness — it's wisdom.",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    category: "Stress Relief",
    title: "For Nigerians abroad: the pressure nobody talks about",
    excerpt:
      "Navigating diaspora life means carrying invisible weight. This article names what many feel but rarely say.",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Stress Relief": "#d5e8cf",
  "Self-Compassion": "#efe9dd",
  "Mindful Living": "#d5e8cf",
  "Hope & Healing": "#ffdbc8",
  "Emotional Wellness": "#efe9dd",
};

export default function ResourcesPage() {
  const featured = ARTICLES.filter((a) => a.featured);
  const regular = ARTICLES.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <OrgBlob className="absolute top-0 right-0" color="sage" size="xl" speed="slow" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal>
            <p className="text-label text-[#7c8b74] mb-4">The Journal</p>
            <h1 className="text-display text-[#33342e] mb-6 max-w-2xl">
              Gentle words for{" "}
              <span className="text-[#5a6b57] italic" style={{ fontFamily: "var(--font-script)" }}>
                heavy days.
              </span>
            </h1>
            <p className="text-lead text-[#5c5e54] max-w-lg">
              Articles on emotional wellness, stress, self-compassion, and hope —
              written for the person who&apos;s carrying more than they let on.
            </p>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="#efe9dd" />

      {/* Featured articles */}
      <section className="bg-[#efe9dd] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="mb-12">
            <p className="text-label text-[#7c8b74]">Featured</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map(({ category, title, excerpt, readTime, image }) => (
              <SectionReveal key={title}>
                <article className="group bg-[#fcfaf5] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(90,107,87,0.08)] hover:-translate-y-2 transition-transform duration-700 cursor-pointer">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-7">
                    <span
                      className="inline-block text-xs font-semibold text-[#5a6b57] px-3 py-1 rounded-full mb-4"
                      style={{ backgroundColor: CATEGORY_COLORS[category] || "#efe9dd" }}
                    >
                      {category}
                    </span>
                    <h2
                      className="text-h3 text-[#33342e] mb-3 group-hover:text-[#5a6b57] transition-colors duration-300"
                    >
                      {title}
                    </h2>
                    <p className="text-body text-[#5c5e54] mb-5 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-[#aeb9a4]">
                        <Clock className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                        {readTime} read
                      </span>
                      <span className="text-[#5a6b57] text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#f6f3ec" />

      {/* Article grid */}
      <section className="bg-[#f6f3ec] py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
          <SectionReveal className="mb-12">
            <p className="text-label text-[#7c8b74]">All articles</p>
          </SectionReveal>

          <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {regular.map(({ category, title, excerpt, readTime, image }) => (
              <StaggerItem key={title}>
                <article className="group bg-[#fcfaf5] rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(90,107,87,0.06)] hover:-translate-y-1 transition-transform duration-500 cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="inline-block text-xs font-semibold text-[#5a6b57] px-3 py-1 rounded-full mb-3 self-start"
                      style={{ backgroundColor: CATEGORY_COLORS[category] || "#efe9dd" }}
                    >
                      {category}
                    </span>
                    <h3 className="text-h3 text-[#33342e] mb-2 group-hover:text-[#5a6b57] transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-sm text-[#5c5e54] leading-relaxed flex-1 mb-4">{excerpt}</p>
                    <div className="flex items-center gap-1.5 text-xs text-[#aeb9a4] mt-auto">
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                      {readTime} read
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <NewsletterForm />
    </>
  );
}
