import React from "react";
import { BufferGeometry, BufferAttribute, Color, PointsMaterial, Points, Mesh, SphereGeometry, MeshBasicMaterial } from "three";

const Galaxy = () => {
  const starCount = 10000;
  const starGeometry = new BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    const radius = 700 + Math.random() * 300;
    const spinAngle = radius * Math.PI;
    const height = (Math.random() - 0.5) * 200;

    const spiralArmFactor = Math.random() > 0.5 ? 1 : -1;

    starPositions[i3] = Math.cos(spinAngle) * radius + Math.random() * 50 * spiralArmFactor;
    starPositions[i3 + 1] = height;
    starPositions[i3 + 2] = Math.sin(spinAngle) * radius + Math.random() * 50 * spiralArmFactor;

    const color = new Color();
    color.setHSL(Math.random(), 0.7, 0.7);
    color.toArray(starColors, i3);
  }

  starGeometry.setAttribute("position", new BufferAttribute(starPositions, 3));
  starGeometry.setAttribute("color", new BufferAttribute(starColors, 3));

  const starMaterial = new PointsMaterial({
    size: 5,
    sizeAttenuation: true,
    vertexColors: true,
  });

  const galaxy = new Points(starGeometry, starMaterial);

  // Add a core
  const core = new Mesh(
    new SphereGeometry(30, 32, 32),
    new MeshBasicMaterial({ color: 0xffffff })
  );
  galaxy.add(core);

  return <primitive object={galaxy} />;
};

export default Galaxy;
