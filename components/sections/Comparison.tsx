"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    old: "Bought lists & ZoomInfo",
    new: "Proprietary forensic intelligence + live signals",
  },
  {
    old: "Hyper-speicific data with accounts indicating intent",
    new: "Surgical: only accounts showing intent",
  },
  {
    old: "Generic sequences",
    new: "Pain chains competitors haven't discovered",
  },
  {
    old: "2–8% reply rates",
    new: "Materially higher engagement & conversion",
  },
  {
    old: "MQL vanity metrics",
    new: "Pipeline ARR, cost per qualified opportunity",
  },
  {
    old: "Manual research & burnout",
    new: "Fully automated intelligence systems",
  },
];

const Comparison = () => {
  return (
    <section className="relative py-24 bg-navy-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Old World vs New World Outbound
            </h2>
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            {/* Header - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-2 gap-px bg-border">
              <div className="bg-secondary/50 px-4 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0" />
                  <h3 className="text-sm md:text-xl font-bold text-muted-foreground">
                    The Old World (Most Agencies)
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-accent px-4 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <h3 className="text-sm md:text-xl font-bold text-foreground">
                    The GTM Outbound Services Way
                  </h3>
                </div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-border">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-px bg-border"
                >
                  <div className="bg-card px-4 md:px-8 py-4 md:py-6">
                    <p className="text-xs md:text-base text-muted-foreground">
                      <span className="md:hidden text-primary font-semibold">Old: </span>
                      {comparison.old}
                    </p>
                  </div>
                  <div className="bg-card px-4 md:px-8 py-4 md:py-6 md:border-l-2 border-primary/50">
                    <p className="text-xs md:text-base text-foreground font-medium">
                      <span className="md:hidden text-primary font-semibold">New: </span>
                      {comparison.new}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
