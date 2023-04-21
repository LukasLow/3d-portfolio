uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
const float PI = 3.141592653589793238;
attribute vec3 pos;
attribute vec2 uv;

void main() {
  vUv = uv;
  vec3 finalpos = pos + position * 0.1;
  vec4 view_pos = viewMatrix*vec4(pos,1.);
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(finalpos, 1.0);
}