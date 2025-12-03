import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Contact Us - Book Intelligence Audit",
  description:
    "Book a 15-minute intelligence audit with GTM Outbound Services. Connect with revenue systems engineers to discuss your outbound strategy.",
  openGraph: {
    title: "Contact Us - GTM Outbound Services | Book Intelligence Audit",
    description:
      "Book a 15-minute intelligence audit with GTM Outbound Services. Connect with revenue systems engineers to discuss your outbound strategy.",
    url: "https://gtmoutboundservices.com/contact",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
