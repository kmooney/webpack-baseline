import _, { initial } from "lodash";
import "./style.css";
import Logo from './hammer-sickle.svg';
import * as THREE from "three";



var camera, scene, renderer;
var geometry, material, meshes;
var light;
var count = 0;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new THREE.Scene();    
    material = new THREE.MeshNormalMaterial();
    meshes = []
    for (var i = 0; i < 9; i++) {
        var geo = new THREE.BoxGeometry(0.2, 0.2,0.2);        
        var m = new THREE.Mesh(geo, material);
        var k = Math.floor(i % 3.0) - 1;
        var j = Math.floor(i / 3.0) - 1;

        console.log(k, j); 
        m.position.x = k * 0.35;
        m.position.y = 0.35 * j;
        meshes.push(m)
        scene.add(m);    
    }
    
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    count += 1;
    requestAnimationFrame(animate);
    for (var i = 0; i < 9; i++) {        
            meshes[i].rotation.x += 0.01 * (4-i);
            meshes[i].rotation.y += 0.015 * (4-i);
            
    }
    meshes.forEach(mesh => {
        
    });    
    renderer.render(scene,camera);
}