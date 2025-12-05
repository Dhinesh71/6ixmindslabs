import { Suspense, lazy } from 'react';
import { useReducedMotion } from 'framer-motion';

const SplineLazy = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  sceneUrl: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function SplineScene({ sceneUrl, className = '', fallback }: SplineSceneProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {fallback || (
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
            <p className="text-gray-600 text-sm">3D scene disabled (reduced motion)</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={`flex items-center justify-center ${className}`}>
          {fallback || (
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl animate-pulse" />
          )}
        </div>
      }
    >
      <SplineLazy scene={sceneUrl} className={className} />
    </Suspense>
  );
}
