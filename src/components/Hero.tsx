import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, LinkedinIcon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // --- Calendly Script Loader (Added) ---
  useEffect(() => {
    // Calendly Script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Calendly CSS  ⭐ REQUIRED
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
      url: "https://calendly.com/abbasshakor0123/30min",
    });
  };

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
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />

      {/* Animated mesh gradient overlay */}
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

      {/* Dynamic grid with fade animation */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_20%/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_20%/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Multiple floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full hidden sm:block"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-teal-primary/15 blur-[120px] rounded-full hidden sm:block"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full hidden sm:block"
        animate={{
          x: [-150, 150, -150],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Spotlight effect */}
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

      {/* Accent lines */}
      <motion.div
        className="absolute top-40 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleY: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden sm:block"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleY: [0.8, 1, 0.8] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* FIX: Added pt-32/sm:pt-40 */}
      <div className="container relative z-30 mx-auto px-6 py-16 pt-32 sm:py-20 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-balance relative"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              className="inline-block"
            >
              Forensic Market Intelligence{" "}
            </motion.span>
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.8,
                type: "spring",
                stiffness: 150,
              }}
              style={{
                filter: "drop-shadow(0 0 20px hsl(186 65% 42% / 0.6))",
              }}
            >
              →
            </motion.span>{" "}
            <motion.span
              className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, y: 50, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 1.1, duration: 0.9, type: "spring" }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% center", "200% center", "0% center"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(0 0% 98%), hsl(186 65% 42%), hsl(0 0% 98%))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                }}
              >
                Predictable Enterprise Pipeline
              </motion.span>
            </motion.span>
            {/* Accent line */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-steel mb-4 max-w-3xl mx-auto leading-relaxed text-balance"
          >
            We reverse-engineer your market, competitors, and highest-converting
            deal patterns to build automated outbound systems that deliver
            pre-qualified, high-intent conversations – consistently and
            scalably.
          </motion.p>

          {/* Proof points */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="text-muted-foreground mb-12 text-balance font-medium"
          >
            No bought lists. No spray-and-pray. No hope marketing.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.8,
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
          >
            {/* FIRST BUTTON — Calendly Popup Trigger */}
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0 0 0px hsl(186 65% 42% / 0)",
                  "0 0 30px hsl(186 65% 42% / 0.4)",
                  "0 0 0px hsl(186 65% 42% / 0)",
                ],
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="rounded-full w-full md:w-auto"
            >
              <Button
                variant="surgical"
                size="xl"
                onClick={openCalendly}
                className="group shadow-2xl hover:shadow-[0_0_40px_hsl(186_65%_42%/0.5)] transition-all duration-500 relative overflow-hidden text-sm py-2.5 px-5 md:text-xl md:py-4 md:px-8"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
                <span className="relative z-10">
                  Book a 15-Minute Intelligence Audit
                </span>
                <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* SECOND BUTTON */}
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-auto"
            >
              <a
                href="https://www.linkedin.com/company/gtmoutboundservices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="intelligence"
                  size="xl"
                  className="group shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-primary/30 hover:border-primary/60 relative overflow-hidden text-sm py-2.5 px-5 md:text-xl md:py-4 md:px-8"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1,
                      delay: 0.5,
                    }}
                  />
                  <LinkedinIcon className="mr-2 relative z-10 w-5 h-5" />{" "}
                  <span className="relative z-10">DM "INTEL" on LinkedIn</span>
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-10 sm:mt-16 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-3 md:gap-8 text-sm text-muted-foreground max-w-sm mx-auto sm:max-w-none sm:mx-0"
          >
            {[
              "Led by Chartered Accountant",
              "Proprietary Intelligence Stack",
              "Enterprise-Grade Systems",
              "Strategist with a 20-30% conversion rate",
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 2.2 + index * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, x: 2 }}
                className="flex items-center gap-2 group cursor-default"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary relative"
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      "0 0 0px hsl(186 65% 42% / 0)",
                      "0 0 15px hsl(186 65% 42% / 0.8)",
                      "0 0 0px hsl(186 65% 42% / 0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 2], opacity: [0.8, 0, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  />
                </motion.div>
                <span className="group-hover:text-foreground transition-colors">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Logos */}
          <div className="mt-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.5 }}
                className="text-center text-sm font-medium text-muted-foreground/70 mb-6 uppercase tracking-widest"
              >
                As seen in/ Powered by:
              </motion.p>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-8 p-4 md:p-6 rounded-xl bg-secondary/30 backdrop-blur-sm border border-border/50 shadow-inner">
                <motion.img
                  src="/logos/acca-logo.jpeg"
                  alt="ACCA"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                  className="h-8 sm:h-9 w-auto transition-all duration-500"
                />

                <motion.img
                  src="/logos/linkedin-logo.png"
                  alt="LinkedIn"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.6 }}
                  className="h-8 sm:h-10 w-auto transition-all duration-500"
                />

                <motion.img
                  src="/logos/clay-logo.png"
                  alt="Clay"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  className="h-10 sm:h-12 w-auto transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                />

                <motion.img
                  src="/logos/hubspot-logo.png"
                  alt="HubSpot Certified Partner"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7, duration: 0.6 }}
                  className="h-8 sm:h-10 w-auto transition-all duration-500"
                />

                <motion.img
                  src="/logos/instanlty-logo.png"
                  alt="Instantle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  className="h-8 sm:h-10 w-auto transition-all duration-500"
                />

                <motion.img
                  src="/logos/smartlead-logo.png"
                  alt="Smartlead"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.9, duration: 0.6 }}
                  className="h-8 sm:h-10 w-auto transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
