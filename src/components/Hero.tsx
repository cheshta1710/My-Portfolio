import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float-slow animation-delay-4000"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
        
        {/* Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer">
                Cheshta Agarwal
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 animate-expand"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light animate-fade-in-up animation-delay-500">
              DevOps Engineer & Containerization Specialist
            </p>
            
            <p className="text-gray-400 max-w-md leading-relaxed animate-fade-in-up animation-delay-1000">
              Passionate about building scalable infrastructure and automating deployment pipelines. 
              Specializing in Kubernetes, Docker, and CI/CD practices.
            </p>
            
            <div className="flex space-x-6 pt-4 animate-fade-in-up animation-delay-1500">
              <a
                href="https://github.com/cheshta1710"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-400 hover:text-cyan-400 transition-all duration-500 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/cheshta-agarwal-7a8592292"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-gray-400 hover:text-purple-400 transition-all duration-500 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:cheshtaagarwal17@gmail.com"
                className="social-icon text-gray-400 hover:text-pink-400 transition-all duration-500 transform hover:scale-125 hover:rotate-12"
                data-cursor-hover
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-black p-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/chesh.jpg"
                      alt="Cheshta Agarwal"
                      className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              {/* Floating particles around image */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-cyan-400 rounded-full animate-float"></div>
              <div className="absolute -top-2 -right-6 w-2 h-2 bg-purple-500 rounded-full animate-float animation-delay-1000"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-pink-500 rounded-full animate-float animation-delay-2000"></div>
              <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-3000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;