import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const problems = [
  {
    stat: "3–5%",
    description: "You're targeting hundreds of accounts – only 3–5% are showing genuine buying intent right now",
  },
  {
    stat: "£500k+",
    description: "Marketing celebrates MQLs that Sales ignores",
  },
  {
    stat: "2–4%",
    description: "£500k+ spent on data tools for single-digit reply rates",
  },
  {
    stat: "3 weeks",
    description: "Buying signals (tenders, funding, hires, tech changes) discovered weeks too late",
  },
  {
    stat: "0%",
    description: "More reps + more spend on broken intelligence = cash burn, not growth",
  },
];

const Problem = () => {
  return (
    <section className="relative py-24 bg-navy-deep">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
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
              <AlertCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Reality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Your Competitors Aren't Winning Because They Work Harder
            </h2>
            <p className="text-2xl text-steel font-medium">
              They Know Exactly Where to Look
            </p>
          </div>

          {/* Problem grid */}
          <div className="grid gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 bg-gradient-surface border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg text-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                  {problem.stat && (
                    <div className="flex-shrink-0 text-right">
                      <span className="text-2xl font-bold text-primary">{problem.stat}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
