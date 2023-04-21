import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 150;

const stars = 10000;
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });

const positions = new Float32Array(stars * 3);

for (let i = 0; i < stars; i++) {
  const radialDistance = Math.pow(Math.random(), 0.7) * 80;
  const angle = Math.random() * Math.PI * 2;
  const spiralFactor = 5;
  const armFactor = Math.floor(Math.random() * 2) * Math.PI;
  const x = (radialDistance * Math.cos(angle + armFactor)) + (spiralFactor * radialDistance * Math.sin(angle));
  const y = (Math.random() - 0.5) * 20;
  const z = (radialDistance * Math.sin(angle + armFactor)) - (spiralFactor * radialDistance * Math.cos(angle));

  positions[i * 3] = x;
  positions[i * 3 + 1] = y;
  positions[i * 3 + 2] = z;
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const starField = new THREE.Points(starGeometry, starMaterial);
scene.add(starField);

const blackHole = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshBasicMaterial({ color: 0x000000 }));
scene.add(blackHole);

function animate() {
  requestAnimationFrame(animate);

  starField.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

animate();
