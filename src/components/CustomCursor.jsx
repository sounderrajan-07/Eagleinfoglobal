import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const requestRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let targetX = -1000;
    let targetY = -1000;

    const updateCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    let currentX = -1000;
    let currentY = -1000;

    const animate = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      setPosition({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', updateCursor);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', () => setIsVisible(true));
      cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible, isDesktop]);

  if (!isDesktop) return null;

  return (
    <div 
      className={`glow-cursor ${isVisible ? 'visible' : ''}`}
      style={{ transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)` }}
    ></div>
  );
};

export default CustomCursor;
