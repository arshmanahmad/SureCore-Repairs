/**
 * AB Computer Technologies — the only three services we offer.
 * Use this everywhere (nav, hero, footer, cards) so offerings stay consistent.
 */
export const BRAND = {
  name: "AB Computer Technologies",
  shortName: "AB Computer",
} as const;

export const CONTACTS = {
  asmeer: {
    name: "Asmeer",
    phoneDisplay: "+92 308 1730799",
    tel: "tel:+923081730799",
    wa: "923081730799",
  },
  ahsan: {
    name: "Ahsan",
    phoneDisplay: "+92 302 1656563",
    tel: "tel:+923021656563",
    wa: "923021656563",
  },
} as const;

export type ContactId = keyof typeof CONTACTS;

export const WHATSAPP_MESSAGES = {
  printer: "Hello, I need help with my printer.",
  pc: "Hello, I need help with my PC/computer.",
  solar: "Hello, I would like to know more about your solar services.",
  general: "Hello, I would like to know more about your services.",
} as const;

export function whatsappUrl(contact: ContactId, message: string) {
  return `https://wa.me/${CONTACTS[contact].wa}?text=${encodeURIComponent(message)}`;
}

export const OFFERED_SERVICES = [
  {
    id: "printer",
    label: "Printer Repair",
    shortLabel: "Printers",
    href: "#printer-repair",
    emoji: "🖨️",
    contact: "asmeer" as const,
    whatsappMessage: WHATSAPP_MESSAGES.printer,
  },
  {
    id: "pc",
    label: "PC & Laptop Repair",
    shortLabel: "PC Repair",
    href: "#pc-repair",
    emoji: "🖥️",
    contact: "ahsan" as const,
    whatsappMessage: WHATSAPP_MESSAGES.pc,
  },
  {
    id: "solar",
    label: "Solar Installation",
    shortLabel: "Solar",
    href: "#solar",
    emoji: "☀️",
    contact: "asmeer" as const,
    whatsappMessage: WHATSAPP_MESSAGES.solar,
  },
] as const;

/**
 * Image sources for the three service deep-dive sections.
 */
export const serviceImages = {
  /** USER PROVIDED: Photo of a man repairing a printer */
  printer: "/images/printer-repair-man.jpg",

  /** USER PROVIDED: PC & laptop repair technician at workstation */
  pc: "/images/pc-laptop-repair.jpg",

  /** USER PROVIDED: Technician working on solar panels */
  solar: "/images/solar-technician.jpg",
} as const;
