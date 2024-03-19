class Player {

    constructor (name, image) {
        this.name = name;
        this.image = image;
        this.distance = 0;
    }

    move(){
        const moveDistance = Math.floor(Math.random() * 10);
        this.distance += moveDistance;
        console.log(`${this.name} gains ${moveDistance} points. The current distance: ${this.distance}`);
    }
}