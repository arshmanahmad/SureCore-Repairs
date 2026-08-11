import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { PcRepairSection } from "@/components/sections/PcRepairSection";
import { PrinterSection } from "@/components/sections/PrinterSection";
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
        <Hero />
        <StoriesSection />
        <PrinterSection />
        <PcRepairSection imageSrc={serviceImages.pc} />
        <SolarSection imageSrc={serviceImages.solar} />
        <PricingSection />
        <Stats />
        <ServiceAreaSection />
        <Testimonials />
        <FaqSection />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
