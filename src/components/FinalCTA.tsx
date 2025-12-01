import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon } from "lucide-react";

// --- NEW IMPORT ---
import ContactSection from "./ContactSection"; // Adjust the import path based on where you save ContactSection.tsx

const FinalCTA: FC = () => {
  // --- Calendly Script Loader (Added) ---
  useEffect(() => {
    // Calendly Script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Calendly CSS ⭐ REQUIRED
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  // --------------------------------------

  const openCalendly = () => {
    // --- Calendly Popup Trigger (Added) ---
    //@ts-ignore
    Calendly.initPopupWidget({
      url: "https://calendly.com/contact-gtmoutboundservices/15-min-discussion?hide_gdpr_banner=1",
    });
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-primary overflow-hidden">
      {/* Teal accent glow */}
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-primary/15 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* === 1. INTELLIGENCE AUDIT SECTION (Existing Content) === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl sm:max-w-4xl mx-auto text-center"
        >
          {/* Questions */}
          <p className="text-base sm:text-lg md:text-xl text-steel mb-4 sm:mb-6">
            Revenue flat? Pipeline volatile? Ready to take share from competitors?
          </p>

          {/* Main headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-balance leading-snug sm:leading-tight md:leading-tight">
            Book Your 15-Minute{" "}
            <span className="text-primary">Intelligence Audit</span>
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-steel mb-8 sm:mb-12 max-w-2xl mx-auto text-balance">
            We'll reverse-engineer one hidden gap that's quietly limiting your
            growth – no pitch, just data.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* BUTTON MODIFIED: Added onClick={openCalendly} */}
            <Button
              variant="surgical"
              size="xl"
              onClick={openCalendly}
              className="group w-full sm:w-auto"
            >
              Book Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="https://www.linkedin.com/company/gtmoutboundservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="intelligence"
                size="xl"
                className="group w-full sm:w-auto flex justify-center"
              >
                <LinkedinIcon className="mr-2" />
                DM "INTEL" on LinkedIn
              </Button>
            </a>
          </div>

          {/* Alternative CTA */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Or DM <span className="font-semibold text-foreground">"INTEL"</span>{" "}
            on LinkedIn for the 60-second version.
          </p>

          {/* Accent line */}
          <div className="mt-12 sm:mt-16 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* === 2. GENERAL CONTACT SECTION (New Content - Integrated Component) === */}
        <ContactSection />
      </div>
    </section>
  );
};

export default FinalCTA;