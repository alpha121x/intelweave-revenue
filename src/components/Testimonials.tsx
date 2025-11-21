import { motion } from "framer-motion";
import { Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    company: "Meridian Capital Partners",
    industry: "PE-Backed FinTech",
    logo: "MC",
    quote: "GTM Outbound identified £2.4M in qualified government procurement opportunities we had completely missed. Their forensic approach to market intelligence is unlike any agency we've worked with.",
    author: "Sarah Chen",
    role: "VP Revenue Operations",
    results: [
      { metric: "67%", label: "Lower CAC" },
      { metric: "£2.4M", label: "Pipeline Added" },
      { metric: "31 days", label: "Shorter Cycles" },
    ],
  },
  {
    company: "Apex Compliance Group",
    industry: "RegTech SaaS",
    logo: "AC",
    quote: "They reverse-engineered our competitor's positioning gaps and built messaging that positioned us as the only logical choice. Win rate increased 40% in Q2 alone.",
    author: "James Morrison",
    role: "Chief Commercial Officer",
    results: [
      { metric: "40%", label: "Higher Win Rate" },
      { metric: "18%", label: "Reply Rate" },
      { metric: "3.2x", label: "Pipeline Velocity" },
    ],
  },
  {
    company: "Sterling Advisory",
    industry: "Professional Services",
    logo: "SA",
    quote: "The Chartered Accountant-led approach meant they understood our clients' financial pressures better than our own team. First agency that's delivered consistent qualified opportunities.",
    author: "David Winters",
    role: "Managing Partner",
    results: [
      { metric: "£890K", label: "ARR Generated" },
      { metric: "12%", label: "Conversion Rate" },
      { metric: "5.1x", label: "ROAS" },
    ],
  },
  {
    company: "Velocity Growth Partners",
    industry: "PE Portfolio Operations",
    logo: "VG",
    quote: "We deployed their system across 4 portfolio companies. The intelligence infrastructure they built is now a permanent revenue asset – still generating qualified pipeline 18 months later.",
    author: "Rebecca Foster",
    role: "Operating Partner",
    results: [
      { metric: "4", label: "Portfolio Cos" },
      { metric: "£3.7M", label: "Combined Pipeline" },
      { metric: "18mo", label: "Still Running" },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-gradient-primary">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Client Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              What Happens When Intelligence{" "}
              <span className="text-primary">Meets Execution</span>
            </h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Real results from PE-backed companies and enterprise clients who replaced guesswork with forensic market intelligence
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-depth h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Company header */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-accent border border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary tracking-tight">
                        {testimonial.logo}
                      </span>
                    </div>

                    {/* Company info */}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{testimonial.company}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Results metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/30 rounded-lg border border-border">
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom credibility statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-steel text-lg">
              <span className="text-primary font-semibold">100% of clients</span> see qualified pipeline within the first 8 weeks
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
