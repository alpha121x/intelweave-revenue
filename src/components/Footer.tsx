import { FC } from "react";
import { motion } from "framer-motion";
import { LinkedinIcon, Mail, Phone } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="relative py-12 bg-navy-deep border-t border-border" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8"
          >
            {/* Company info */}
            <div className="flex flex-col items-start sm:items-start">
              <img
                src="/gtm_logo_2.jpg"
                alt="GTM Outbound Services Logo"
                className="h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 object-fill rounded-full mb-4 sm:mb-6"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                GTM Outbound Services
              </h3>
              <p className="text-sm sm:text-base text-steel leading-relaxed">
                Revenue systems engineering led by a Chartered Accountant with global experience – bringing forensic commercial insight to every project.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Revenue Diagnostic", "Pilot Engagement", "Full Revenue System", "Market Intelligence"].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-steel hover:text-primary transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-lg font-bold mb-4">Industries</h4>
              <ul className="space-y-2">
                {["Professional Services", "RegTech & Compliance", "FinTech SaaS", "PE/VC-Backed"].map((industry, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-steel hover:text-primary transition-colors"
                    >
                      {industry}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.linkedin.com/company/gtmoutboundservices/"
                    className="flex items-center gap-2 text-steel hover:text-primary transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@gtmoutboundservices.com"
                    className="flex items-center gap-2 text-steel hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-steel hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Schedule Call</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © {new Date().getFullYear()} GTM Outbound Services. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
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
