import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_20%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Surgical red accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-surgical-red/10 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-steel">Forensic Market Intelligence</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance"
          >
            Forensic Market Intelligence{" "}
            <span className="text-primary">→</span>{" "}
            <span className="bg-gradient-to-r from-foreground to-steel bg-clip-text text-transparent">
              Predictable Enterprise Pipeline
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-steel mb-4 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            We reverse-engineer your market, competitors, and highest-converting deal patterns to build automated outbound systems that deliver pre-qualified, high-intent conversations – consistently and scalably.
          </motion.p>

          {/* Proof points */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground mb-12 text-balance"
          >
            No bought lists. No spray-and-pray. No hope marketing.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="surgical" size="xl" className="group">
              Book a 15-Minute Intelligence Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="intelligence" size="xl" className="group">
              <LinkedinIcon className="mr-2" />
              DM "INTEL" on LinkedIn
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Led by Chartered Accountant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Proprietary Intelligence Stack</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Enterprise-Grade Systems</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
