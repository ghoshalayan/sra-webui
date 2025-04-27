'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, MeshTransmissionMaterial, Float } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

// Simple lotus component
function Lotus({ position = [0, 0, 0], scale = 1 }) {
  const { scene } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Create a simple lotus shape with geometry primitives
  useEffect(() => {
    if (groupRef.current) {
      // Clear any previous children
      while (groupRef.current.children.length > 0) {
        groupRef.current.remove(groupRef.current.children[0]);
      }
      
      // Create petals
      const petalCount = 12;
      const innerPetalCount = 8;
      
      // Outer petals
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const radius = 1.2;
        
        const petalGeometry = new THREE.ConeGeometry(0.5, 2, 5);
        const petalMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(isDark ? 0xff9500 : 0xffa500),
          roughness: 0.3,
          metalness: 0.1,
          emissive: new THREE.Color(isDark ? 0x662200 : 0xff6a00),
          emissiveIntensity: 0.2,
        });
        
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(
          Math.cos(angle) * radius,
          0.3,
          Math.sin(angle) * radius
        );
        petal.rotation.x = Math.PI / 2.5;
        petal.rotation.z = angle;
        petal.rotation.y = -angle;
        petal.scale.set(0.5, 0.5, 0.1);
        
        groupRef.current.add(petal);
      }
      
      // Inner petals
      for (let i = 0; i < innerPetalCount; i++) {
        const angle = (i / innerPetalCount) * Math.PI * 2 + Math.PI / innerPetalCount;
        const radius = 0.8;
        
        const petalGeometry = new THREE.ConeGeometry(0.4, 1.5, 5);
        const petalMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(isDark ? 0xffb144 : 0xffb144),
          roughness: 0.2,
          metalness: 0.2,
          emissive: new THREE.Color(isDark ? 0x662200 : 0xff8c44),
          emissiveIntensity: 0.3,
        });
        
        const petal = new THREE.Mesh(petalGeometry, petalMaterial);
        petal.position.set(
          Math.cos(angle) * radius,
          0.6,
          Math.sin(angle) * radius
        );
        petal.rotation.x = Math.PI / 2;
        petal.rotation.z = angle;
        petal.rotation.y = -angle;
        petal.scale.set(0.4, 0.4, 0.08);
        
        groupRef.current.add(petal);
      }
      
      // Center
      const centerGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const centerMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(isDark ? 0xffcc44 : 0xffcc44),
        roughness: 0.1,
        metalness: 0.3,
        emissive: new THREE.Color(isDark ? 0x884400 : 0xffcc00),
        emissiveIntensity: 0.4,
      });
      
      const center = new THREE.Mesh(centerGeometry, centerMaterial);
      center.position.set(0, 0.8, 0);
      center.scale.set(1, 0.5, 1);
      groupRef.current.add(center);
      
      // Add a leaf
      const leafGeometry = new THREE.PlaneGeometry(2, 1);
      const leafMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x44aa44),
        roughness: 0.7,
        metalness: 0.1,
        side: THREE.DoubleSide,
      });
      
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf.position.set(-1.2, -0.5, -1.2);
      leaf.rotation.x = -Math.PI / 3;
      leaf.rotation.z = -Math.PI / 6;
      groupRef.current.add(leaf);
      
      // Scale the entire group
      groupRef.current.scale.set(scale, scale, scale);
      groupRef.current.position.set(position[0], position[1], position[2]);
    }
  }, [scene, position, scale, isDark]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });
  
  return <group ref={groupRef} />;
}

interface ThreeSceneProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  rotationSpeed?: number;
}

export function ThreeScene({ 
  size = 'md', 
  className = '', 
  rotationSpeed = 0.3
}: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isInView, setIsInView] = useState(false);
  
  // Set dimensions based on size
  const dimensions = {
    sm: { height: '100px', width: '100px' },
    md: { height: '150px', width: '150px' },
    lg: { height: '200px', width: '200px' },
  };
  
  // Check if element is in viewport for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-full ${className}`}
      style={dimensions[size]}
    >
      {isInView && (
        <Canvas
          shadows
          camera={{ position: [0, 2, 5], fov: 40 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <Float 
            speed={1.5} 
            rotationIntensity={0.2} 
            floatIntensity={0.8}
          >
            <Lotus position={[0, 0, 0]} scale={0.8} />
          </Float>
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={rotationSpeed}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      )}
    </div>
  );
}