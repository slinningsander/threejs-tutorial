import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Time
let time = Date.now();

// Clock
const clock = new THREE.Clock();

// GSAP
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });

// Animate

const loop = () => {
  // Time
  /* const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime; */

  // Update objects with time
  /* mesh.rotation.x += 0.001 * deltaTime;
  mesh.rotation.y += 0.002 * deltaTime; */

  // Elapsed time
  // const elapsed = clock.getElapsedTime();

  //Update object with Clock()
  // Multiply by 2 PI to get 1 rotation per second
  // mesh.rotation.x = elapsed * 2 * Math.PI;
  // mesh.rotation.y = elapsed;
  // mesh.position.y = Math.sin(elapsed);
  // mesh.position.x = Math.cos(elapsed);

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
};
//renderer.render(scene.camera);

loop();
