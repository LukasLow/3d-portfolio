import * as THREE from 'three';
import { fragmentShader as fragment } from "./shader/fragmentShader.js";
import { vertexShader as vertex } from "./shader/vertexShader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import GUI from "lil-gui";
// import gsap from "gsap";
import particleTexture from './shader/particle.webp';

function lerp(a,b,t){
  return a*(1-t)+b;
}

export default class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 1); 
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    // var frustumSize = 10;
    // var aspect = window.innerWidth / window.innerHeight;
    // this.camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000 );
    this.camera.position.set(0, 2, 2);
    this.camerapos();
    this.time = 0;

    this.isPlaying = true;
    
    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
    // this.settings();
  }

  camerapos() {
    this.nowcamerapos = () => {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    };
    
    this.nowcamerapos();
      }

  settings() {
    let that = this;
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, "progress", 0, 1, 0.01);
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    let that = this;
    let count = 10000;
    let min_radius = 0.5;
    let max_radius = 2;
    let particlegeo = new THREE.PlaneGeometry(1,1);
    let geo = new THREE.InstancedBufferGeometry();
    geo.instanceCount = count;
    geo.setAttribute('position', particlegeo.getAttribute('position'));
    geo.index = particlegeo.index;

    let pos = new Float32Array(count*3);

    for (let i = 0; i < count; i++) {
      let theta = Math.random()*2*Math.PI;
      let r = lerp(min_radius,max_radius,Math.random())
      let x = r*Math.sin(theta);
      let y = (Math.random()-0.5)*0.05;
      let z = r*Math.cos(theta);
      
      
      pos.set([
        x,y,z
      ], i*3);
    }

    geo.setAttribute('pos', new THREE.InstancedBufferAttribute(pos,3,false));





    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        uTexture: { value: new THREE.TextureLoader().load(particleTexture) },
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      transparent: true,
      depthTest: false,
      vertexShader: vertex,
      fragmentShader: fragment
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.points = new THREE.Mesh(geo, this.material);
    this.scene.add(this.points );
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}

new Sketch({
  dom: document.getElementById("container")
});
