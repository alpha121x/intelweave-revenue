import { motion } from "framer-motion";
import { Target, TrendingUp, Users, MessageSquare, Zap } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Forensic Competitive & Market Analysis",
    points: [
      "Who's taking share and exactly how",
      "White-space gaps competitors are missing",
      "Live buying signals others never see",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Model Deep-Dive (Chartered Accountant DNA)",
    description:
      "We analyse prospects the way we once audited FTSE 100 & Fortune 500 balance sheets: revenue structures, cost dynamics, cash flow, unit economics. This is why our targeting and messaging convert materially higher.\n\nWe identify which markets, industries, and geographies offer the fastest path to scalable revenue.",
  },
  {
    icon: Users,
    title: "Hidden ICP Discovery",
    description:
      "Triangulating firmographics + technographics + intent data to surface the accounts that actually buy.",
  },
  {
    icon: MessageSquare,
    title: "Pain Point-Led Messaging",
    description:
      "First outreach reads like internal intelligence because it's built on research competitors haven't done.",
  },
  {
    icon: Zap,
    title: "Proprietary Automation Stack (runs 24/7)",
    points: [
      "Universal Company Intelligence – company name → 100+ data points instantly",
      "Real-time Government & Enterprise Tender Monitoring (UK • EU • CAN • AUS)",
      "Global Registry & Filings Extraction Engine",
      "Autonomous Multi-Channel Orchestration (LinkedIn + Email + Call)",
    ],
  },
];

const Solution = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Our Methodology
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 text-pretty">
              We Don't Generate Leads.{" "}
              <span className="text-primary">We Engineer Revenue Systems.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-steel leading-relaxed">
              Before we send a single message, we reverse-engineer everything:
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-3 sm:space-y-5">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-3 sm:p-5 md:p-8 bg-card border border-border rounded-xl 
                           hover:border-primary/50 transition-all duration-300 hover:shadow-depth overflow-hidden"
              >
                <div className="flex items-start gap-3 sm:gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow min-w-0">
                    {/* Title */}
                    <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-3 leading-snug">
                      {index + 1}. {solution.title}
                    </h3>

                    {/* Description */}
                    {solution.description && (
                      <p className="text-xs sm:text-sm md:text-base text-steel leading-relaxed whitespace-pre-line">
                        {solution.description}
                      </p>
                    )}

                    {/* Points */}
                    {solution.points && (
                      <ul className="space-y-1 sm:space-y-2 mt-2 sm:mt-3">
                        {solution.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <span className="text-primary mt-1 text-xs sm:text-sm md:text-base">•</span>
                            <span className="text-xs sm:text-sm md:text-base text-steel">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
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

export default Solution;
