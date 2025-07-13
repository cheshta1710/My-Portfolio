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
    <div className="bg-black min-h-screen text-white overflow-x-hidden cursor-none px-12 md:px-24 lg:px-32">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <div className="space-y-0">
        <Hero />
        
        {/* Section Separator 1 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-px"></div>
        </div>
        
        <About />
        
        {/* Section Separator 2 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px"></div>
        </div>
        
        <Projects />
        
        {/* Section Separator 3 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent h-px"></div>
        </div>
        
        <Resume />
        
        {/* Section Separator 4 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent h-px"></div>
        </div>
        
        <Contact />
        
        {/* Section Separator 5 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent h-px"></div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;