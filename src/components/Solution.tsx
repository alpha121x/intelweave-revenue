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
      "Universal Company Intelligence™ – company name → 100+ data points instantly",
      "Real-time Government & Enterprise Tender Monitoring (UK • EU • US • CAN • AUS)",
      "Global Registry & Filings Extraction Engine",
      "Autonomous Multi-Channel Orchestration (LinkedIn + Email + Call)",
    ],
  },
];

const Solution = () => {
  return (
    <section className="relative py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              We Don't Generate Leads.{" "}
              <span className="text-primary">We Engineer Revenue Systems.</span>
            </h2>
            <p className="text-xl text-steel">
              Before we send a single message, we reverse-engineer everything:
            </p>
          </div>

          {/* Solution cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">
                      {index + 1}. {solution.title}
                    </h3>
                    {solution.description && (
                      <p className="text-lg text-steel leading-relaxed">
                        {solution.description}
                      </p>
                    )}
                    {solution.points && (
                      <ul className="space-y-3 mt-4">
                        {solution.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span className="text-lg text-steel">{point}</span>
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
