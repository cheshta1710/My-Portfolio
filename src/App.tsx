import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden cursor-none px-8 md:px-16 lg:px-24">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <div className="space-y-0">
        <Hero />
        
        {/* Section Separator 1 */}
        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px"></div>
          <div className="relative z-10 bg-black px-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl animate-rotate-slow">
              CA
            </div>
          </div>
        </div>
        
        <About />
        
        {/* Section Separator 2 */}
        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px"></div>
          <div className="relative z-10 bg-black px-8">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="text-2xl">⚙️</div>
            </div>
          </div>
        </div>
        
        <Projects />
        
        {/* Section Separator 3 */}
        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent h-px"></div>
          <div className="relative z-10 bg-black px-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <div className="text-2xl">📁</div>
            </div>
          </div>
        </div>
        
        <Resume />
        
        {/* Section Separator 4 */}
        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent h-px"></div>
          <div className="relative z-10 bg-black px-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
              <div className="text-2xl">📄</div>
            </div>
          </div>
        </div>
        
        <Contact />
        
        {/* Section Separator 5 */}
        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent h-px"></div>
          <div className="relative z-10 bg-black px-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full flex items-center justify-center">
              <div className="text-2xl">💬</div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;