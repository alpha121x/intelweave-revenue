import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Why from "@/components/Why";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - GTM Outbound Services | Revenue Systems Engineers</title>
        <meta name="description" content="Learn about GTM Outbound Services - revenue systems engineers with FTSE 100/Fortune 500 experience. We deliver forensic market intelligence and proprietary automation infrastructure." />
      </Helmet>
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24">
          <Why />
          <WhoWeWorkWith />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
