import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  autoRotate?: boolean;
}

export function Scene3D({
  children,
  className = '',
  enableControls = false,
  cameraPosition = [0, 0, 5],
  autoRotate = true,
}: Scene3DProps) {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (canvasRef.current) {
      const gl = (canvasRef.current as any).__three?.gl;
      if (gl) {
        if (!inView) {
          gl.setAnimationLoop(null);
        }
      }
    }
  }, [inView]);

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-2xl ${className}`}
      >
        <div className="text-gray-500 text-sm">3D content</div>
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {inView && (
        <Canvas
          ref={canvasRef}
          dpr={[1, Math.min(window.devicePixelRatio, 2)]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF5CA3" />
          <Suspense fallback={null}>{children}</Suspense>
          {enableControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={autoRotate}
              autoRotateSpeed={2}
            />
          )}
        </Canvas>
      )}
    </div>
  );
}
