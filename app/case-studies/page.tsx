import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Case Studies - Client Success Stories",
  description:
    "Explore case studies and testimonials from our clients. See how we've helped PE/VC-backed companies, enterprise B2B tech, and professional services firms achieve revenue growth.",
  openGraph: {
    title: "Case Studies - GTM Outbound Services | Client Success Stories",
    description:
      "Explore case studies and testimonials from our clients. See how we've helped PE/VC-backed companies achieve revenue growth.",
    url: "https://gtmoutboundservices.com/case-studies",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <section className="py-20 bg-gradient-to-b from-navy-deep via-charcoal to-navy-deep">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-steel to-white bg-clip-text text-transparent">
                Case Studies & Results
              </h1>
              <p className="text-xl text-steel leading-relaxed">
                Real outcomes from revenue systems engineering. Our clients
                achieve dramatically lower CAC, shorter sales cycles, and higher
                win rates through forensic market intelligence.
              </p>
            </div>
          </div>
        </section>
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
