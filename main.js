import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.BoxGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: true});
const Box = new THREE.Mesh(geometry, material);

scene.add(Box);

function animate(){
  requestAnimationFrame(animate);

  Box.rotation.x += 0.01;
  Box.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();