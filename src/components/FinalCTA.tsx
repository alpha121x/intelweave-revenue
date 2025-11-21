import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32 bg-gradient-primary overflow-hidden">
      {/* Surgical red accent glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surgical-red/10 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Questions */}
          <p className="text-xl text-steel mb-6">
            Revenue flat? Pipeline volatile? Ready to take share from competitors?
          </p>

          {/* Main headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance leading-tight">
            Book Your 15-Minute{" "}
            <span className="text-primary">Intelligence Audit</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-steel mb-12 max-w-2xl mx-auto text-balance">
            We'll reverse-engineer one hidden gap that's quietly limiting your growth – no pitch, just data.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="surgical" size="xl" className="group">
              Book Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="intelligence" size="xl" className="group">
              <LinkedinIcon className="mr-2" />
              DM "INTEL" on LinkedIn
            </Button>
          </div>

          {/* Alternative CTA */}
          <p className="text-muted-foreground">
            Or DM <span className="font-semibold text-foreground">"INTEL"</span> on LinkedIn for the 60-second version.
          </p>

          {/* Accent line */}
          <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
