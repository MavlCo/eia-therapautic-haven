import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "EIA Therapeutic Haven — Nourishing you. Naturally.",
    template: "%s | EIA Therapeutic Haven",
  },
  description:
    "A structured mental wellness and emotional clarity practice supporting individuals, couples, and families through stress, emotional overwhelm, and life transitions. Confidential · Online · Globally available.",
  keywords: [
    "mental wellness",
    "emotional support",
    "therapy",
    "Nigerian diaspora",
    "anxiety",
    "stress management",
    "online counselling",
  ],
  authors: [{ name: "EIA Therapeutic Haven" }],
  openGraph: {
    title: "EIA Therapeutic Haven — Nourishing you. Naturally.",
    description:
      "Structured emotional wellness & clarity support. Confidential · Online · Compassionate.",
    type: "website",
    locale: "en_GB",
    siteName: "EIA Therapeutic Haven",
  },
  twitter: {
    card: "summary_large_image",
    title: "EIA Therapeutic Haven",
    description: "Structured emotional wellness & clarity support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-[#f6f3ec] text-[#33342e]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
