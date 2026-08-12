import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { PcRepairSection } from "@/components/sections/PcRepairSection";
import { PrinterSection } from "@/components/sections/PrinterSection";
import { PrinterShowcaseSection } from "@/components/sections/PrinterShowcaseSection";
import { SolarSection } from "@/components/sections/SolarSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { Stats } from "@/components/sections/Stats";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { serviceImages } from "@/components/sections/config";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* 1. Understand the company */}
        <Hero />
        {/* 2. Explore services through short videos */}
        <StoriesSection />
        {/* 3. Service details + available printer equipment */}
        <PrinterSection />
        <PrinterShowcaseSection />
        <PcRepairSection imageSrc={serviceImages.pc} />
        <SolarSection imageSrc={serviceImages.solar} />
        {/* 4. Choose a service & pricing */}
        <PricingSection />
        {/* 5. Trust signals */}
        <Stats />
        <ServiceAreaSection />
        <Testimonials />
        <FaqSection />
        {/* 6. Book / request service */}
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
