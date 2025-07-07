import React, { useState, useEffect } from 'react';
import { Home, User, Code, Mail, Download, Award } from 'lucide-react';

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
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
            CA
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500"
              data-cursor-hover
            >
              <Home size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500"
              data-cursor-hover
            >
              <User size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500"
              data-cursor-hover
            >
              <Code size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection('certificates')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500"
              data-cursor-hover
            >
              <Award size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Certificates
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link group flex items-center space-x-2 text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-500"
              data-cursor-hover
            >
              <Mail size={16} className="group-hover:animate-bounce" />
              <span className="relative">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;