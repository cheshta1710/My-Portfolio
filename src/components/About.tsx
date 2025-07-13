import React, { useState } from 'react';
import DevOpsIconsBackground from './DevOpsIconsBackground';

const About: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const bulletPoints = [
    'Aspiring DevOps Engineer with hands-on experience in containerization, orchestration, and CI/CD pipeline development.',
    'Currently mastering DevOps practices at Linux World, focusing on Docker, Kubernetes, and Jenkins to build scalable and efficient infrastructure solutions.',
    'Passionate about automation and streamlining development workflows.',
    'Seeking opportunities to contribute to innovative projects and help organizations achieve seamless software delivery and operational excellence.'
  ];

  const skillsFlow = [
    { 
      category: 'Containerization', 
      skills: ['Docker', 'Podman', 'Container Images', 'Registry Management'], 
      icon: '📦', 
      color: 'from-blue-400 to-blue-600',
      description: 'Containerization technologies for packaging and deploying applications'
    },
    { 
      category: 'Orchestration', 
      skills: ['Kubernetes', 'Docker Swarm', 'Service Discovery', 'Load Balancing'], 
      icon: '⚙️', 
      color: 'from-blue-500 to-blue-700',
      description: 'Container orchestration and cluster management'
    },
    { 
      category: 'CI/CD', 
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Pipeline Automation'], 
      icon: '🔄', 
      color: 'from-blue-600 to-blue-800',
      description: 'Continuous Integration and Continuous Deployment'
    },
    { 
      category: 'Cloud Platforms', 
      skills: ['AWS', 'Azure', 'GCP', 'Cloud Infrastructure'], 
      icon: '☁️', 
      color: 'from-blue-700 to-blue-900',
      description: 'Cloud computing platforms and services'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" style={{fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'}}>
            ABOUT ME
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Bio Section */}
            <div className="space-y-8 animate-fade-in-up">
              <h3 className="text-3xl font-semibold text-white mb-8 relative" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
                Background
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              </h3>
              <div className="space-y-6">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4 group animate-slide-in-left" style={{animationDelay: `${index * 200}ms`}}>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Candara, sans-serif'}}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Animated DevOps Icons */}
            <div className="flex justify-center items-center animate-fade-in-up animation-delay-500">
              <div className="relative">
                <DevOpsIconsBackground />
              </div>
            </div>
          </div>

          {/* Technical Skills Timeline */}
          <div className="space-y-12">
            <h3 className="text-3xl font-semibold text-white text-center mb-12 relative inline-block px-8 py-4 bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-400/30" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
              Technical Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transform -translate-y-1/2"></div>
              
              {/* Timeline Items */}
              <div className="relative flex justify-between items-center">
                {skillsFlow.map((category, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center animate-fade-in-up cursor-pointer"
                    style={{animationDelay: `${index * 200}ms`}}
                    onMouseEnter={() => setHoveredCategory(category.category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Hover Popup */}
                    {hoveredCategory === category.category && (
                      <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 z-50">
                        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 max-w-xs w-full border border-blue-400/30 shadow-2xl">
                          {/* Header */}
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-lg`}>
                              {category.icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
                                {category.category}
                              </h4>
                              <p className="text-gray-400 text-xs">{category.description}</p>
                            </div>
                          </div>
                          
                          {/* Skills Grid */}
                          <div className="grid grid-cols-2 gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className={`bg-gradient-to-r ${category.color} bg-opacity-10 border border-blue-500/20 rounded-lg px-3 py-2 text-center text-white text-sm hover:text-blue-300 hover:border-blue-500/50 transition-all duration-300`}
                                style={{fontFamily: 'Candara, sans-serif'}}
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                          
                          {/* Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900/95"></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Timeline Node */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                      {category.icon}
                    </div>
                    
                    {/* Category Title */}
                    <h4 className="text-xl font-semibold text-white text-center mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
                      {category.category}
                    </h4>
                    
                    {/* Connection Line */}
                    {index < skillsFlow.length - 1 && (
                      <div className="absolute top-10 left-full w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-x-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;