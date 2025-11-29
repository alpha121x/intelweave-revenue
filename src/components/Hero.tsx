// Hero.tsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const spotlightX = useTransform(mouseX, (value) => `${value}px`);
  const spotlightY = useTransform(mouseY, (value) => `${value}px`);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(186 65% 42% / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(186 65% 42% / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, hsl(186 65% 42% / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(186 65% 42% / 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_20%/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_20%/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Spotlight */}
      <motion.div
        className="absolute w-[600px] h-[600px] pointer-events-none hidden sm:block"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, hsl(186 65% 42% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="container relative z-30 mx-auto px-6 py-16 pt-32 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Forensic Market Intelligence →
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Predictable Enterprise Pipeline
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-steel mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            We reverse-engineer your market & competitors to build automated
            outbound systems that deliver high-intent conversations.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Calendly POPUP BUTTON */}
            <PopupButton
              url="https://calendly.com/YOUR-LINK/15min"
              rootElement={document.body}
              text="Book a 15-Minute Intelligence Audit"
              className="group shadow-2xl hover:shadow-[0_0_40px_hsl(186_65%_42%/0.5)] transition-all duration-500 relative overflow-hidden text-sm py-2.5 px-5 md:text-xl md:py-4 md:px-8 rounded-full bg-primary text-white"
            />

            <a
              href="https://www.linkedin.com/company/gtmoutboundservices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="intelligence"
                size="xl"
                className="group shadow-xl hover:shadow-2xl border-2 border-primary/30 hover:border-primary/60 relative overflow-hidden text-sm py-2.5 px-5 md:text-xl md:py-4 md:px-8"
              >
                <LinkedinIcon className="mr-2 w-5 h-5" />
                DM "INTEL" on LinkedIn
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
