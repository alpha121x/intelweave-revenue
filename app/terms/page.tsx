import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for GTM Outbound Services. Review our terms and conditions for using our revenue systems engineering services.",
  openGraph: {
    title: "Terms of Service - GTM Outbound Services",
    description:
      "Terms of Service for GTM Outbound Services. Review our terms and conditions for using our revenue systems engineering services.",
    url: "https://gtmoutboundservices.com/terms",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/terms",
  },
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-navy-deep">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-steel to-white bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-steel text-lg mb-8">Last updated: {currentDate}</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                By accessing and using GTM Outbound Services, you accept and
                agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                2. Services Description
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                GTM Outbound Services provides revenue systems engineering,
                forensic market intelligence, and proprietary automation
                infrastructure for B2B companies. Services include but are not
                limited to market research, outbound campaign management, and
                strategic consulting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                3. User Obligations
              </h2>
              <p className="text-steel leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-steel space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>
                  Not misuse or attempt to gain unauthorized access to our
                  systems
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                All content, methodologies, proprietary systems, and materials
                provided by GTM Outbound Services remain our exclusive property.
                You may not reproduce, distribute, or create derivative works
                without express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                5. Service Level & Guarantees
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                While we strive to deliver exceptional results, we cannot
                guarantee specific business outcomes. Results depend on multiple
                factors including market conditions, product-market fit, and
                client collaboration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                6. Payment Terms
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                Payment terms are specified in individual service agreements.
                Late payments may result in service suspension and interest
                charges.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                7. Confidentiality
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of proprietary
                information shared during the course of engagement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                GTM Outbound Services shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages
                resulting from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                9. Termination
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                Either party may terminate services with 30 days written notice.
                Termination terms are specified in individual service
                agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                10. Governing Law
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                These terms shall be governed by and construed in accordance
                with the laws of England and Wales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                11. Contact Information
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us
                via LinkedIn or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
