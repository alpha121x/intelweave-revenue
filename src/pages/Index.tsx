import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Comparison from "@/components/Comparison";
import Why from "@/components/Why";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ValueROI from "@/components/ValueROI";
import ProprietarySystems from "@/components/ProprietarySystems";
import HowWeWork from "@/components/HowWeWork";
import ReferralWarning from "@/components/ReferralWarning";
import Testimonials from "@/components/Testimonials";
import Investment from "@/components/Investment";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <Why />
      <WhoWeWorkWith />
      <ValueROI />
      <ProprietarySystems />
      <HowWeWork />
      <ReferralWarning />
      <Testimonials />
      <Investment />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
