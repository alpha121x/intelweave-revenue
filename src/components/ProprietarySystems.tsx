import { motion } from "framer-motion";
import { Globe, FileSearch, Database, Target, MessageSquare, Zap } from "lucide-react";

const systems = [
  {
    icon: Globe,
    title: "Universal Company Intelligence",
    description: "Find any company's website, LinkedIn, social profiles, key contacts, and tech stack from just a company name. Eliminates hours of manual research per account.",
  },
  {
    icon: FileSearch,
    title: "Government Tender Monitoring",
    description: "Automated tracking of procurement opportunities across UK, Canada, Australia, EU markets. We've identified £600K+ in qualified government contract opportunities within 24 hours.",
  },
  {
    icon: Database,
    title: "B2B Intelligence Extraction",
    description: "Comprehensive firmographic, technographic, and contact data from global business directories – without expensive subscriptions to multiple platforms.",
  },
  {
    icon: Target,
    title: "Competitive Pain Point Mapping",
    description: "Scrape competitor messaging, customer reviews, job postings, and content to identify what they're struggling with – then position directly against those weaknesses.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Orchestration",
    description: "Coordinated outreach across email, LinkedIn, and direct channels with context-aware personalization at scale.",
  },
];

const ProprietarySystems = () => {
  return (
    <section className="relative py-24 bg-navy-deep">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proprietary Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Proprietary Systems
            </h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Intelligence Infrastructure That Creates Unfair Advantages
            </p>
          </div>

          {/* Systems grid */}
          <div className="space-y-6">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gradient-surface border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <system.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{system.title}</h3>
                    <p className="text-lg text-steel leading-relaxed">{system.description}</p>
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

export default ProprietarySystems;
