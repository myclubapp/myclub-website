
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Logo variant="light" size="md" className="mr-2" />
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {['Features', 'Preise', 'Über uns'].map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-white hover:text-myclub-blue transition-colors font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        {/* CTA Buttons
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Login
          </Button>
          <Button className="bg-myclub-blue text-white hover:bg-myclub-darkblue">
            Kostenlos testen
          </Button>
        </div> */}
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md absolute w-full ${
        isMenuOpen ? 'max-h-[500px] py-5' : 'max-h-0'
      } overflow-hidden transition-all duration-300`}>
        <div className="container-custom flex flex-col space-y-4 pb-5">
          <ul className="flex flex-col space-y-4">
            {['Features', 'Preise', 'Über uns'].map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-white hover:text-myclub-blue transition-colors font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="border-white/20 text-white w-full hover:bg-white/10">
              Login
            </Button>
            <Button className="bg-myclub-blue text-white hover:bg-myclub-darkblue w-full">
              Kostenlos testen
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
