import { useState, useEffect } from "react";
import { Menu, X, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Contact", path: "/contact" },
  ];


  return (
    <header
      className={`fixed w-full z-[100] transition-all duration-500 pointer-events-auto ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-navy-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo with image and full name */}
        <Link 
          to="/" 
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300 group"
        >
          <img
            src="/gtm_outbound_logo.png"
            alt="GTM Outbound Services"
            className="w-12 h-12 rounded-full object-contain group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300"
          />

          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
            GTM Outbound Services
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {pages.map((page, index) => (
            <Link
              key={page.path}
              to={page.path}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                location.pathname === page.path ? "text-white" : "text-steel hover:text-white"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {page.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-white transition-all duration-300 ${
                location.pathname === page.path ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
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
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-navy-deep backdrop-blur-xl border-t border-primary/30 shadow-2xl transition-all duration-500 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-2">
          {pages.map((page, index) => (
            <Link
              key={page.path}
              to={page.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left hover:translate-x-2 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-primary/10 font-medium ${
                location.pathname === page.path ? "text-primary bg-primary/10" : "text-white hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {page.label}
            </Link>
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
