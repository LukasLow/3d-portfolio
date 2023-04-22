import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, PointsMaterial } from "three";
import * as THREE from "three";

function createSpiralGalaxy(numStars, numArms, armWidth) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < numStars; i++) {
    const armIndex = i % numArms;
    const angle =
      (Math.PI * 2 * i) / numStars + (armIndex * (Math.PI * 2)) / numArms;
    const radius = Math.sqrt(Math.random()) * armWidth + 0.01; // Add a small offset to avoid NaN
    const x = Math.cos(angle) * radius;
    const y = (Math.random() - 0.5) * armWidth;
    const z = Math.sin(angle) * radius;
    positions.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  geometry.computeBoundingSphere(); // Compute the bounding sphere after setting positions
  return geometry;
}

const Galaxy = () => {
  const mesh = useRef();

  const numStars = 10000;
  const numArms = 3;
  const armWidth = 50;

  const galaxyGeometry = createSpiralGalaxy(numStars, numArms, armWidth);
  const galaxyMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.01;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return <points ref={mesh} geometry={galaxyGeometry} material={galaxyMaterial} />;
};

export default Galaxy;
