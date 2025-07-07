import React, { useState, useEffect } from 'react';

const DevOpsIconsBackground: React.FC = () => {
  const [currentIconSet, setCurrentIconSet] = useState(0);

  const iconSets = [
    {
      name: 'Containerization',
      icons: ['🐳', '📦', '🚢', '⚙️'],
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Cloud & Infrastructure',
      icons: ['☁️', '🌐', '🏗️', '🔧'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'CI/CD & Automation',
      icons: ['🔄', '⚡', '🚀', '🎯'],
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      name: 'Monitoring & Security',
      icons: ['📊', '🔒', '👁️', '🛡️'],
      gradient: 'from-orange-400 to-red-500'
    },
    {
      name: 'Development Tools',
      icons: ['💻', '🔨', '📝', '🎨'],
      gradient: 'from-indigo-400 to-purple-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconSet((prev) => (prev + 1) % iconSets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [iconSets.length]);

  const currentSet = iconSets[currentIconSet];

  return (
    <div className="relative w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/30 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
      {/* Background gradient animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSet.gradient} opacity-10 transition-all duration-1000`}></div>
      
      {/* Main central icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl animate-bounce-slow transition-all duration-1000">
          {currentSet.icons[0]}
        </div>
      </div>

      {/* Floating corner icons */}
      <div className="absolute top-8 left-8 text-4xl animate-float transition-all duration-1000 opacity-70">
        {currentSet.icons[1]}
      </div>
      <div className="absolute top-8 right-8 text-4xl animate-float animation-delay-1000 transition-all duration-1000 opacity-70">
        {currentSet.icons[2]}
      </div>
      <div className="absolute bottom-8 left-8 text-4xl animate-float animation-delay-2000 transition-all duration-1000 opacity-70">
        {currentSet.icons[3]}
      </div>
      <div className="absolute bottom-8 right-8 text-4xl animate-float animation-delay-3000 transition-all duration-1000 opacity-70">
        {currentSet.icons[0]}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${currentSet.gradient} rounded-full animate-float opacity-40`}
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i * 8)}%`,
              animationDelay: `${i * 500}ms`,
              animationDuration: `${3 + (i * 0.5)}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DevOpsIconsBackground;