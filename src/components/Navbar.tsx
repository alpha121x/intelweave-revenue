import { useState } from "react";
import { Menu, X, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { label: "Home", id: "hero" },
    { label: "Problem", id: "problem" },
    { label: "Solution", id: "solution" },
    { label: "Comparison", id: "comparison" },
    { label: "Why Us", id: "why" },
    { label: "Who We Work With", id: "who-we-work-with" },
    { label: "Value & ROI", id: "value-roi" },
    { label: "Proprietary Systems", id: "proprietary-systems" },
    { label: "How We Work", id: "how-we-work" },
    { label: "Referral Warning", id: "referral-warning" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Investment", id: "investment" },
    { label: "CTA", id: "final-cta" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="fixed w-full bg-navy-deep z-50 border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection("hero")}>
          GTM Outbound
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-steel hover:text-primary transition-colors"
            >
              {section.label}
            </button>
          ))}

          <a
            href="https://www.linkedin.com/company/gtmoutboundservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="intelligence" size="sm" className="ml-4 flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" /> DM "INTEL"
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-deep shadow-lg z-50 flex flex-col items-center py-4 space-y-3 border-t border-border">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-steel hover:text-primary transition-colors w-full text-center py-2"
            >
              {section.label}
            </button>
          ))}

          <a
            href="https://www.linkedin.com/company/gtmoutboundservices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="intelligence" size="sm" className="mt-2 flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" /> DM "INTEL"
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
