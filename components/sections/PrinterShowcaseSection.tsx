"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  PRINTER_TYPES,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from "./config";

export function PrinterShowcaseSection() {
  return (
    <section id="printers" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Printer Types We Service
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find your printer.{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              Request a repair.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Browse common printer types used at home, in shops, and in offices. Tap a type to
            message us — no technical knowledge needed.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PRINTER_TYPES.map((printer, index) => (
            <MotionDiv key={printer.id} delay={Math.min(index * 0.04, 0.28)}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-slate-200/60 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={printer.image}
                    alt={printer.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 20vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
                    {printer.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {printer.description}
                  </p>
                  <a
                    href={whatsappUrl(
                      "asmeer",
                      WHATSAPP_MESSAGES.printerType(printer.name),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-dark px-4 text-sm font-semibold text-white shadow-md shadow-brand/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand/35"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Request this printer
                  </a>
                </div>
              </motion.article>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv delay={0.15} className="mt-12 text-center">
          <p className="text-sm text-muted">
            Don&apos;t see your model?{" "}
            <a href="#contact" className="font-semibold text-brand hover:underline">
              Contact us
            </a>{" "}
            or browse{" "}
            <a href="#printer-repair" className="font-semibold text-brand hover:underline">
              printer repair details
            </a>
            .
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
