import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerseBlockProps {
  verse: string;
  reference?: string;
  note?: string;
  className?: string;
}

export function VerseBlock({
  verse,
  reference,
  note,
  className,
}: VerseBlockProps) {
  return (
    <div
      className={cn(
        "relative bg-[#fcfaf5] rounded-3xl p-8 md:p-10",
        "border-l-[3px] border-[#c9a86a]",
        "shadow-[0_24px_60px_rgba(90,107,87,0.08)]",
        className
      )}
    >
      <BookOpen
        className="w-5 h-5 text-[#c9a86a] mb-4"
        aria-hidden="true"
        strokeWidth={1.5}
      />
      <blockquote
        className="font-serif text-xl md:text-2xl italic font-light leading-relaxed text-[#33342e]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        &ldquo;{verse}&rdquo;
      </blockquote>
      {reference && (
        <cite className="block mt-4 text-label text-[#c9a86a] not-italic">
          — {reference}
        </cite>
      )}
      {note && (
        <p className="mt-4 text-sm text-[#5c5e54] leading-relaxed">{note}</p>
      )}
    </div>
  );
}
