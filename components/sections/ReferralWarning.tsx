"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Target, Zap } from "lucide-react";

const ReferralWarning: FC = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Predictable Revenue Systems
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Why Referral-Dependent B2B Sales Pipelines Fail
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Build a Scalable Outbound Lead Generation Engine for Predictable Enterprise Growth
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-stretch">

            {/* Problem Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="
                p-4 sm:p-6 md:p-10
                bg-card
                border border-border
                rounded-xl
                flex flex-col
                h-full
                hover:border-primary/50
                hover:shadow-depth
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-steel" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Why Referral Growth Fails
                </h3>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  "Partners stop sending deals.",
                  "Word-of-mouth dries up.",
                  "SEO tanks or you enter a new market where nobody knows you.",
                  "Pipeline turns into a rollercoaster.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-steel mt-1 text-sm sm:text-base md:text-lg">•</span>
                    <span className="text-sm sm:text-base md:text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 sm:pt-6 border-t border-border mt-auto">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  Referrals built your past. Intelligent outbound sales automation secures your future.
                </p>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="
                p-4 sm:p-6 md:p-10
                bg-card
                border border-border
                rounded-xl
                flex flex-col
                h-full
                hover:border-primary/50
                hover:shadow-depth
                transition-all
                duration-300
              "
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  How We Create Controllable Pipeline
                </h3>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  "Build their first performing outbound engine.",
                  "Identify the industries and regions with the highest win rates.",
                  "Break into markets with zero brand presence.",
                  "Create a controllable, scalable pipeline they fully own.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 sm:pt-6 border-t border-border mt-auto">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">
                  Transform unpredictable referrals into a controllable B2B lead generation system.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralWarning;
