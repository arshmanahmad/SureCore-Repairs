import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/components/sections/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} | Printer, PC & Solar Installation`,
  description: `${BRAND.name} offers three services only: printer repair, PC & laptop repair, and solar installation — for homes and enterprises in Multan.`,
  applicationName: BRAND.name,
  openGraph: {
    title: `${BRAND.name} | Printer, PC & Solar Installation`,
    description: `${BRAND.name} offers printer repair, PC & laptop repair, and solar installation in Multan.`,
    type: "website",
    locale: "en_PK",
    siteName: BRAND.name,
  },
  twitter: {
    card: "summary",
    title: `${BRAND.name} | Printer, PC & Solar Installation`,
    description: `Printer repair, PC & laptop repair, and solar installation in Multan.`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    telephone: ["+923081730799", "+923021656563"],
    areaServed: "Multan, Punjab, Pakistan",
    description:
      "Printer repair, PC & laptop repair, and solar installation for homes and businesses in Multan.",
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
