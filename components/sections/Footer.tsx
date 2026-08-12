"use client";

import { MotionDiv } from "@/components/ui/MotionDiv";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  BRAND,
  CONTACTS,
  OFFERED_SERVICES,
  WHATSAPP_MESSAGES,
  whatsappUrl,
  type ContactId,
} from "./config";

const COLUMNS = [
  {
    title: "Services",
    links: [
      ...OFFERED_SERVICES.map((s) => ({ label: s.label, href: s.href })),
      { label: "Printer Types", href: "#printers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Service Area", href: "#service-area" },
      { label: "FAQ", href: "#faq" },
      { label: "Book a Service", href: "#contact" },
    ],
  },
];

const PHONE_CONTACTS: { id: ContactId; note: string }[] = [
  { id: "asmeer", note: "Printer · Solar · Inverter" },
  { id: "ahsan", note: "PC / Laptop" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark pb-24 text-zinc-400 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <MotionDiv className="grid gap-12 lg:grid-cols-[1.4fr_repeat(2,1fr)_1.2fr]">
          <div>
            <Logo theme="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              AB Computer Technologies helps Multan homes and businesses with printer repair,
              PC &amp; laptop repair, solar inverter repair, and solar panel installation —
              explained in plain language, booked by call or WhatsApp.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm transition-colors hover:text-brand-light">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              {PHONE_CONTACTS.map((item) => {
                const person = CONTACTS[item.id];
                return (
                  <li key={item.id}>
                    <p className="text-sm font-semibold text-white">{person.name}</p>
                    <p className="text-[11px] uppercase tracking-wider text-zinc-500">{item.note}</p>
                    <a
                      href={person.tel}
                      className="mt-1 block text-sm transition-colors hover:text-brand-light"
                    >
                      {person.phoneDisplay}
                    </a>
                    <a
                      href={whatsappUrl(item.id, WHATSAPP_MESSAGES.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-[#4ade80] transition-colors hover:text-white"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="#contact" className="text-sm transition-colors hover:text-brand-light">
                  Book on-site visit
                </a>
              </li>
            </ul>
          </div>
        </MotionDiv>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-zinc-500">Printer Repair · Laptop Repair · Solar &amp; Inverter</p>
        </div>
      </div>
    </footer>
  );
}
