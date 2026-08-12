"use client";

import { motion } from "framer-motion";
import { MotionDiv } from "@/components/ui/MotionDiv";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { WHATSAPP_MESSAGES, type ContactId } from "./config";

const PLANS = [
  {
    id: "printer",
    title: "Printer Visit / Checkup",
    service: "Printer Repair",
    href: "#printer-repair",
    price: "Rs. 500",
    note: "Starting from — final price depends on the issue & parts",
    points: [
      "On-site office or home visit",
      "Jam, error & connectivity check",
      "Transparent repair quote",
    ],
    accent: "from-brand to-brand-light",
    featured: true,
    contact: "asmeer" as ContactId,
    whatsappMessage: WHATSAPP_MESSAGES.printer,
  },
  {
    id: "pc",
    title: "Laptop Checkup",
    service: "PC & Laptop Repair",
    href: "#pc-repair",
    price: "Rs. 500",
    note: "Starting from — final price depends on the issue & parts",
    points: [
      "Full hardware & software checkup",
      "Clear estimate before repair",
      "Home or workshop options",
    ],
    accent: "from-brand-dark to-brand",
    contact: "ahsan" as ContactId,
    whatsappMessage: WHATSAPP_MESSAGES.pc,
  },
  {
    id: "solar",
    title: "Solar Survey / Inverter Check",
    service: "Solar & Inverter",
    href: "#solar",
    price: "Rs. 500",
    note: "Starting from — final price depends on system size & install",
    points: [
      "Site survey for your home/office",
      "Inverter checkup when needed",
      "Simple savings & installation plan",
    ],
    accent: "from-emerald-600 to-brand",
    contact: "asmeer" as ContactId,
    whatsappMessage: WHATSAPP_MESSAGES.solar,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-24">
      <div className="site-shell">
        <MotionDiv className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Transparent Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose a service —{" "}
            <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
              from Rs. 500
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Every price below is a <strong className="font-semibold text-foreground">starting
            price</strong> — not a fixed or maximum rate. Final cost depends on the problem,
            parts, and work needed. You get a clear estimate first.
          </p>
        </MotionDiv>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <MotionDiv key={plan.id} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative flex h-full flex-col rounded-3xl border p-7 shadow-xl transition-shadow duration-300 hover:shadow-2xl ${
                  plan.featured
                    ? "border-brand/30 bg-gradient-to-b from-brand/5 to-white shadow-brand/10"
                    : "border-gray-100 bg-white shadow-zinc-200/50"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-brand-light px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most booked
                  </span>
                ) : null}

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {plan.service}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                  {plan.title}
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-medium text-muted">Starting from</p>
                  <p
                    className={`mt-1 bg-gradient-to-r ${plan.accent} bg-clip-text text-4xl font-black tracking-tight text-transparent`}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{plan.note}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <CheckIcon />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-2">
                  <a
                    href="#contact"
                    className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                      plan.featured
                        ? "bg-gradient-to-r from-brand to-brand-light text-white shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand-light/30"
                        : "border border-brand/30 text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    Book this service →
                  </a>
                  <WhatsAppLink
                    contact={plan.contact}
                    message={plan.whatsappMessage}
                    variant="light"
                    className="w-full"
                  />
                </div>
              </motion.article>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
          <p className="rounded-2xl border border-amber-200/80 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900/80">
            <strong className="font-semibold">Important:</strong> Rs. 500 is the starting charge for
            checkup / visit / survey. Repair parts, complex fixes, and solar installation are quoted
            separately after inspection.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.2L4.8 8.5 9.5 3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
