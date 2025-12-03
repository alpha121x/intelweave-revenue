import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Comparison from "@/components/sections/Comparison";
import Why from "@/components/sections/Why";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import ValueROI from "@/components/sections/ValueROI";
import ProprietarySystems from "@/components/sections/ProprietarySystems";
import HowWeWork from "@/components/sections/HowWeWork";
import ReferralWarning from "@/components/sections/ReferralWarning";
import Testimonials from "@/components/sections/Testimonials";
import Investment from "@/components/sections/Investment";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
}
