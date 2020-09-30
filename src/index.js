import _, { initial } from "lodash";
import "./style.css";
import Logo from './hammer-sickle.svg';
import * as THREE from "three";
import Snake from './models/snake.js';
import Food from './models/food.js';

var camera, scene, renderer;
var mySnake;
var t = 0 ;

init();
update(); 

function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.01, 100);
    camera.position.z = 20;

    scene = new THREE.Scene();    

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    mySnake = new Snake(scene);


    document.body.appendChild(renderer.domElement);
}

function update() {
    // i am my own callback. cute
    requestAnimationFrame(update);
    t += 1;
    if (t % 12 == 0) {
        mySnake.update();
    }
    renderer.render(scene,camera);
}