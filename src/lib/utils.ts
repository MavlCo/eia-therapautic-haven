import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "2348000000000"; // Replace with actual number
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=HELP`;
