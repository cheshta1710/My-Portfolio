import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'CI/CD Pipeline with Flask',
      description: 'Implemented a complete CI/CD pipeline using Docker, Jenkins, and Flask. Features automated testing, containerization, and deployment with Python Flask application.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Docker', 'Jenkins', 'Python', 'Flask', 'Linux'],
      github: 'https://github.com/cheshta1710/cicd.git'
    },
    {
      id: 2,
      title: 'Kubernetes Cluster Management',
      description: 'Designed and implemented a multi-node Kubernetes cluster with automated deployment pipelines using Jenkins and Docker.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Kubernetes', 'Docker', 'Jenkins', 'YAML'],
      github: '#'
    },
    {
      id: 3,
      title: 'Infrastructure as Code',
      description: 'Developed reusable infrastructure templates using Terraform and Ansible for cloud resource management.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Linux'],
      github: '#'
    },
    {
      id: 4,
      title: 'Container Orchestration',
      description: 'Orchestrated microservices architecture using Docker Swarm and Kubernetes for scalable application deployment.',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Docker', 'Kubernetes', 'Microservices', 'Monitoring'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]" style={{WebkitTextStroke: '2px #3b82f6', fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 24px #3b82f6, 0 0 48px #60a5fa'}}>PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Animated border gradient - only on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]">
                  <div className="w-full h-full bg-black/90 rounded-2xl"></div>
                </div>
                <div className="relative z-10 p-4 md:p-8">
                  <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold text-white mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>{project.title}</h3>
                  <p className="text-gray-300 mb-4 md:mb-6 group-hover:text-gray-200 transition-colors duration-300 text-sm md:text-base" style={{fontFamily: 'Candara, sans-serif'}}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm bg-gradient-to-r from-blue-400 to-blue-600 bg-opacity-20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full hover:border-blue-500/60 hover:scale-105 transition-all duration-300"
                        style={{fontFamily: 'Candara, sans-serif'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                      data-cursor-hover
                    >
                      <Github size={20} className="group-hover:animate-spin" />
                      <span>View Code</span>
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

export default Projects;