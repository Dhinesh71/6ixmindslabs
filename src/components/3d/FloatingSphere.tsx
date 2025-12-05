import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';

interface FloatingSphereProps {
  color?: string;
  speed?: number;
  distort?: number;
  radius?: number;
}

export function FloatingSphere({
  color = '#8A3FFC',
  speed = 1,
  distort = 0.4,
  radius = 1,
}: FloatingSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} args={[radius, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}
