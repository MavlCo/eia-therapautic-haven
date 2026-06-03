"use client";

import { Mail } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function NewsletterForm() {
  return (
    <section className="bg-[#efe9dd] py-20 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionReveal className="max-w-xl mx-auto text-center">
          <Mail className="w-8 h-8 text-[#7c8b74] mx-auto mb-5" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="text-h2 text-[#33342e] mb-4">Receive calm in your inbox</h2>
          <p className="text-body text-[#5c5e54] mb-8">
            Gentle articles, wellness prompts, and thoughtful words — delivered
            quietly, whenever you need them.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-[#fcfaf5] border border-[#c8b6a0] text-[#33342e] rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#5a6b57] transition-colors"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="bg-[#5a6b57] text-[#fcfaf5] font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#4a5e47] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-[#aeb9a4]">No spam. Unsubscribe anytime.</p>
        </SectionReveal>
      </div>
    </section>
  );
}
