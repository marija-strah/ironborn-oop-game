//console.log('hello world');

class Game {

    constructor(create, draw) {
        this.time = 0;
        this.player = null;
        //this.createElement = createElement; - if this, then createElement in constructor
        this.obstacles = [];
        this.create = create;
        this.draw = draw;
    }

    start(){
      // create n draw player
      this.player = new Player();
      this.player.domElement = this.create("player"); //create a dom element with the class "player"
      this.draw(this.player);

      // create n draw an obstacle
      this.obstacle = new Obstacle();
      this.obstacle.domElement = this.create("obstacle");
      this.draw(this.obstacle);

      // move obstacle
      setInterval(() => {

        this.obstacles.forEach((obstacle) => {
            obstacle.moveDown();
            this.draw(obstacle);
        });

        //this.draw();


        //console.log("moving obstacles....");
        // - same as the forEach line: this.obstacle.moveDown(); >> move down
        // this.draw(this.obstacle);  /// >> draw

        if (this.time % 30 === 0) {
            // create new obstacles
            console.log("create new obstacle....");

            const newObstacle = new Obstacle();
            newObstacle.domElement = this.create("obstacle");


            this.obstacles.push(newObstacle);


            //this.draw(this.obstacle);
        
        }

        this.time++;
      }, 50);
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
        this.positionX = 50;     //initial position (value) in horizontal axis
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


class Obstacle {
    constructor() {
        this.positionX = 50;
        this.positionY = 100;
        this.docElement = null;
    }

    moveDown() {
        this.positionY--;
    }
}

// for testing purposes
/*const myPlayer = new Player();

myPlayer.moveLeft();
myPlayer.moveLeft();
myPlayer.moveRight();
myPlayer.moveLeft();
myPlayer.moveLeft();*/