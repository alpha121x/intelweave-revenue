import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";

const phases = [
  {
    icon: Search,
    number: "Phase 1",
    title: "Revenue Diagnostic (Week 1-2)",
    description: "We reverse-engineer your market:",
    items: [
      "Competitive landscape analysis (who's winning and why)",
      "ICP validation with data (not assumptions)",
      "Pain point discovery and market gap identification",
      "GTM efficiency audit",
      "Strategic roadmap with prioritized opportunities",
    ],
  },
  {
    icon: Wrench,
    number: "Phase 2",
    title: "System Build (Week 3-6)",
    description: "We engineer your revenue infrastructure:",
    items: [
      "Automated intelligence extraction systems",
      "ICP scoring and prioritization models",
      "Pain point-led messaging frameworks",
      "Multi-channel outreach sequences",
      "Integration with your existing tech stack",
    ],
  },
  {
    icon: Rocket,
    number: "Phase 3",
    title: "Launch & Optimize (Week 7+)",
    description: "We deploy and continuously refine:",
    items: [
      "Targeted account engagement",
      "Real-time performance monitoring",
      "Weekly strategic reviews",
      "Continuous market intelligence updates",
      "System optimization based on conversion data",
    ],
  },
];

const HowWeWork = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              How We Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steel max-w-3xl mx-auto">
              A systematic approach to building predictable revenue systems
            </p>
          </div>

          {/* Phases */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line hidden on mobile */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-10 lg:left-[52px] top-20 md:top-24 bottom-[-32px] w-0.5 bg-gradient-to-b from-primary to-transparent" />
                )}

                <div className="group p-4 sm:p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-6">
                    <div className="flex-shrink-0 mb-3 md:mb-0 relative z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-gradient-accent border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <phase.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-2 sm:mb-3 md:mb-4">
                        <div className="text-xs sm:text-sm md:text-base font-semibold text-primary mb-1 sm:mb-2">
                          {phase.number}
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 md:mb-3">
                          {phase.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-steel mb-2 sm:mb-3 md:mb-4">
                          {phase.description}
                        </p>
                      </div>
                      <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                            <span className="text-xs sm:text-sm md:text-base text-steel leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
