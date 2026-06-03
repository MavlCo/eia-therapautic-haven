"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="group relative">
        {/* Tooltip */}
        <div
          className={[
            "absolute bottom-full right-0 mb-3",
            "bg-[#33342e] text-[#fcfaf5] text-xs font-medium",
            "px-3 py-2 rounded-xl whitespace-nowrap",
            "opacity-0 group-hover:opacity-100 pointer-events-none",
            "transition-opacity duration-300",
            "shadow-lg",
          ].join(" ")}
        >
          Message HELP to begin
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#33342e]" />
        </div>

        {/* Button */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp — message HELP to begin"
          className={[
            "flex items-center justify-center",
            "w-14 h-14 rounded-full",
            "bg-[#5a6b57] text-white",
            "shadow-[0_8px_32px_rgba(90,107,87,0.4)]",
            "hover:bg-[#4a5e47]",
            "transition-colors duration-300",
          ].join(" ")}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-6 h-6" strokeWidth={1.75} />
        </motion.a>
      </div>
    </motion.div>
  );
}
