"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

function DataBar({
  position,
  height,
  delay,
  color,
}: {
  position: [number, number, number];
  height: number;
  delay: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const time = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      time.current += 0.02;
      const animatedHeight = height + Math.sin(time.current + delay) * 0.3;
      meshRef.current.scale.y = animatedHeight;
      meshRef.current.position.y = animatedHeight / 2;

      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[position[0], height / 2, position[2]]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={hovered ? 0.8 : 0.4}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

function DataNode({
  position,
  color,
  size = 0.4,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      const scale = hovered ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1 : 0.5}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function ChartPanel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  const bars = useMemo(() => {
    const results = [];
    const colors = ["#4ade80", "#60a5fa", "#f472b6", "#facc15", "#c084fc"];
    for (let i = 0; i < 5; i++) {
      results.push({
        x: (i - 2) * 0.7,
        height: 0.5 + Math.random() * 1.5,
        delay: i * 0.5,
        color: colors[i],
      });
    }
    return results;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 3, 0.1]} />
          <meshStandardMaterial
            color="#1a1a2e"
            emissive="#1a1a2e"
            emissiveIntensity={0.2}
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[3.8, 2.8, 0.05]} />
          <meshStandardMaterial color="#0a0a15" transparent opacity={0.9} />
        </mesh>
        {bars.map((bar, i) => (
          <DataBar
            key={i}
            position={[bar.x, -1, 0.2]}
            height={bar.height}
            delay={bar.delay}
            color={bar.color}
          />
        ))}
        <mesh position={[-1.7, 0, 0.15]}>
          <boxGeometry args={[0.05, 2.5, 0.02]} />
          <meshStandardMaterial color="#4a4a6a" />
        </mesh>
        <mesh position={[-1.7, -1.3, 0.15]}>
          <boxGeometry args={[3.5, 0.05, 0.02]} />
          <meshStandardMaterial color="#4a4a6a" />
        </mesh>
      </group>
    </Float>
  );
}

function DataFlowParticles() {
  const count = 50;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 3 + Math.random() * 4;
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          (Math.random() - 0.5) * 4,
          radius * Math.sin(phi) * Math.sin(theta),
        ],
        speed: 0.5 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed + particle.offset;
      const x = particle.position[0] + Math.sin(t) * 0.5;
      const y = particle.position[1] + Math.cos(t * 1.3) * 0.3;
      const z = particle.position[2] + Math.sin(t * 0.7) * 0.5;

      dummy.position.set(x, y, z);
      const scale = 0.03 + Math.sin(t * 2) * 0.015;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function GlowingOrb({
  position,
  color,
  size = 1,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>
      <pointLight position={position} color={color} intensity={1.5} distance={5} />
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.15,
        0.05
      );
    }
  });

  const nodePositions: [number, number, number][] = [
    [3, 1, 0],
    [-3, -0.5, 1],
    [2, -1.5, -1],
    [-2, 1, -2],
  ];

  const nodeColors = ["#60a5fa", "#4ade80", "#f472b6", "#c084fc"];

  const lines = useMemo(() => [
    { start: nodePositions[0], end: nodePositions[1] },
    { start: nodePositions[1], end: nodePositions[2] },
    { start: nodePositions[2], end: nodePositions[3] },
    { start: nodePositions[3], end: nodePositions[0] },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />

      <group ref={groupRef}>
        <ChartPanel position={[0, 0, 0]} />

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <group position={[-4, 1.5, 1]} rotation={[0.1, 0.3, 0]}>
            <mesh>
              <boxGeometry args={[2.5, 2, 0.08]} />
              <meshStandardMaterial
                color="#1a1a2e"
                emissive="#1a1a2e"
                emissiveIntensity={0.2}
                metalness={0.5}
                roughness={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
            <mesh position={[0, 0, 0.05]}>
              <circleGeometry args={[0.8, 16]} />
              <meshStandardMaterial
                color="#60a5fa"
                emissive="#60a5fa"
                emissiveIntensity={0.3}
                transparent
                opacity={0.4}
              />
            </mesh>
          </group>
        </Float>

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
          <group position={[4, -1, 0.5]} rotation={[0, -0.2, 0.1]}>
            <mesh>
              <boxGeometry args={[2, 1.5, 0.08]} />
              <meshStandardMaterial
                color="#1a1a2e"
                emissive="#1a1a2e"
                emissiveIntensity={0.2}
                metalness={0.5}
                roughness={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[-0.7 + i * 0.35, 0, 0.05]}>
                <boxGeometry args={[0.25, 0.8 + Math.sin(i) * 0.4, 0.02]} />
                <meshStandardMaterial
                  color={i % 2 === 0 ? "#f472b6" : "#c084fc"}
                  emissive={i % 2 === 0 ? "#f472b6" : "#c084fc"}
                  emissiveIntensity={0.4}
                />
              </mesh>
            ))}
          </group>
        </Float>

        {nodePositions.map((pos, i) => (
          <DataNode key={i} position={pos} color={nodeColors[i]} size={0.3} />
        ))}

        {lines.map((line, i) => (
          <Line
            key={i}
            points={[new THREE.Vector3(...line.start), new THREE.Vector3(...line.end)]}
            color={nodeColors[i]}
            lineWidth={2}
            transparent
            opacity={0.5}
          />
        ))}

        <GlowingOrb position={[0, 0, 0]} color="#60a5fa" size={0.5} />
        <GlowingOrb position={[-5, 2, -2]} color="#4ade80" size={0.3} />
        <GlowingOrb position={[5, -2, -1]} color="#f472b6" size={0.35} />

        <DataFlowParticles />
      </group>
    </>
  );
}

export function HeroScene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
