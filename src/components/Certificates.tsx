import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
      credentialUrl: '#',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300',
      credentialUrl: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=300',
      credentialUrl: '#',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      id: 4,
      title: 'Jenkins Certified Engineer',
      issuer: 'CloudBees',
      date: '2023',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=300',
      credentialUrl: '#',
      gradient: 'from-green-400 to-cyan-500'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer">
            Certifications & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group relative bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${cert.gradient} bg-opacity-20 rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                      <Award className="text-cyan-400 group-hover:text-white transition-colors duration-300" size={40} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">{cert.title}</h3>
                  <p className="text-gray-400 text-sm text-center mb-2 group-hover:text-gray-300 transition-colors duration-300">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs text-center mb-6">{cert.date}</p>
                  
                  <div className="flex justify-center">
                    <a
                      href={cert.credentialUrl}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-purple-400 transition-all duration-300 text-sm transform hover:scale-110"
                      data-cursor-hover
                    >
                      <ExternalLink size={16} className="group-hover:animate-bounce" />
                      <span>View Credential</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;