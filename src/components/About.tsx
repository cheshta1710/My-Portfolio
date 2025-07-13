import React from 'react';
import DevOpsIconsBackground from './DevOpsIconsBackground';

const About: React.FC = () => {
  const bulletPoints = [
    'Aspiring DevOps Engineer with hands-on experience in containerization, orchestration, and CI/CD pipeline development.',
    'Currently mastering DevOps practices at Linux World, focusing on Docker, Kubernetes, and Jenkins to build scalable and efficient infrastructure solutions.',
    'Passionate about automation and streamlining development workflows.',
    'Seeking opportunities to contribute to innovative projects and help organizations achieve seamless software delivery and operational excellence.'
  ];

  const skillsFlow = [
    { category: 'Containerization', skills: ['Docker', 'Podman'], icon: '📦', color: 'from-blue-400 to-blue-600' },
    { category: 'Orchestration', skills: ['Kubernetes'], icon: '⚙️', color: 'from-blue-500 to-blue-700' },
    { category: 'CI/CD', skills: ['Jenkins', 'GitLab CI', 'GitHub Actions'], icon: '🔄', color: 'from-blue-600 to-blue-800' },
    { category: 'Cloud Platforms', skills: ['AWS', 'Azure'], icon: '☁️', color: 'from-blue-700 to-blue-900' }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white glow-border p-6 rounded-lg" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
            About Me
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

          {/* Technical Skills Flowchart */}
          <div className="space-y-12">
            <h3 className="text-3xl font-semibold text-white text-center mb-12 relative" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>
              Technical Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillsFlow.map((category, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up glow-border"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {/* Animated background gradient - only border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 rounded-2xl p-[2px] transition-opacity duration-500`}>
                    <div className="w-full h-full bg-slate-900/90 rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl group-hover:animate-bounce">{category.icon}</div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>{category.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`bg-gradient-to-r ${category.color} bg-opacity-10 border border-blue-500/20 rounded-full px-4 py-2 text-sm text-white hover:text-blue-300 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                          style={{fontFamily: 'Candara, sans-serif'}}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;