import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { fragmentShader as fragment } from "./fragmentShader.js";
import { vertexShader as vertex } from "./vertexShader.js";
import particleTexture from './particle.webp';

// ...fügen Sie hier den restlichen Code aus Ihrem Sketch ein, aber entfernen Sie die Zeile "new Sketch({ dom: document.getElementById("container") });"

class Sketch {
  constructor(options) {
    this.scene = new THREE.Scene();

    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x000000, 0); 
    this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.point = new THREE.Vector3();

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
    this.camera.position.set(1, 1.7, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.time = 0;
    this.setupControls()

    this.materials =[]
    
    this.isPlaying = true;
    
    //let randomNumber = Math.random() * (max - min) + min;
    let random_min_radius = Math.random() * (0.4 - 0.3) + 0.3;
    let random_max_radius = Math.random() * (2.0 - 1.4) + 1.4;
    let random_size = Math.random() * (1.3 - 0.8) + 0.8;
    let random_amp = Math.random() * (1.1 - 0.9) + 0.9;
    let baseHue = Math.floor(Math.random() * 360); // Zufälliger Farbton von 0 bis 359

    let getRandomHSLColor = () => {
      let hue = baseHue + Math.floor(Math.random() * 200 - 100); // Zufälliger Farbton im Bereich von +- 50 Grad
      let saturation = Math.floor(Math.random() * 26 + 74); // Zufällige Sättigung im Bereich von 74% bis 100%
      let lightness = Math.floor(Math.random() * 26 + 48); // Zufällige Helligkeit im Bereich von 48% bis 74%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`; // HSL-Farbe als Zeichenfolge zurückgeben
    };


    let opts = [
      {
        color: getRandomHSLColor(),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: getRandomHSLColor(),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: getRandomHSLColor(),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: getRandomHSLColor(),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
    ]

    opts.forEach(op=>{
      this.addObjects(op)
    })
    this.raycasterEvent();
    this.resize();
    this.render();
    this.setupResize();
    // this.settings();
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 10;
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  raycasterEvent() {

    let mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(10,10,10,10).rotateX(-Math.PI/2),
      new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})
    )

    let test = new THREE.Mesh (
      new THREE.SphereGeometry (0.1, 10, 10), 
      new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true})
    )
    // this.scene.add (test)

    // this.scene.add(mesh)

    window.addEventListener("pointermove", (event) => {
      this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
      this.raycaster.setFromCamera(this.pointer, this.camera);
  
      const intersects = this.raycaster.intersectObjects([mesh]);
  
      if (intersects[0]) {
        console.log(intersects[0].point);
        test.position.copy(intersects[0].point);
        this.point.copy*(intersects[0].point);
        this.materials.forEach((material) => {
          material.uniforms.uMouse.value.copy(intersects[0].point);
        });
      }
    });
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

  addObjects(opts) {
    let that = this;
    let count = 10000;
    let min_radius = opts.min_radius;
    let max_radius = opts.max_radius;
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
      let y = (Math.random()-0.5)*0.1;
      let z = r*Math.cos(theta);
      
      
      pos.set([
        x,y,z
      ], i*3);
    }

    geo.setAttribute('pos', new THREE.InstancedBufferAttribute(pos,3,false));





    let material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        uTexture: { value: new THREE.TextureLoader().load(particleTexture) },
        time: { value: 0 },
        uAmp: { value: opts.amp },
        uMouse: { value: new THREE.Vector3() },
        size: { value: opts.size },
        uColor: { value: new THREE.Color(opts.color) },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      transparent: true,
      depthTest: false,
      vertexShader: vertex,
      fragmentShader: fragment
    });
    this.materials.push(material)
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.points = new THREE.Mesh(geo, material);
    this.scene.add(this.points);
  }

  render() {
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.materials.forEach(m=>{
      m.uniforms.time.value = this.time*0.5;
      m.uniforms.uMouse.value = this.point;
    })
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    // Bereinigen von Geometrien
    if (this.geometry) {
      this.geometry.dispose();
    }

    // Bereinigen von Materialien
    if (this.material) {
      this.material.dispose();
    }

    // Bereinigen von Texturen
    if (this.texture) {
      this.texture.dispose();
    }

    // Bereinigen von WebGLRenderer
    if (this.renderer) {
      this.renderer.dispose();
      // Entfernen des DOM-Elements, wenn es in den DOM eingefügt wurde
      if (this.renderer.domElement.parentElement) {
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
      }
    }

    // Entfernen von Event-Listenern (z.B. window resize listener)
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }
}

function lerp(a,b,t){
    return a*(1-t)+b*t;
}

// ... Der Sketch-Klassen-Code bleibt unverändert ...

const GalaxyParticles = () => {
  const containerRef = useRef();
  let sketch;

  useEffect(() => {
    if (containerRef.current) {
      sketch = new Sketch({ dom: containerRef.current });
    }

    //Bereinigungsfunktion für useEffect
    return () => {
      if (sketch) {
        sketch.dispose(); // Implementieren Sie eine `dispose`-Methode in Ihrer Sketch-Klasse, um alle verwendeten Ressourcen zu bereinigen.
      }
    }
    ;
  }, [containerRef]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
  );
};


export default GalaxyParticles;
