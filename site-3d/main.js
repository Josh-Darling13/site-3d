import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0x9f0033);
pointLight.position.set(50,50,50);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.5, 48, 48);
  const material = new THREE.MeshStandardMaterial({color: 0x99ccff})
  const star = new THREE.Mesh(geometry, material);
  const[x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(300));
  star.position.set(x,y,z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);

const backgrd = new THREE.TextureLoader().load('./img/MARSWINS copy.jpg');
scene.background = backgrd;

const marsText = new THREE.TextureLoader().load('./img/HOME.jpg');
const marsNormieText = new THREE.TextureLoader().load('./img/mars_normal.jpg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(12, 128, 128), //(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map:marsText,
    normalMap:marsNormieText,
  }));

scene.add(mars);

mars.position.z = 30;
mars.position.setX(-10);

function moveCamera(){
 const t = document.body.getBoundingClientRect().top;
mars.rotation.y += 0.01;// 
camera.position.z = t * -0.001;
camera.position.x = t * -0.03;
camera.position.y = t * -0.03;
}

document.body.onscroll = moveCamera;

function animate(){
requestAnimationFrame(animate);
mars.rotation.y += 0.01;
controls.update();
renderer.render(scene,camera);
}

animate();