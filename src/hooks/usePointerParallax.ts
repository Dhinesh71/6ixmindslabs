import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ParallaxOptions {
  maxTiltX?: number;
  maxTiltY?: number;
  scale?: number;
  speed?: number;
}

export function usePointerParallax(options: ParallaxOptions = {}) {
  const {
    maxTiltX = 8,
    maxTiltY = 8,
    scale = 1.02,
    speed = 0.5,
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState('');
  const shouldReduceMotion = useReducedMotion();
  const rafId = useRef<number>();

  useEffect(() => {
    if (shouldReduceMotion || !elementRef.current) return;

    const element = elementRef.current;
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      targetRotateY = deltaX * maxTiltX;
      targetRotateX = -deltaY * maxTiltY;
    };

    const handleMouseLeave = () => {
      targetRotateX = 0;
      targetRotateY = 0;
    };

    const animate = () => {
      currentRotateX += (targetRotateX - currentRotateX) * speed;
      currentRotateY += (targetRotateY - currentRotateY) * speed;

      const newTransform = `perspective(1000px) rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg) scale(${scale})`;
      setTransform(newTransform);

      rafId.current = requestAnimationFrame(animate);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [shouldReduceMotion, maxTiltX, maxTiltY, scale, speed]);

  return { ref: elementRef, transform };
}
