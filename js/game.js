//console.log('hello world');

class Game {

    constructor(create, draw) {
        this.time = 0;
        this.player = null;
        //this.createElement = createElement; - if this, then createElement in constructor
        this.obstacles = [];    //array of instances of the class Obstacle
        this.create = create;
        this.draw = draw;
    }

    start(){

        // create & draw player
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);

        setInterval( () => {
            
            // move obstacles
            this.obstacles.forEach( (obstacle) => {
                obstacle.moveDown();
                this.draw(obstacle);
                this.detectCollision(obstacle);
                this.detectObstacleOutside(obstacle);
            });

            // create & draw an obstacles
            if(this.time % 20 === 0){
                const newObstacle = new Obstacle();
                newObstacle.domElement = this.create("obstacle");
                this.obstacles.push(newObstacle);
            }

            this.time++;

        }, 50);        
    }

    // clg obstacle - insntace of a class

        // rect1 -> player
        // rect2 -> obstacle

        detectCollision(obstacle){
            if (this.player.positionX < obstacle.positionX + obstacle.width &&
                this.player.positionX + this.player.width > obstacle.positionX &&
                this.player.positionY < obstacle.positionY + obstacle.height &&
                this.player.height + this.player.positionY > obstacle.positionY) {
                    console.log("game over")
                    alert('game over')
            }
        }

        detectObstacleOutside(obstacle) {
            if(obstacle.positionY < 0) {
                this.obstacles.shift();      //remove it from array
                obstacle.domElement.remove();   // remove from DOM

                console.log(obstacle);
                //console.log("remove this obstacle");
            }
        }

        movePlayer(direction){
            if(direction === "left"){
                this.player.moveLeft();
            } else if (direction === "right"){
                this.player.moveRight();
            }
            this.draw(this.player);
        }
}

class Player {
    constructor() {
        this.positionX = 45;     //initial position (value) in horizontal axis
        this.positionY = 0;
        this.width = 10;
        this.height = 10;
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
        this.positionX = Math.random() * (90 - 0);
        this.positionY = 90;
        this.width = 10;
        this.height = 10;
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