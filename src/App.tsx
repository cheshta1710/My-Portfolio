import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechBlogs from './components/TechBlogs';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden cursor-none px-8 md:px-16 lg:px-24 xl:px-32 py-10">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <div className="space-y-0">
        <Hero />
        
        {/* Section Separator 1 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-0.5"></div>
        </div>
        
        <About />
        
        {/* Section Separator 2 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-0.5"></div>
        </div>
        
        <Projects />
        <TechBlogs />
        
        {/* Section Separator 3 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-0.5"></div>
        </div>
        
        <Resume />
        
        {/* Section Separator 4 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-0.5"></div>
        </div>
        
        <Contact />
        
        {/* Section Separator 5 */}
        <div className="relative h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-0.5"></div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;