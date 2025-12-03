import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Investment from "@/components/sections/Investment";
import ValueROI from "@/components/sections/ValueROI";

export const metadata: Metadata = {
  title: "Pricing & Investment - ROI-Focused Engagement",
  description:
    "Transparent pricing and ROI framework. Our engagement model focuses on dramatically lower CAC, shorter sales cycles, and higher win rates through forensic market intelligence.",
  openGraph: {
    title: "Pricing & Investment - GTM Outbound Services | ROI-Focused Engagement",
    description:
      "Transparent pricing and ROI framework. Our engagement model focuses on dramatically lower CAC, shorter sales cycles, and higher win rates.",
    url: "https://gtmoutboundservices.com/pricing",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ValueROI />
        <Investment />
      </div>
      <Footer />
    </main>
  );
}
