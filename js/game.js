//console.log('hello world');

class Game {

    constructor(create, draw) {
        this.player = null;
        //this.createElement = createElement; - if this, then createElement in constructor
        this.create = create;
        this.draw = draw;
    }

    start(){
        this.player = new Player();
        this.player.domElement = this.create('player'); //create a dom element with the class "player"
        this.draw(this.player);    
    }

    movePlayer(direction) {
        if(direction === "left") {
            this.player.moveLeft()
        } else if (direction === "right") {
            this.player.moveRight();
        }
        this.draw(this.player); // call function that repaints UI
    }
}

class Player {
    constructor() {
        this.positionX = 0;     //initial position (value) in horizontal axis
        this.positionY = 0;
        this.domElement = null;


    }

    moveLeft(){
        this.positionX--;

        //console.log(`moving left... ${this.positionX}`);  // when u click screen and press left it prints in console

        //console.log("moving to the left..." + this.positionX);
    }

    moveRight() {
        this.positionX++;
    }
}


// for testing purposes
/*const myPlayer = new Player();

myPlayer.moveLeft();
myPlayer.moveLeft();
myPlayer.moveRight();
myPlayer.moveLeft();
myPlayer.moveLeft();*/