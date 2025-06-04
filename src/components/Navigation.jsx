import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            WO
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`transition-all duration-300 hover:text-purple-400 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-purple-400 font-semibold' 
                    : 'text-white/80'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="block w-full text-left py-2 text-white/80 hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation
