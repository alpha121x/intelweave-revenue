import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Solution from "@/components/Solution";
import ProprietarySystems from "@/components/ProprietarySystems";
import HowWeWork from "@/components/HowWeWork";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - GTM Outbound Services | Forensic Market Intelligence</title>
        <meta name="description" content="Our services include forensic market intelligence, proprietary automation systems, and 3-phase revenue engineering methodology. Target only 3-5% of your market with genuine buying intent." />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24">
          <Solution />
          <ProprietarySystems />
          <HowWeWork />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Services;
