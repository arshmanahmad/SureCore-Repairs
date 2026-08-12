"use client";

import { motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  CONTACTS,
  WHATSAPP_MESSAGES,
  whatsappUrl,
  type ContactId,
} from "./config";

const PEOPLE: { id: ContactId; note: string }[] = [
  { id: "asmeer", note: "Printer · Solar · Inverter" },
  { id: "ahsan", note: "PC / Laptop" },
];

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark py-24 sm:py-28">
      <motion.div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand/35 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-brand-light/25 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-dark/40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <MotionDiv>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-light">
            Book a service
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to request a repair or installation?{" "}
            <span className="bg-gradient-to-r from-brand-light to-white bg-clip-text text-transparent">
              Talk to us now.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Tell us whether you need printer repair, laptop/PC repair, solar inverter help, or
            solar panel installation. We respond with a clear plan and quote — usually within the
            hour.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.12} className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {PEOPLE.map((item) => {
            const person = CONTACTS[item.id];
            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/12 bg-white/5 p-5 text-left backdrop-blur-md"
              >
                <p className="text-lg font-bold text-white">{person.name}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-light">
                  {item.note}
                </p>
                <a
                  href={person.tel}
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark px-5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-200 hover:scale-[1.02]"
                >
                  Call {person.phoneDisplay}
                </a>
                <a
                  href={whatsappUrl(item.id, WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 text-sm font-semibold text-[#4ade80] transition-all duration-200 hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </article>
            );
          })}
        </MotionDiv>
      </div>
    </section>
  );
}
