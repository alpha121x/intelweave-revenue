import { motion } from "framer-motion";
import { Award, Cpu, TrendingUp, Target } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Financial & Strategic Depth",
    description: "Led by a Chartered Accountant with global experience across listed, PE-backend, and high-growth companies - bringing forensic commercial insight to every projecy.",
  },
  {
    icon: Cpu,
    title: "Proprietary Intelligence Stack",
    description: "Built in-house systems that replace expensive third-party tools",
  },
  {
    icon: TrendingUp,
    title: "Permanent Revenue Infrastructure",
    description: "Systems become your owned capability – running 24/7 even after engagement ends",
  },
  {
    icon: Target,
    title: "Dedicated Team",
    description: "A dedicated team that does not work with your competitors. YOU stay priority. We prioritise quality and results over quantity.",
  },
];

const Why = () => {
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

          {/* Advantages grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                    <advantage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-steel leading-relaxed">{advantage.description}</p>
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
              We bridge strategy (what to do) and execution (how to automate it)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
