export const vertexShader = `
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
const float PI = 3.141592653589793238;
attribute vec3 pos;

void main() {
  vUv = position.xy+ vec2(0.5);
  vec3 finalpos = pos + position * 0.1;
  // vec4 view_pos = viewMatrix*vec4(pos,1.);

  vec3 particle_position = (modelMatrix*vec4(pos,1)).xyz;
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(finalpos, 1.0);


  vec4 view_pos = viewMatrix*vec4(particle_position,1.);

  view_pos.xyz += position*0.05; // scale the particles

  gl_Position = projectionMatrix * view_pos;
}
`;
