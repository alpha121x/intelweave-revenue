import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for GTM Outbound Services. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - GTM Outbound Services",
    description:
      "Privacy Policy for GTM Outbound Services. Learn how we collect, use, and protect your personal information.",
    url: "https://gtmoutboundservices.com/privacy-policy",
  },
  alternates: {
    canonical: "https://gtmoutboundservices.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-steel text-lg mb-8">Last updated: {currentDate}</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                We collect information you provide directly to us, including
                name, email address, company information, and any other
                information you choose to provide when you contact us or book a
                consultation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-steel space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>
                  Communicate with you about products, services, and events
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                5. Your Rights
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal
                information. You may also object to or restrict certain
                processing of your data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="text-steel leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                7. Contact Us
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please
                contact us via LinkedIn or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
