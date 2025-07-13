import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Kubernetes Cluster Management',
      description: 'Designed and implemented a multi-node Kubernetes cluster with automated deployment pipelines using Jenkins and Docker.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Kubernetes', 'Docker', 'Jenkins', 'YAML'],
      github: '#',
      demo: '#',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'CI/CD Pipeline with Flask',
      description: 'Implemented a complete CI/CD pipeline using Docker, Jenkins, and Flask. Features automated testing, containerization, and deployment with Python Flask application.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Docker', 'Jenkins', 'Python', 'Flask', 'Linux'],
      github: 'https://github.com/cheshta1710/cicd.git',
      demo: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Infrastructure as Code',
      description: 'Developed reusable infrastructure templates using Terraform and Ansible for cloud resource management.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Linux'],
      github: '#',
      demo: '#',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      id: 4,
      title: 'Container Orchestration',
      description: 'Orchestrated microservices architecture using Docker Swarm and Kubernetes for scalable application deployment.',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['Docker', 'Kubernetes', 'Microservices', 'Monitoring'],
      github: '#',
      demo: '#',
      gradient: 'from-green-400 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'}}>
            FEATURED PROJECTS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-transparent transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-fade-in-up"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Animated border gradient - only on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[2px]`}>
                  <div className="w-full h-full bg-black/90 rounded-2xl"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-sm bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-cyan-500/30 text-cyan-300 px-3 py-1 rounded-full hover:border-cyan-500/60 hover:scale-105 transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-6">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                      data-cursor-hover
                    >
                      <Github size={20} className="group-hover:animate-spin" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                      data-cursor-hover
                    >
                      <ExternalLink size={20} className="group-hover:animate-bounce" />
                      <span>Demo</span>
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