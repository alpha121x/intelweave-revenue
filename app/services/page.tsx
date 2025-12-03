import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Solution from "@/components/sections/Solution";
import ProprietarySystems from "@/components/sections/ProprietarySystems";
import HowWeWork from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "Services - Forensic Market Intelligence",
  description:
    "Our services include forensic market intelligence, proprietary automation systems, and 3-phase revenue engineering methodology. Target only 3-5% of your market with genuine buying intent.",
  openGraph: {
    title: "Services - GTM Outbound Services | Forensic Market Intelligence",
    description:
      "Our services include forensic market intelligence, proprietary automation systems, and 3-phase revenue engineering methodology.",
    url: "https://gtmoutboundservices.com/services",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Solution />
        <ProprietarySystems />
        <HowWeWork />
      </div>
      <Footer />
    </main>
  );
}
