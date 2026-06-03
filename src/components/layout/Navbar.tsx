"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40",
          "transition-all duration-500",
          scrolled
            ? "bg-[#f6f3ec]/90 backdrop-blur-md shadow-[0_2px_24px_rgba(90,107,87,0.08)]"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none"
            aria-label="EIA Therapeutic Haven — home"
          >
            <Image
              src="/logos/logo.png"
              alt="EIA Therapeutic Haven"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-2.5 py-1.5 text-label text-[#5c5e54] hover:text-[#5a6b57]",
                    "transition-colors duration-200 group",
                    pathname === link.href && "text-[#5a6b57]"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-2.5 right-2.5 h-px bg-[#7c8b74]",
                      "origin-left transition-transform duration-300",
                      "scale-x-0 group-hover:scale-x-100",
                      pathname === link.href && "scale-x-100"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/begin"
              className={cn(
                "hidden lg:inline-flex items-center gap-2",
                "bg-[#5a6b57] text-[#fcfaf5] text-[0.875rem] font-semibold tracking-wide",
                "px-6 py-2.5 rounded-full",
                "transition-all duration-300",
                "hover:bg-[#4a5e47] hover:shadow-[0_8px_24px_rgba(90,107,87,0.25)]",
                "active:scale-[0.97]"
              )}
            >
              Begin Your Session
            </Link>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#aeb9a4]/20 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-[#33342e]" />
              ) : (
                <Menu className="w-5 h-5 text-[#33342e]" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-[#f6f3ec] flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Decorative blob */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-[#aeb9a4]/10 rounded-full -translate-y-1/2 translate-x-1/2"
              style={{ filter: "blur(60px)" }}
              aria-hidden="true"
            />

            <div className="flex-1 flex flex-col justify-center px-10 pt-20 pb-16">
              <motion.ul
                className="space-y-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
                role="list"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 text-3xl font-light text-[#33342e]",
                        "border-b border-[#aeb9a4]/40 hover:text-[#5a6b57]",
                        "transition-colors duration-200",
                        pathname === link.href && "text-[#5a6b57]"
                      )}
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-10 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <Link
                  href="/begin"
                  className="block text-center bg-[#5a6b57] text-[#fcfaf5] font-semibold py-4 rounded-full text-base hover:bg-[#4a5e47] transition-colors"
                >
                  Begin Your Session
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border-[1.5px] border-[#7c8b74] text-[#5a6b57] font-semibold py-4 rounded-full text-base hover:bg-[#aeb9a4]/20 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Script accent */}
            <motion.p
              className="px-10 pb-8 text-xl text-[#aeb9a4]"
              style={{ fontFamily: "var(--font-script)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Nourishing you. Naturally.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
