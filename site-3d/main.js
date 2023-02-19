import './style.css'
import * as Three from 'three';


const scene = new THREE.scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight, 01, 1000);

const renderer = new THREE.WebGLRenderList({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,innerHeight);
camera.position.setZ(30);