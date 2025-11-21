import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Comparison from "@/components/Comparison";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Investment from "@/components/Investment";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <Why />
      <Testimonials />
      <Investment />
      <FinalCTA />
    </main>
  );
};

export default Index;
