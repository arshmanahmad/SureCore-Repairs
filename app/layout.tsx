import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/components/sections/config";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = `${BRAND.name} | Printer, Laptop & Solar Repair in Multan`;
const siteDescription =
  "AB Computer Technologies repairs printers, PCs, and laptops, and installs solar panels and inverters for homes and businesses in Multan. Easy booking by call or WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://abcomputertechnologies.com"),
  title: {
    default: siteTitle,
    template: `%s | ${BRAND.name}`,
  },
  description: siteDescription,
  applicationName: BRAND.name,
  keywords: [
    "printer repair Multan",
    "laptop repair Multan",
    "PC repair Multan",
    "solar installation Multan",
    "solar inverter repair",
    "AB Computer Technologies",
    "office printer service",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_PK",
    siteName: BRAND.name,
    images: [
      {
        url: "/images/ab-logo-4k.png",
        width: 4096,
        height: 4096,
        alt: `${BRAND.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/ab-logo-4k.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "business",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    image: "https://abcomputertechnologies.com/images/ab-logo-4k.png",
    telephone: ["+923081730799", "+923021656563"],
    areaServed: {
      "@type": "City",
      name: "Multan",
      addressCountry: "PK",
    },
    description: siteDescription,
    url: "https://abcomputertechnologies.com",
    priceRange: "PKR",
    knowsAbout: [
      "Printer repair",
      "Laptop repair",
      "PC repair",
      "Solar panel installation",
      "Solar inverter repair",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Repair and installation services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Printer Repair",
            description: "Home and office printer repair and setup in Multan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PC & Laptop Repair",
            description: "Computer and laptop repair for homes and businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solar Installation & Inverter Repair",
            description: "Solar panel installation and inverter repair services.",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
