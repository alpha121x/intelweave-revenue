import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - GTM Outbound Services | Book Intelligence Audit</title>
        <meta name="description" content="Book a 15-minute intelligence audit with GTM Outbound Services. Connect with revenue systems engineers to discuss your outbound strategy." />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24">
          <FinalCTA />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
