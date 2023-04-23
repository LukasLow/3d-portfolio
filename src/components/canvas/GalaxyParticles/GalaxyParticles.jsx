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

    const colorPalette = [
      "#A9DF9C", "#F9E79F", "#F7DC6F", "#F5B7B1", "#D2B4DE",
      "#FF0000", "#8B0000", "#F08080", "#B22222", "#A52A2A",
      "#CD5C5C", "#BC8F8F", "#800000", "#FFE4E1", "#FA8072",
      "#FF6347", "#E9967A", "#FF7F50", "#FF4500", "#FFA07A",
      "#A0522D", "#D2691E", "#8B4513", "#FFF5EE", "#FFDAB9",
      "#F4A460", "#FAF0E6", "#CD853F", "#FFE4C4", "#FF8C00",
      "#FAEBD7", "#D2B48C", "#DEB887", "#FFEBCD", "#FFDEAD",
      "#FFEFD5", "#FFE4B5", "#FDF5E6", "#F5DEB3", "#FFA500",
      "#FFFAF0", "#DAA520", "#B8860B", "#FFF8DC", "#FFD700",
      "#F0E68C", "#FFFACD", "#EEE8AA", "#BDB76B", "#F5F5DC",
      "#FAFAD2", "#FFFFF0", "#FFFFE0", "#FFFF00", "#808000",
      "#9ACD32", "#6B8E23", "#556B2F", "#ADFF2F", "#7FFF00",
      "#7CFC00", "#F0FFF0", "#90EE90", "#98FB98", "#8FBC8F",
      "#32CD32", "#00FF00", "#228B22", "#008000", "#006400",
      "#2E8B57", "#3CB371", "#F5FFFA", "#00FF7F", "#00FA9A",
      "#7FFFD4", "#66CDAA", "#40E0D0", "#20B2AA", "#48D1CC",
      "#F0FFFF", "#E0FFFF", "#AFEEEE", "#00FFFF", "#00FFFF",
      "#2F4F4F", "#008B8B", "#008080", "#00CED1", "#5F9EA0",
      "#B0E0E6", "#00BFFF", "#ADD8E6", "#87CEEB", "#87CEFA",
      "#4682B4", "#F0F8FF", "#1E90FF", "#778899", "#708090",
      "#B0C4DE", "#6495ED", "#4169E1", "#000080", "#191970",
      "#0000CD", "#E6E6FA", "#F8F8FF", "#483D8B", "#27408B",
      "#00008B", "#0000FF", "#1C1C1C", "#696969", "#DCDCDC",
      "#7F7F7F", "#C0C0C0", "#A9A9A9", "#D3D3D3", "#BEBEBE",
      "#F0F0F0", "#EDEDED", "#D6D6D6", "#FFFFFF", "#2F4F4F",
      "#696969", "#708090", "#778899", "#191970", "#4169E1",
      "#6495ED", "#B0C4DE", "#87CEEB", "#87CEFA", "#4682B4",
      "#1E90FF", "#ADD8E6", "#00BFFF", "#5F9EA0", "#00CED1",
      "#008B8B", "#008080", "#00FFFF", "#AFEEEE", "#E0FFFF",
      "#F0FFFF", "#2F4F4F", "#66CDAA", "#7FFFD4", "#00FA9A",
      "#20B2AA", "#00FF7F", "#F5FFFA", "#3CB371", "#48D1CC",
      "#2E8B57", "#F0FFF0", "#7CFC00", "#7FFF00", "#ADFF2F",
      "#98FB98", "#90EE90", "#32CD32", "#008000", "#228B22",
      "#00FF00", "#F5F5DC", "#FFFF00", "#FFFFE0", "#FFFFF0",
      "#FAFAD2", "#BDB76B", "#EEE8AA", "#F0E68C", "#FFD700",
      "#FFF8DC", "#DAA520", "#B8860B", "#FFDEAD", "#FFEBCD",
      "#DEB887", "#D2B48C", "#FAEBD7", "#FF8C00", "#FFE4C4",
      "#A0522D", "#FFA07A", "#FF4500", "#E9967A", "#FF6347",
      "#FFE4E1", "#FA8072", "#CD5C5C", "#BC8F8F", "#800000",
      "#B22222", "#F08080", "#8B0000", "#FF0000", "#D2B4DE",
      "#F5B7B1", "#F7DC6F", "#F9E79F", "#A9DF9C"
    ];
    
    function rgbToHsv(r, g, b) {
      r /= 255, g /= 255, b /= 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, v = max;
      let d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max === min) {
        h = 0; // achromatic
      } else {
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
      return [h, s, v];
    };

    function hsvToRgb(h, s, v) {
      let r, g, b;
      let i = Math.floor(h * 6);
      let f = h * 6 - i;
      let p = v * (1 - s);
      let q = v * (1 - f * s);
      let t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    function rgbToHex(r, g, b) {
      return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    };   

    function generateSimilarColors(baseColorHex, distance) {
      let baseColorRgb = parseInt(baseColorHex.slice(1), 16);
      let r = (baseColorRgb >> 16) & 255;
      let g = (baseColorRgb >> 8) & 255;
      let b = baseColorRgb & 255;
    
      let baseHsv = rgbToHsv(r, g, b);
      let newH = (baseHsv[0] + (Math.random() - 0.5) * (distance / 360)) % 1;
      let newS = Math.min(Math.max(baseHsv[1] + (Math.random() - 0.5) * (distance / 100), 0), 1);
      let newV = Math.min(Math.max(baseHsv[2] + (Math.random() - 0.5) * (distance / 100), 0), 1);
      
      return rgbToHex(...hsvToRgb(newH, newS, newV));
    };

    function randomHexColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    };
    
    

    let baseColorHex = randomHexColor(); // Die Basisfarbe, um ähnliche Farben zu generieren
    let distance = 250; // Der maximale Farbabstand von der Basisfarbe
    
    let similarColors = generateSimilarColors(baseColorHex, distance);
    console.log(similarColors);


    let opts = [
      {
        color: generateSimilarColors(baseColorHex, distance),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: generateSimilarColors(baseColorHex, distance),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: generateSimilarColors(baseColorHex, distance),
        min_radius: random_min_radius,
        max_radius: random_max_radius,
        size: random_size,
        amp: random_amp,
      },
      {
        color: generateSimilarColors(baseColorHex, distance),
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
        // console.log(intersects[0].point);
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
