"use client";

import { OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { Group, Mesh } from "three";

function CodeVisualization() {
  const group = useRef<Group>(null);
  const centerCube = useRef<Mesh>(null);
  const orbitSphere1 = useRef<Mesh>(null);
  const orbitSphere2 = useRef<Mesh>(null);
  const orbitSphere3 = useRef<Mesh>(null);
  const coreGlow = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    // Main group rotation with mouse control
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.4,
      0.05,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      state.pointer.x * 0.4,
      0.05,
    );

    // Rotating center code block
    if (centerCube.current) {
      centerCube.current.rotation.x += delta * 0.3;
      centerCube.current.rotation.y += delta * 0.4;
      centerCube.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }

    // Core glow pulse
    if (coreGlow.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      coreGlow.current.scale.set(scale, scale, scale);
    }

    // Orbiting spheres (Frontend, Backend, Tools)
    const time = state.clock.elapsedTime;
    const orbitRadius = 3;

    if (orbitSphere1.current) {
      orbitSphere1.current.position.x = Math.cos(time * 0.5) * orbitRadius;
      orbitSphere1.current.position.z = Math.sin(time * 0.5) * orbitRadius;
      orbitSphere1.current.position.y = Math.sin(time * 0.3) * 0.5;
      orbitSphere1.current.rotation.x += delta * 0.5;
    }

    if (orbitSphere2.current) {
      orbitSphere2.current.position.x = Math.cos(time * 0.4 + Math.PI * 0.67) * orbitRadius;
      orbitSphere2.current.position.z = Math.sin(time * 0.4 + Math.PI * 0.67) * orbitRadius;
      orbitSphere2.current.position.y = Math.sin(time * 0.25 + 1) * 0.5;
      orbitSphere2.current.rotation.y += delta * 0.6;
    }

    if (orbitSphere3.current) {
      orbitSphere3.current.position.x = Math.cos(time * 0.6 + Math.PI * 1.33) * orbitRadius;
      orbitSphere3.current.position.z = Math.sin(time * 0.6 + Math.PI * 1.33) * orbitRadius;
      orbitSphere3.current.position.y = Math.sin(time * 0.35 + 2) * 0.5;
      orbitSphere3.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group ref={group}>
      {/* Core Glow - Pulsing sphere behind center cube */}
      <mesh ref={coreGlow} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.15}
          wireframe={false}
        />
      </mesh>

      {/* Center Code Block - Rotating wireframe cube */}
      <mesh ref={centerCube} position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshPhysicalMaterial
          color="#6c63ff"
          emissive="#6c63ff"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
          wireframe={true}
        />
      </mesh>

      {/* Solid center sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhysicalMaterial
          color="#ff4d8d"
          emissive="#ff4d8d"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.15}
        />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh rotation={[Math.PI / 3, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#6c63ff"
          emissive="#6c63ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh rotation={[0, Math.PI / 3, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbit Ring 3 */}
      <mesh rotation={[0, 0, Math.PI / 3]} position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#ff4d8d"
          emissive="#ff4d8d"
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Orbiting Sphere 1 - Frontend */}
      <mesh ref={orbitSphere1} position={[3, 0, 0]}>
        <icosahedronGeometry args={[0.35, 4]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting Sphere 2 - Backend */}
      <mesh ref={orbitSphere2} position={[3, 0, 0]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshPhysicalMaterial
          color="#6c63ff"
          emissive="#6c63ff"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Orbiting Sphere 3 - Tools */}
      <mesh ref={orbitSphere3} position={[3, 0, 0]}>
        <tetrahedronGeometry args={[0.4, 0]} />
        <meshPhysicalMaterial
          color="#ff4d8d"
          emissive="#ff4d8d"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Ambient glow orbs */}
      <mesh position={[-4, 2, -2]} scale={0.6}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshPhysicalMaterial
          color="#6c63ff"
          emissive="#6c63ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.2}
        />
      </mesh>

      <mesh position={[4, -2, -3]} scale={0.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshPhysicalMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Code particles */}
      <Sparkles
        count={80}
        scale={8}
        size={2}
        speed={0.7}
        color="#ffffff"
      />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 9], fov: 40 }}
        className="pointer-events-none"
      >
        <color attach="background" args={["#0b0f19"]} />
        <fog attach="fog" args={["#0b0f19", 8, 20]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[8, 6, 5]} intensity={2.8} color="#6c63ff" />
        <directionalLight position={[-5, -3, 4]} intensity={1.6} color="#00e5ff" />
        <pointLight position={[0, 3, 5]} intensity={3.5} color="#ff4d8d" />
        <pointLight position={[-5, -4, -3]} intensity={1.2} color="#6c63ff" />
        <Stars radius={50} depth={30} count={2000} factor={4} saturation={0} fade speed={0.5} />
        <group position={[0, 0, 0]}>
          <CodeVisualization />
        </group>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
