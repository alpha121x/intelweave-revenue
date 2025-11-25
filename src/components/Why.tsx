import { motion } from "framer-motion";
// Imported two new icons (Zap, Lightbulb) to support the two new points
import { Award, Cpu, TrendingUp, Target, Zap, Lightbulb } from "lucide-react"; 

const advantages = [
  {
    icon: Award,
    title: "Financial & Strategic Depth",
    // Shortened description to reduce spacing
    description: "Led by a Chartered Accountant with global experience – bringing forensic commercial insight to every project.",
  },
  {
    icon: Cpu,
    title: "Proprietary Intelligence Stack",
    // Shortened description to reduce spacing
    description: "Built in-house systems that replace expensive third-party tools.",
  },
  {
    icon: TrendingUp,
    title: "Permanent Revenue Infrastructure",
    // Shortened description to reduce spacing
    description: "Systems become your owned capability – running 24/7 even after engagement ends.",
  },
  {
    icon: Target,
    title: "Dedicated Team",
    // Shortened description to reduce spacing
    description: "A dedicated team that does not work with your competitors. We prioritise quality and results over quantity.",
  },
  // --- New Point 5: Insight-Driven Outbound (based on client request) ---
  {
    icon: Lightbulb,
    title: "Insight-Driven Outbound",
    description: "Outbound built from competitive insights, not recycled sequences.",
  },
  // --- New Point 6: Revenue Engine Approach (based on client request) ---
  {
    icon: Zap,
    title: "Revenue Engine Approach",
    description: "An approach that treats outbound as a revenue engine, not a messaging channel.",
  },
];

const Why = () => {
  return (
    <section className="relative py-24 bg-gradient-primary" id="why">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Why GTM Outbound Services
            </h2>
            <p className="text-2xl text-steel mb-4">
              Most agencies are list brokers with SDRs.
            </p>
            <p className="text-2xl text-primary font-semibold">
              We're revenue systems engineers led by a Chartered Accountant.
            </p>
          </div>

          {/* Advantages grid (Now 3 columns on desktop for better spacing for 6 points, if desired, otherwise keeping 2 columns) */}
          {/* Using 3 columns for better layout of 6 points, as requested to reduce spacing overall */}
          <div className="grid md:grid-cols-3 gap-6"> 
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth" // Reduced padding from p-8 to p-6
              >
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-3"> {/* Reduced icon container size and margin */}
                    <advantage.icon className="w-5 h-5 text-primary" /> {/* Reduced icon size */}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3> {/* Reduced font size and margin */}
                  <p className="text-steel text-sm leading-relaxed">{advantage.description}</p> {/* Reduced font size */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-accent border border-primary/20 rounded-xl text-center"
          >
            <p className="text-lg text-foreground font-medium">
              We bridge strategy (what to do) and execution (how to implement it)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;