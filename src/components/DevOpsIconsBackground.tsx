import React, { useState, useEffect } from 'react';

const DevOpsIconsBackground: React.FC = () => {
  const [currentIconSet, setCurrentIconSet] = useState(0);

  const iconSets = [
    {
      name: 'Containerization',
      icons: ['🐳', '📦', '🚢', '⚙️'],
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Cloud & Infrastructure',
      icons: ['☁️', '🌐', '🏗️', '🔧'],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'CI/CD & Automation',
      icons: ['🔄', '⚡', '🚀', '🎯'],
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Monitoring & Security',
      icons: ['📊', '🔒', '👁️', '🛡️'],
      gradient: 'from-blue-700 to-blue-900'
    },
    {
      name: 'Development Tools',
      icons: ['💻', '🔨', '📝', '🎨'],
      gradient: 'from-blue-800 to-blue-900'
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
    <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-blue-700/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
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
    </div>
  );
};

export default DevOpsIconsBackground;