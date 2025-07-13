import React from 'react';
import { Github, Linkedin, Mail, Home, User, Code, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-24 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-16">
        <div className="grid md:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cheshta Agarwal
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              DevOps Engineer passionate about containerization and infrastructure automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-10 animate-fade-in-up animation-delay-200">
            <h3 className="text-white font-semibold text-lg relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 group"
                data-cursor-hover
              >
                <Home size={16} className="group-hover:animate-bounce" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 group"
                data-cursor-hover
              >
                <User size={16} className="group-hover:animate-bounce" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 group"
                data-cursor-hover
              >
                <Code size={16} className="group-hover:animate-bounce" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection('certificates')}
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 group"
                data-cursor-hover
              >
                <Award size={16} className="group-hover:animate-bounce" />
                <span>Certificates</span>
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10 animate-fade-in-up animation-delay-400">
            <h3 className="text-white font-semibold text-lg relative">
              Contact
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:cheshtaagarwal17@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:translate-x-2 group"
                data-cursor-hover
              >
                <Mail size={16} className="group-hover:animate-bounce" />
                <span>cheshtaagarwal17@gmail.com</span>
              </a>
              <p className="text-gray-400 text-sm">📍 India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-10 animate-fade-in-up animation-delay-600">
            <h3 className="text-white font-semibold text-lg relative">
              Connect
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/cheshta1710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/cheshta-agarwal-7a8592292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:cheshtaagarwal17@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-20 pt-12 text-center animate-fade-in-up animation-delay-800">
          <p className="text-gray-400 text-sm">
            © 2024 Cheshta Agarwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;