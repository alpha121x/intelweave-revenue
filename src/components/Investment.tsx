import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Tier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const tiers: Tier[] = [
  {
    name: "Revenue Diagnostic",
    price: "£2,500",
    duration: "2 weeks",
    description: "Low-risk diagnostic to see the gaps before committing",
    features: [
      "Forensic market intelligence audit",
      "Competitive landscape analysis",
      "ICP validation with data",
      "Pain point mapping",
      "Strategic GTM roadmap",
    ],
    highlighted: false,
  },
  {
    name: "Pilot Engagement",
    price: "Schedule to discuss price",
    duration: "6–8 weeks",
    description: "Proof of concept with measurable results",
    features: [
      "System buildout and implementation",
      "200-500 targeted accounts",
      "Multi-channel campaign deployment",
      "Weekly performance reviews",
      "Full system validation",
    ],
    highlighted: true,
  },
  {
    name: "Full Revenue System",
    price: "Schedule to discuss price",
    duration: "Ongoing",
    description: "Complete revenue infrastructure",
    features: [
      "Continuous competitive monitoring",
      "Unlimited account targeting",
      "Advanced automation buildout",
      "Embedded strategic partnership",
      "Owned intelligence systems",
    ],
    highlighted: false,
  },
];

const Investment: FC = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-navy-deep" id="investment">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Investment Framework
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-steel max-w-2xl mx-auto">
              Our approach eliminates wasted spend and accelerates velocity because we target the 3–5% of the market that actually buys.
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-4 sm:p-6 md:p-8 rounded-xl border transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-accent border-primary shadow-surgical md:scale-105"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-3 sm:px-4 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{tier.price}</span>
                    {tier.price.includes("£") && <span className="text-xs sm:text-sm md:text-base text-steel">one-time</span>}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-steel mb-1 sm:mb-2">{tier.duration}</p>
                  <p className="text-xs sm:text-sm md:text-base text-foreground leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-3 h-3 sm:w-4 sm:h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm md:text-base text-steel">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlighted ? "surgical" : "intelligence"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Value statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-card border border-border rounded-xl"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">Clients typically see:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {[
                "Dramatically lower cost per qualified opportunity",
                "Shorter sales cycles (prospects self-qualify faster)",
                "Higher win rates through superior positioning",
                "Owned intelligence systems that keep working long after we're gone",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary flex-shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm md:text-base text-steel">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Investment;
