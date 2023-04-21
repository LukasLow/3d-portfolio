const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 150;

const stars = 10000;
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.ShaderMaterial({
    uniforms: {
        pointTexture: { value: new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/disc.png") }
    },
    vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        uniform sampler2D pointTexture;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
        }
    `,
    vertexColors: true,
    alphaTest: 0.9
});

const positions = new Float32Array(stars * 3);
const colors = new Float32Array(stars * 3);
const sizes = new Float32Array(stars);
const spiralArms = 4;
const spiralSpread = 0.2;

for (let i = 0; i < stars; i++) {
    const radialDistance = Math.random() * 80;
    const angle = Math.random() * Math.PI * 2 * spiralArms;
    const spreadFactor = Math.random() * spiralSpread - spiralSpread / 2;
    const x = (radialDistance * Math.exp(spreadFactor) * Math.cos(angle));
    const y = (Math.random() - 0.5) * 20;
    const z = (radialDistance * Math.exp(spreadFactor) * Math.sin(angle));

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    colors[i * 3] = 1;
    colors[i * 3 + 1] = 1;
    colors[i * 3 + 2] = 1;

    sizes[i] = 0.1;
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  uniforms: {
    pointTexture: { value: new THREE.TextureLoader().load("https://threejs.org/examples/textures/sprites/disc.png") }
  },
  vertexShader: `
    attribute float size;
    varying vec3 vColor;
    void main() {
      vColor = color;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform sampler2D pointTexture;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, 1.0) * texture2D(pointTexture, gl_PointCoord);
    }
  `,
  vertexColors: true,
  alphaTest: 0.9
});

const starField = new THREE.Points(starGeometry, starMaterial);
scene.add(starField);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
