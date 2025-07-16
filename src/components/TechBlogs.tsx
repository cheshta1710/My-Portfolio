import React from 'react';

const TechBlogs: React.FC = () => (
  <section id="tech-blogs" className="py-20 bg-black relative overflow-hidden">
    {/* Background Animation */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
    </div>
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-white" style={{fontFamily: 'Copperplate Gothic Bold, serif', textShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)'}}>TECH BLOGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-center items-stretch">
        {/* Blog 1 */}
        <div className="flex-1 bg-black/60 border border-blue-500/20 rounded-2xl p-4 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-blue-500/30 transition-all duration-300 animate-fade-in-up mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>Why Big Companies Are Switching to Linux (And Why You Should Care)</h3>
          <a href="https://medium.com/@cheshtaagarwal17/why-big-companies-are-switching-to-linux-and-why-you-should-care-1cff8e9bf291" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-400 transition-all duration-300 group text-sm md:text-base" data-cursor-hover>
            <span>Read on Medium</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        {/* Blog 2 */}
        <div className="flex-1 bg-black/60 border border-blue-500/20 rounded-2xl p-4 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-blue-500/30 transition-all duration-300 animate-fade-in-up animation-delay-200 mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>Behind the Scenes: The Command-Line Magic Powering Your Favorite Linux GUI Programs</h3>
          <a href="https://medium.com/@cheshtaagarwal17/behind-the-scenes-the-command-line-magic-powering-your-favorite-linux-gui-programs-8dd5bc0b1dd7" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-400 transition-all duration-300 group text-sm md:text-base" data-cursor-hover>
            <span>Read on Medium</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        {/* Blog 3 */}
        <div className="flex-1 bg-black/60 border border-blue-500/20 rounded-2xl p-4 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-blue-500/30 transition-all duration-300 animate-fade-in-up animation-delay-400">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>How to Customize Linux Application Icons: Make Your Desktop Truly Yours</h3>
          <a href="https://medium.com/@cheshtaagarwal17/how-to-customize-linux-application-icons-make-your-desktop-truly-yours-9068364688d6" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-400 transition-all duration-300 group text-sm md:text-base" data-cursor-hover>
            <span>Read on Medium</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        {/* Blog 4 */}
        <div className="flex-1 bg-black/60 border border-blue-500/20 rounded-2xl p-4 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-blue-500/30 transition-all duration-300 animate-fade-in-up animation-delay-600">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{fontFamily: 'Copperplate Gothic Bold, serif'}}>Supercharge Your Linux Experience: Advanced Terminal and GUI Enhancements</h3>
          <a href="https://medium.com/@cheshtaagarwal17/supercharge-your-linux-experience-advanced-terminal-and-gui-enhancements-90d7b0bd79aa" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-blue-400 transition-all duration-300 group text-sm md:text-base" data-cursor-hover>
            <span>Read on Medium</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TechBlogs; 