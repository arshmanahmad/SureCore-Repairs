"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  CONTACTS,
  WHATSAPP_MESSAGES,
  whatsappUrl,
  type ContactId,
} from "@/components/sections/config";

const OPTIONS: { id: ContactId; note: string }[] = [
  { id: "asmeer", note: "Printer · Solar · Inverter" },
  { id: "ahsan", note: "PC / Laptop" },
];

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-4 z-[60] sm:bottom-7 sm:right-6"
    >
      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="Choose a WhatsApp contact"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[min(calc(100vw-2rem),20.5rem)] overflow-hidden rounded-2xl border border-white/12 bg-[#0b1220]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 px-3 pb-2 pt-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-[11px] text-zinc-400">Choose who to chat with</p>
              </div>
            </div>

            <div className="space-y-1.5 p-1">
              {OPTIONS.map((option) => {
                const person = CONTACTS[option.id];
                return (
                  <a
                    key={option.id}
                    href={whatsappUrl(option.id, WHATSAPP_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-3 transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {person.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-zinc-400">
                        {person.phoneDisplay}
                      </span>
                      <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-wider text-cyan">
                        {option.note}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-[11px] font-semibold text-white">
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Chat
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close WhatsApp contacts" : "Open WhatsApp contacts"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45),0_0_0_6px_rgba(37,211,102,0.12)] transition-shadow hover:shadow-[0_14px_36px_rgba(37,211,102,0.55),0_0_0_8px_rgba(26,102,224,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        {open ? <CloseIcon /> : <WhatsAppIcon className="h-7 w-7" />}
      </motion.button>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
