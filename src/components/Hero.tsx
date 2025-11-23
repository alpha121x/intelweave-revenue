import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon } from "lucide-react";

// Note: Removed unused icons (SquareIcon, Crown, Briefcase) as we will use <img> tags.

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-primary" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_20%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Teal accent glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full" />

      <div className="container relative z-30 mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Overline with Logo & Company Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 backdrop-blur-sm"
          >
            {/* Logo animation */}
            <motion.img
              src="/logoo.png"
              alt="GTM Outbound Services"
              className="w-10 h-10 rounded-full object-contain"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.span
              className="text-sm font-semibold text-steel tracking-wide"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              GTM Outbound Services
            </motion.span>
          </motion.div>

          {/* Main headline with staggered word animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Forensic Market Intelligence{" "}
            </motion.span>
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              →
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-foreground to-steel bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Predictable Enterprise Pipeline
            </motion.span>
          </motion.h1>

          {/* Subheadline with fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
            className="text-xl md:text-2xl text-steel mb-4 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            We reverse-engineer your market, competitors, and highest-converting
            deal patterns to build automated outbound systems that deliver
            pre-qualified, high-intent conversations – consistently and
            scalably.
          </motion.p>

          {/* Proof points with enhanced animation */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="text-muted-foreground mb-12 text-balance font-medium"
          >
            No bought lists. No spray-and-pray. No hope marketing.
          </motion.p>

          {/* CTA buttons with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="surgical"
                size="xl"
                className="group shadow-lg hover:shadow-xl transition-shadow"
              >
                Book a 15-Minute Intelligence Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="intelligence"
                size="xl"
                className="group shadow-lg hover:shadow-xl transition-shadow"
              >
                <LinkedinIcon className="mr-2" />
                DM "INTEL" on LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with staggered fade-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground"
          >
            {[
              "Led by Chartered Accountant",
              "Proprietary Intelligence Stack",
              "Enterprise-Grade Systems",
              "Strategist with a 20-30% conversion rate",
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <span>{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* --- CREDIBILITY BAR (REVISED with IMG tags for actual logos) --- */}
          <div className="mt-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="py-3 px-6 md:px-10 inline-flex items-center justify-center rounded-full bg-background/30 backdrop-blur-md border border-border/50 shadow-lg"
            >
              <div className="flex items-center justify-center space-x-6 md:space-x-8">
                <span className="text-xs font-medium text-steel/70 hidden sm:block">
                  As seen in / Powered by:
                </span>
                
                {/* 1. Chartered Accountant ACCA logo */}
                <motion.img 
                  src="/logos/acca-logo.png" // <--- Update this path
                  alt="ACCA Chartered Accountant"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.4 }}
                  className="w-auto h-6 opacity-70 hover:opacity-100 transition-opacity"
                />

                {/* 2. LinkedIn logo (DM "Intel") - Using the Lucide icon for simplicity here, as it's just a visual cue */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.4 }}
                    className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                >
                    <LinkedinIcon className="w-5 h-5 text-primary/80 md:w-6 md:h-6" />
                </motion.div>
                
                {/* 3. HubSpot partner badge or Clay logo */}
                <motion.img 
                  src="/logos/clay-hubspot-logo.png" // <--- Update this path
                  alt="Tech Partner Logo (Clay/HubSpot)"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.4 }}
                  className="w-auto h-6 opacity-70 hover:opacity-100 transition-opacity"
                />

                {/* 4. UK Government Crown logo */}
                <motion.img 
                  src="/logos/uk-crown-logo.svg" // <--- Update this path
                  alt="UK Government Crown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.7, duration: 0.4 }}
                  className="w-auto h-6 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          </div>
          {/* ------------------------------------------- */}
        </motion.div>

        {/* Scroll indicator - Moved outside the main motion.div for better visual placement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-border/50 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;