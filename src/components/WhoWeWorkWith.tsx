import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Target, LineChart, Rocket, Network, Briefcase } from "lucide-react";

const clientTypes = [
  {
    icon: TrendingDown,
    title: "Stagnant Revenue (Turnaround)",
    description: "Your pipeline is flat. Your playbook stopped working. Your reps are burning out on activities that don't convert.",
    solution: "We diagnose structural failures – usually it's intelligence gaps, not execution problems – and rebuild the system.",
  },
  {
    icon: TrendingUp,
    title: "Unsustainable Scaling (Optimisation)",
    description: "You're growing but burning cash. CAC is climbing. Deal cycles are lengthening. You're not sure which accounts are actually worth pursuing.",
    solution: "We validate your ICP with data, identify efficiency gaps, and engineer systems that scale profitably.",
  },
  {
    icon: Target,
    title: "Market Domination (Offensive Growth)",
    description: "You're ready to grab market share but don't know where competitors are vulnerable or how to position against them.",
    solution: "We map competitive landscape, identify their blind spots, and build campaigns that exploit market gaps.",
  },
];

const industries = [
  {
    icon: LineChart,
    title: "PE/VC-Backed Companies",
    description: "Portfolio companies under growth pressure needing rapid revenue optimization",
  },
  {
    icon: Rocket,
    title: "Scale-Ups",
    description: "Companies with unpredictable or inefficient pipeline looking for systematic growth",
  },
  {
    icon: Network,
    title: "Enterprise Teams",
    description: "Organizations tired of high data bills for low conversion rates",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "RegTech, FinTech SaaS, Enterprise B2B Technology providers",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-navy-deep">
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
              Who We Work With
            </h2>
            <p className="text-base sm:text-lg text-steel max-w-3xl mx-auto">
              Three Types of B2B Companies Partner With Us
            </p>
          </div>

          {/* Client types */}
          <div className="space-y-4 sm:space-y-6 mb-12">
            {clientTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 sm:p-6 md:p-8 bg-gradient-surface border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <type.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{type.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-steel mb-2 sm:mb-3 leading-relaxed">{type.description}</p>
                    <p className="text-sm sm:text-base md:text-base font-medium text-foreground">{type.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Industries we serve */}
          <div className="pt-10 sm:pt-12 md:pt-16 border-t border-border">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
              Industries We Serve
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-steel mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
              Complex B2B markets where competitive intelligence creates material advantage
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-5 md:p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <industry.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{industry.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-steel leading-relaxed">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
