import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' : 'bg-transparent'
    }`}>
      <nav className="py-4">
        <div className="flex items-center justify-between">
          {/* Revolving CA Logo */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl animate-rotate-slow">
              CA
            </div>
            <div className="absolute inset-0 w-12 h-12 border-2 border-blue-400/30 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              data-cursor-hover
            >
              <Home size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              data-cursor-hover
            >
              <User size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              data-cursor-hover
            >
              <Code size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('resume')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              data-cursor-hover
            >
              <Download size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Resume
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium"
              data-cursor-hover
            >
              <Mail size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;