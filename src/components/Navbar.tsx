import { useState, useEffect } from "react";
import { Menu, X, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { label: "Problem", id: "problem" },
    { label: "Solution", id: "solution" },
    { label: "Why Us", id: "why" },
    { label: "Systems", id: "proprietary-systems" },
    { label: "Value&ROI", id: "value-roi" },
    { label: "Investment", id: "investment" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 pointer-events-auto ${
      scrolled 
        ? 'bg-navy-deep/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5' 
        : 'bg-navy-deep/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo with image and full name */}
        <div 
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 group"
          onClick={() => scrollToSection("hero")}
        >
          <img 
            src="/gtm_logo.jpg" 
            alt="GTM Outbound Services" 
            className="w-10 h-10 rounded-full object-contain group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300"
          />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
            GTM Outbound Services
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative text-sm font-medium text-steel hover:text-white transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {section.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-white group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}

          <a
            href="https://www.linkedin.com/company/gtmoutboundservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            <Button 
              variant="intelligence" 
              size="sm" 
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              <LinkedinIcon className="w-4 h-4" /> 
              <span className="hidden xl:inline">DM</span> "INTEL"
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-navy-deep backdrop-blur-xl border-t border-primary/30 shadow-2xl transition-all duration-500 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-6 py-6 space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left text-white hover:text-primary hover:translate-x-2 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {section.label}
            </button>
          ))}

          <a
            href="https://www.linkedin.com/company/gtmoutboundservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-4"
          >
            <Button 
              variant="intelligence" 
              size="sm" 
              className="w-full flex items-center justify-center gap-2"
            >
              <LinkedinIcon className="w-4 h-4" /> DM "INTEL"
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
