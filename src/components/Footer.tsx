import { motion } from "framer-motion";
import { LinkedinIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 bg-navy-deep border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          >
            {/* Company info */}
            <div>
              <h3 className="text-xl font-bold mb-4">GTM Outbound Services</h3>
              <p className="text-steel leading-relaxed">
                Revenue systems engineering led by a Chartered Accountant with FTSE 100 & Fortune 500 experience.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    Revenue Diagnostic
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    Pilot Engagement
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    Full Revenue System
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    Market Intelligence
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-bold mb-4">Industries</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    Professional Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    RegTech & Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    FinTech SaaS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-steel hover:text-primary transition-colors">
                    PE/VC-Backed
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-2 text-steel hover:text-primary transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@gtmoutbound.com" className="flex items-center gap-2 text-steel hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-steel hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>Schedule Call</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} GTM Outbound Services. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
