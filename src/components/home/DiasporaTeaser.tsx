import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function DiasporaTeaser() {
  return (
    <section className="bg-[#f6f3ec] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <SectionReveal direction="left">
            <div
              className="relative w-full aspect-[4/3] overflow-hidden"
              style={{ borderRadius: "24px 80px 24px 80px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=85"
                alt="Diverse group of people representing the Nigerian diaspora community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#5a6b57]/10 mix-blend-multiply" />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="right">
            <Globe
              className="w-8 h-8 text-[#7c8b74] mb-6"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="text-label text-[#7c8b74] mb-3">For the Diaspora</p>
            <h2 className="text-h2 text-[#33342e] mb-5">
              Living abroad and carrying it all silently?
            </h2>
            <p className="text-lead text-[#5c5e54] mb-6">
              We support Nigerians in the UK, USA &amp; Canada — and beyond. You
              deserve structured emotional support that understands your context,
              your culture, and your silent struggles.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["🇬🇧 UK", "🇺🇸 USA", "🇨🇦 Canada"].map((flag) => (
                <span
                  key={flag}
                  className="text-sm text-[#5c5e54] bg-[#efe9dd] px-4 py-2 rounded-full border border-[#c8b6a0]/40"
                >
                  {flag}
                </span>
              ))}
            </div>
            <Link
              href="/diaspora"
              className="inline-flex items-center gap-2.5 text-[#5a6b57] font-semibold hover:gap-5 transition-all duration-300 group"
            >
              Support for the Diaspora
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
