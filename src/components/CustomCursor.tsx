import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Create sparkles when mouse moves
      const newSparkle = {
        id: Date.now(),
        x: e.clientX + (Math.random() - 0.5) * 20,
        y: e.clientY + (Math.random() - 0.5) * 20,
        opacity: 1
      };
      
      setSparkles(prev => [...prev.slice(-5), newSparkle]);
      
      // Remove sparkles after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
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
      {/* Main circular cursor */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-60'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
      
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="fixed w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-40 animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            opacity: sparkle.opacity,
            animation: 'sparkle-fade 1s ease-out forwards'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;