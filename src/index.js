import _, { initial } from "lodash";
import "./style.css";
import Logo from './hammer-sickle.svg';
import * as THREE from "three";
import Snake from './models/snake.js';
import Food from './models/food.js';

var camera, scene, renderer;
var mySnake;
var food;
var t = 0 ;
const V = 1;
init();
update(); 

function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.01, 100);
    camera.position.z = 20;

    scene = new THREE.Scene();    
    for (var i = 0; i < 3; i++) {
    var light = new THREE.PointLight('white', 100, 100, 1);
        light.position.x = Math.random() * 20;
        light.position.y = Math.random() * 20;
        light.position.z = Math.random() * 20;
        scene.add(light);
    }
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    food = new Food(scene);
    mySnake = new Snake(scene, null, food);

    document.body.appendChild(renderer.domElement);
}

function update() {
    // i am my own callback. cute
    requestAnimationFrame(update);
    t += 1;
    // every 200ish ms
    if (t % 15 == 0) {
        mySnake = mySnake.update();
        console.log(mySnake.size());
    }
    renderer.render(scene,camera);
}

window.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key) {
        case 'w':
            mySnake.velocity = { x: 0, y: V };
            break;
        case 's':
            mySnake.velocity = { x: 0, y: -V };
            break;
        case 'a':
            mySnake.velocity = { x: -V, y: 0 };
            break;
        case 'd':
            mySnake.velocity = { x: V, y: 0 };
            break;
    }
});

window.addEventListener("keyup", _event => {
    //this.velocity = { x: 0, y: 0 };
});