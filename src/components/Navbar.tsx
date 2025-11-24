import { useState } from "react";
import { Menu, X, LinkedinIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-navy-deep border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">GTM Outbound Services</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-steel hover:text-primary">Services</a>
          <a href="#industries" className="text-steel hover:text-primary">Industries</a>
          <a href="#contact" className="text-steel hover:text-primary">Contact</a>
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

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-deep shadow-lg z-50 flex flex-col items-center py-4 space-y-3">
          <a href="#services" className="text-steel hover:text-primary">Services</a>
          <a href="#industries" className="text-steel hover:text-primary">Industries</a>
          <a href="#contact" className="text-steel hover:text-primary">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
