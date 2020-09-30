import * as THREE from 'three';

const V = 1;
class Snake {
    
    constructor(scene, snake) {
        this.velocity = { x: 0, y: 0 };

        // unit cube. absolute unit.
        this.geo = new THREE.BoxGeometry(1, 1, 1);
        this.mat = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geo, this.mat);
        this.mesh.position.x = 0.5;
        this.mesh.position.y = 0.5;


        // a snake is a snake of snakes.
        this.snake = snake;
        scene.add(this.mesh);

        this.update = function (board) {
            this.mesh.position.x += this.velocity.x;
            this.mesh.position.y += this.velocity.y;

        };

        window.addEventListener("keydown", event => {
            console.log(event.key);
            switch (event.key) {
                case 'w':
                    this.velocity = { x: 0, y: V };
                    break;
                case 's':
                    this.velocity = { x: 0, y: -V };
                    break;
                case 'a':
                    this.velocity = { x: -V, y: 0 };
                    break;
                case 'd':
                    this.velocity = { x: V, y: 0 };
                    break;
            }
        });

        window.addEventListener("keyup", _event => {
            //this.velocity = { x: 0, y: 0 };
        });
    }
}

export default Snake;

