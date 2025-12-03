import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Why from "@/components/sections/Why";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";

export const metadata: Metadata = {
  title: "About Us - Revenue Systems Engineers",
  description:
    "Learn about GTM Outbound Services - revenue systems engineers with FTSE 100/Fortune 500 experience. We deliver forensic market intelligence and proprietary automation infrastructure.",
  openGraph: {
    title: "About Us - GTM Outbound Services | Revenue Systems Engineers",
    description:
      "Learn about GTM Outbound Services - revenue systems engineers with FTSE 100/Fortune 500 experience.",
    url: "https://gtmoutboundservices.com/about",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Why />
        <WhoWeWorkWith />
      </div>
      <Footer />
    </main>
  );
}
