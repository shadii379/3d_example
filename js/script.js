import * as THREE from 'three';

// const renderer= new THREE.WebGL1Renderer();
// renderer.setSize(window.innerWidth, window.innerHeight);


const scene= new THREE.Scene();
const camera= new THREE.PerspectiveCamera(
    75,
    window.innerWidth/ window.innerHeight,
    0.1,
    1000
);

//html canvas assigned into render variable to render WEBGL by using canvas "id(#bg)"
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg")});

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z= 5;


renderer.render(scene, camera);