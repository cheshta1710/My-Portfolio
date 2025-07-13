import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkles when mouse moves (reduced frequency)
      if (Math.random() < 0.3) { // Only 30% chance to create sparkle
        const newSparkle = {
          id: Date.now(),
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          opacity: 1
        };
        
        setSparkles(prev => [...prev.slice(-3), newSparkle]); // Reduced from 8 to 3
        
        // Remove sparkles after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000); // Reduced from 1500ms to 1000ms
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor update listener
    window.addEventListener('mousemove', updateCursor);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 transition-all duration-300 ease-out glow-border"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-blue-400/50 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-60'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-300 rounded-full pointer-events-none z-40 transition-all duration-200"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
      
      {/* Sparkles - minimized */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed w-1 h-1 bg-gradient-to-r from-blue-400/60 to-white/60 rounded-full pointer-events-none z-40 animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            opacity: sparkle.opacity * 0.4, // Reduced opacity
            animation: 'sparkle-fade 1s ease-out forwards'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;