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
    description: "Understanding market gaps competitors are missing gives you positioning advantages in competitive deals.",
  },
  {
    icon: Database,
    title: "We Build Infrastructure, Not Dependencies",
    description: "Our automated intelligence systems become your permanent revenue capability: continuous market monitoring, 24/7 prospect identification and qualification, scalable without proportional headcount increases.",
  },
];

const ValueROI = () => {
  return (
    <section className="relative py-24 bg-gradient-primary">
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
              Value & ROI
            </h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Why Our Approach Delivers Material Returns
            </p>
          </div>

          {/* Value props grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <prop.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                    <p className="text-steel leading-relaxed">{prop.description}</p>
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
