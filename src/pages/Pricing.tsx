import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Investment from "@/components/Investment";
import ValueROI from "@/components/ValueROI";
import { Helmet } from "react-helmet";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & Investment - GTM Outbound Services | ROI-Focused Engagement</title>
        <meta name="description" content="Transparent pricing and ROI framework. Our engagement model focuses on dramatically lower CAC, shorter sales cycles, and higher win rates through forensic market intelligence." />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24">
          <ValueROI />
          <Investment />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Pricing;
