/**
 * AB Computer Technologies — printer, PC/laptop, and solar services.
 * Use this everywhere (nav, hero, footer, cards) so offerings stay consistent.
 */
export const BRAND = {
  name: "AB Computer Technologies",
  shortName: "AB Computer",
  tagline: "Printer, PC & Solar Services in Multan",
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
  pc: "Hello, I need help with my PC/laptop.",
  solar: "Hello, I would like to know more about your solar services.",
  inverter: "Hello, I need help with my solar inverter.",
  general: "Hello, I would like to know more about your services.",
  printerType: (type: string) =>
    `Hello, I am interested in ${type} service / repair. Please guide me.`,
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
    plainSummary: "We fix home and office printers that jam, stop printing, or show errors.",
  },
  {
    id: "pc",
    label: "PC & Laptop Repair",
    shortLabel: "PC / Laptop",
    href: "#pc-repair",
    emoji: "💻",
    contact: "ahsan" as const,
    whatsappMessage: WHATSAPP_MESSAGES.pc,
    plainSummary: "We repair slow, broken, or blank-screen computers for home and work.",
  },
  {
    id: "solar",
    label: "Solar & Inverter",
    shortLabel: "Solar",
    href: "#solar",
    emoji: "☀️",
    contact: "asmeer" as const,
    whatsappMessage: WHATSAPP_MESSAGES.solar,
    plainSummary: "We install solar panels and repair solar inverters for homes and businesses.",
  },
] as const;

export const serviceImages = {
  printer: "/images/printer-repair-man.jpg",
  pc: "/images/pc-laptop-repair.jpg",
  solar: "/images/solar-technician.jpg",
  inverter: "/images/solar-inverter-repair.jpg",
} as const;

export const PRINTER_TYPES = [
  {
    id: "inkjet",
    name: "Inkjet Printers",
    description: "Everyday home and small-office printers for documents and light photo prints.",
    image: "/images/printers/inkjet.jpg",
    alt: "Inkjet printer for home and small office use",
  },
  {
    id: "laser",
    name: "Laser Printers",
    description: "Fast, sharp text printing for busy offices, schools, and shops.",
    image: "/images/printers/laser.jpg",
    alt: "Black laser printer for office document printing",
  },
  {
    id: "all-in-one",
    name: "All-in-One Printers",
    description: "Print, scan, and copy in one machine — ideal for homes and small teams.",
    image: "/images/printers/all-in-one.jpg",
    alt: "White all-in-one printer with scanner lid",
  },
  {
    id: "multifunction",
    name: "Multifunction Printers",
    description: "Larger print, scan, copy, and fax systems for growing businesses.",
    image: "/images/printers/multifunction.jpg",
    alt: "Multifunction office printer with paper trays",
  },
  {
    id: "photo",
    name: "Photo Printers",
    description: "Dedicated printers for high-quality photos, albums, and creative prints.",
    image: "/images/printers/photo.jpg",
    alt: "Compact photo printer for high-quality photo prints",
  },
  {
    id: "thermal",
    name: "Thermal Printers",
    description: "Quick label and slip printing for warehouses, clinics, and logistics.",
    image: "/images/printers/thermal.jpg",
    alt: "Thermal label and receipt printer",
  },
  {
    id: "dot-matrix",
    name: "Dot Matrix Printers",
    description: "Reliable multi-copy form printing still used in banks and accounts offices.",
    image: "/images/printers/dot-matrix.jpg",
    alt: "Classic dot matrix tractor-feed printer",
  },
  {
    id: "pos",
    name: "Receipt / POS Printers",
    description: "Shop, restaurant, and retail counter printers for bills and receipts.",
    image: "/images/printers/pos.jpg",
    alt: "POS receipt printer for retail counters",
  },
  {
    id: "business",
    name: "Business / Office Printers",
    description: "High-volume printers built for continuous office and enterprise workloads.",
    image: "/images/printers/business.jpg",
    alt: "Large business office laser printer",
  },
  {
    id: "wide-format",
    name: "Wide Format / Plotters",
    description: "Large blueprint and poster printers for architects, engineers, and signage.",
    image: "/images/printers/wide-format.jpg",
    alt: "Wide-format plotter printer for blueprints and posters",
  },
] as const;
