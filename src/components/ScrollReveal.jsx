import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: Component wrapper to animate elements smoothly as they scroll into view.
 * Respects DESIGN.md aesthetic without requiring any clicks from the user.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up' | 'none' | 'left' | 'right'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = ref.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0';
      case 'left':
        return '-translate-x-8 opacity-0';
      case 'right':
        return 'translate-x-8 opacity-0';
      case 'none':
        return 'opacity-0';
      default:
        return 'translate-y-8 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all transform will-change-transform ${getTransformStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
