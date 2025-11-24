import { motion } from "framer-motion";
import { DollarSign, Clock, TrendingUp, Database } from "lucide-react";

const valueProps = [
  {
    icon: DollarSign,
    title: "We Eliminate Wasted Spend",
    description: "Most outbound targets 80% of your market that will never buy. We use forensic intelligence to identify the 3-5% with genuine buying intent – dramatically reducing cost per qualified opportunity.",
  },
  {
    icon: Clock,
    title: "We Accelerate Deal Velocity",
    description: "Pain point-led messaging rooted in competitive research means prospects self-qualify faster. Shorter sales cycles because we're addressing problems they're already trying to solve.",
  },
  {
    icon: TrendingUp,
    title: "We Increase Win Rates",
    description: "Understanding market gaps competitors are missing gives you decisive positioning advantages in competitive deals. You enter conversations with evidence, not assumptions.",
  },
  {
    icon: Database,
    title: "We Build Infrastructure, Not Dependencies",
    description: "Our automated intelligence systems become your permanent revenue capability: continuous market monitoring, 24/7 prospect identification and qualification, scalable without proportional headcount increases.",
  },
];

const ValueROI = () => {
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
              Value & ROI
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-steel max-w-3xl mx-auto">
              Why Our Approach Delivers Material Returns
            </p>
          </div>

          {/* Value props grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 sm:p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                  <div className="flex-shrink-0 mb-3 sm:mb-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <prop.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{prop.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-steel leading-relaxed">{prop.description}</p>
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

export default ValueROI;
