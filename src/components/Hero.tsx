import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-12">
      {/* Plain Black Background */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Name with Copperplate Gothic Bold */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent p-6 shadow-lg shadow-blue-500/60 hover:shadow-blue-500/80 transition-all duration-500 drop-shadow-[0_0_16px_rgba(59,130,246,0.8)]" style={{WebkitTextStroke: '2px #fff', fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 32px #3b82f6, 0 0 64px #60a5fa'}}>CHESHTA AGARWAL</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto animate-expand"></div>
            </div>
            
            {/* Title */}
            <p className="text-xl md:text-2xl text-white font-light animate-fade-in-up animation-delay-500" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
              DevOps Engineer & Containerization Specialist
            </p>
            
            {/* Description */}
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-1000" style={{fontFamily: 'Candara, sans-serif'}}>
              Passionate about building scalable infrastructure and automating deployment pipelines. 
              Specializing in Kubernetes, Docker, and CI/CD practices.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-8 pt-8 animate-fade-in-up animation-delay-1500">
              <a
                href="https://github.com/cheshta1710"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-110 hover:rotate-12 border border-blue-400/30 hover:border-blue-400 glow-border"
                data-cursor-hover
              >
                <Github size={28} className="group-hover:animate-bounce" />
              </a>
              <a
                href="https://www.linkedin.com/in/cheshta-agarwal-7a8592292"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-110 hover:rotate-12 border border-blue-400/30 hover:border-blue-400 glow-border"
                data-cursor-hover
              >
                <Linkedin size={28} className="group-hover:animate-bounce" />
              </a>
              <a
                href="mailto:cheshtaagarwal17@gmail.com"
                className="social-icon group p-4 bg-slate-800/50 backdrop-blur-sm rounded-full text-white hover:text-blue-400 hover:bg-slate-700/50 transition-all duration-500 transform hover:scale-110 hover:rotate-12 border border-blue-400/30 hover:border-blue-400 glow-border"
                data-cursor-hover
              >
                <Mail size={28} className="group-hover:animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;