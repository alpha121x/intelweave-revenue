import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
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

const Investment = () => {
  return (
    <section className="relative py-24 bg-navy-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Investment Framework
            </h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Our approach eliminates wasted spend and accelerates velocity because we target the 3–5% of the market that actually buys.
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-accent border-primary shadow-surgical scale-105"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    {tier.price.includes("£") && <span className="text-steel">one-time</span>}
                  </div>
                  <p className="text-steel mb-4">{tier.duration}</p>
                  <p className="text-foreground leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-steel">{feature}</span>
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
            className="mt-16 p-8 bg-card border border-border rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Clients typically see:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Dramatically lower cost per qualified opportunity",
                "Shorter sales cycles (prospects self-qualify faster)",
                "Higher win rates through superior positioning",
                "Owned intelligence systems that keep working long after we're gone",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-steel">{benefit}</p>
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
