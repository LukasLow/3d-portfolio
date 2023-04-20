import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Galaxy = () => {
  const starCount = 10000;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    const radius = Math.random() * 1000;
    const spinAngle = radius * Math.PI;
    const height = (Math.random() - 0.5) * 200;

    const spiralArmFactor = Math.random() > 0.5 ? 1 : -1;

    starPositions[i3] = Math.cos(spinAngle) * radius + Math.random() * 50 * spiralArmFactor;
    starPositions[i3 + 1] = height;
    starPositions[i3 + 2] = Math.sin(spinAngle) * radius + Math.random() * 50 * spiralArmFactor;

    const color = new THREE.Color();
    const temperature = 4000 + Math.random() * 10000;
    color.set(temperature, true);
    color.toArray(starColors, i3);
  }

  starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
  starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

  const starMaterial = new THREE.PointsMaterial({
    size: 0.7,
    sizeAttenuation: true,
    vertexColors: true,
  });

  const galaxy = new THREE.Points(starGeometry, starMaterial);
  const galaxyRef = useRef(galaxy);

  useFrame(() => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += 0.001;
    }
  });

  return <primitive object={galaxyRef.current} />;
};

export default Galaxy;
