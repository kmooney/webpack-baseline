import * as THREE from 'three';

class Food {
    constructor(scene) {
        this.geo = new THREE.BoxGeometry(1, 1, 1);
        this.mat = new THREE.MeshLambertMaterial({ color: 'red' });
        this.mesh = new THREE.Mesh(this.geo, this.mat);

        this.moveFood = function () {
            this.mesh.position.x = Math.floor(Math.random() * 15) + 0.5;
            this.mesh.position.y = Math.floor(Math.random() * 15) + 0.5;
        };

        this.moveFood();

        scene.add(this.mesh);
    }
}

export default Food;
