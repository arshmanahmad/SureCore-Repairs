import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  CONTACTS,
  whatsappUrl,
  type ContactId,
} from "@/components/sections/config";

type WhatsAppLinkProps = {
  contact: ContactId;
  message: string;
  label?: string;
  className?: string;
  variant?: "solid" | "ghost" | "light";
};

const VARIANT = {
  solid:
    "border border-[#25D366]/30 bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/35",
  ghost:
    "border border-[#25D366]/40 bg-[#25D366]/10 text-[#4ade80] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white",
  light:
    "border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white",
} as const;

export function WhatsAppLink({
  contact,
  message,
  label = "WhatsApp",
  className = "",
  variant = "ghost",
}: WhatsAppLinkProps) {
  const person = CONTACTS[contact];

  return (
    <a
      href={whatsappUrl(contact, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${person.name} on WhatsApp`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 hover:scale-105 ${VARIANT[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px]" />
      {label}
    </a>
  );
}
