import { Logo } from "@/components/ui/Logo";

const COMPANY = [
  { label: "About Us", href: "#stats" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Printer Repair", href: "#printer-repair" },
  { label: "PC & Laptop Repair", href: "#pc-repair" },
  { label: "Solar Installation", href: "#solar" },
];

const SUPPORT = [
  { label: "Contact Us", href: "#contact" },
  { label: "Get a Quote", href: "#contact" },
  { label: "Book a Visit", href: "#contact" },
];

/** Legacy unused footer — kept aligned to the three offered services only. */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03060d]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo theme="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Three services only: printer repair, PC &amp; laptop repair, and solar installation.
            </p>
          </div>

          <FooterColumn title="Company" links={COMPANY} />
          <FooterColumn title="Services" links={SERVICES} />
          <FooterColumn title="Support" links={SUPPORT} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} AB Computer Technologies. All rights reserved.
          </p>
          <p className="text-sm text-muted">Printer · PC · Solar</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-muted transition-colors hover:text-indigo">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
