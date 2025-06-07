
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0) scale(0.95)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0) scale(0.95)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0) scale(0.95)`;
      case 'scale':
        return 'translate3d(0, 0, 0) scale(0.8)';
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.95)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
