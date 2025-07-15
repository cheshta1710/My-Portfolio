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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] text-center" style={{WebkitTextStroke: '2px #3b82f6', fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 24px #3b82f6, 0 0 48px #60a5fa'}}>DOWNLOAD RESUME</h2>
          
          <p className="text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-base md:text-lg animate-fade-in-up animation-delay-500" style={{fontFamily: 'Candara, sans-serif'}}>
            Get a comprehensive overview of my experience, skills, and achievements in DevOps engineering and containerization.
          </p>
          
          <div className="flex justify-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={downloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-6 px-12 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center space-x-4 text-lg">
                <FileText size={24} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
                <Download size={24} className="group-hover:animate-bounce animation-delay-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;