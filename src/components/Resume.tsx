import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const downloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,JVBERi0xLjQKJcKlwrHDqwoKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCgoyIDAgb2JqCjw8Ci9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFJdCi9Db3VudCAxCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDIgMCBSCi9SZXNvdXJjZXMgPDwKL0ZvbnQgPDwKL0YxIDQgMCBSCj4+Cj4+Ci9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoKNSAwIG9iago8PAovTGVuZ3RoIDQ0Cj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzIgNzIwIFRkCihDaGVzaHRhIEFnYXJ3YWwgLSBSZXN1bWUpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA2CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMDU4IDAwMDAwIG4gCjAwMDAwMDAxMTUgMDAwMDAgbiAKMDAwMDAwMDI0NSAwMDAwMCBuIAowMDAwMDAwMzIyIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgNgovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDE0CiUlRU9G';
    link.download = 'Cheshta_Agarwal_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer" style={{textShadow: '0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'}}>
            DOWNLOAD RESUME
          </h2>
          
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg animate-fade-in-up animation-delay-500">
            Get a comprehensive overview of my experience, skills, and achievements in DevOps engineering and containerization.
          </p>
          
          <div className="flex justify-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={downloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25"
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center space-x-4 text-lg">
                <FileText size={24} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
                <Download size={24} className="group-hover:animate-bounce animation-delay-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:from-purple-600 group-hover:to-pink-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;