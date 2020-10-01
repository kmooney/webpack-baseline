import * as THREE from 'three';

class Snake {
    
    constructor(scene, tail, food) {
        this.velocity = { x: 0, y: 0 };

        // unit cube. absolute unit.
        this.geo = new THREE.BoxGeometry(1, 1, 1);
        this.mat = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geo, this.mat);
        this.mesh.position.x = 0.5;
        this.mesh.position.y = 0.5;
        if (tail) {
            this.mesh.position.x = tail.mesh.position.x;
            this.mesh.position.y = tail.mesh.position.y;
            this.velocity.x = tail.velocity.x;
            this.velocity.y = tail.velocity.y;
        }
        
        scene.add(this.mesh);


        // a snake is a snake of snakes.
        this.tail = tail;

        this.nearFood = function(food) { 
            if (
                Math.abs(food.mesh.position.x - this.mesh.position.x) < 0.1 &&
                Math.abs(food.mesh.position.y - this.mesh.position.y) < 0.1
                ) 
                return true;
            else
                return false;
        }

        this.updateTail = function() {
            if (this.tail) {        
                tail.updateTail();        
                tail.mesh.position.x = this.mesh.position.x;
                tail.mesh.position.y = this.mesh.position.y;
            }
        };

        this.size = function() {
            if (!tail) {
                return 1;
            } else {
                return 1 + tail.size();
            }
        }

        this.update = function () {
            
            this.updateTail();
            
            this.mesh.position.x += this.velocity.x;
            this.mesh.position.y += this.velocity.y;
            if (this.nearFood(food)) {
                food.moveFood();
                return this.eat();
            }
            
            return this;
        };

        this.eat = function() {
            return new Snake(scene, this, food);
        };

     
    }
}

export default Snake;
