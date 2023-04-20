import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Galaxy from "./Galaxy";

const GalaxyCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1800], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[1000, 1000, 1000]} intensity={2} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Galaxy />
      </Suspense>
    </Canvas>
  );
};

export default GalaxyCanvas;
