// Central place to edit brand details. No other file should hardcode these.

// IMPORTANT: replace with the real WhatsApp business number, in international
// format with no leading zero, no spaces, no plus sign (e.g. Malawi number
// +265 99 123 4567 becomes "265991234567").
export const WHATSAPP_NUMBER = "265991234567";

export const siteConfig = {
  name: "Goddess Hair",
  tagline: "Crowned. Every day.",
  description:
    "Goddess Hair supplies premium bundles, closures, wigs and hair care for women who treat their hair like the crown it is.",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDefaultMessage:
    "Hi Goddess Hair! I'd like to place an order.",
  instagram: "https://instagram.com/goddesshair",
  location: "Lilongwe, Malawi",
};

export function buildWhatsAppLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
