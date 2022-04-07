function createDomElement(className) {
    // step1: create the element --> createElement('h2');
    // step2: add content --> ex. innerHTML
    // step3: append to the dom --> parent.appendChild(elm)

    const board = document.getElementById('board');

    const newElm = document.createElement('div');
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}


function drawDomElement(instance) {
    console.log("the element to paint is... ", instance.domElement)
    console.log("new horizontal position will be... ", instance.positionX)

    //whnever this function is called, the color wil change

    instance.domElement.style.backgroundColor = "red";

    instance.domElement.style.left = instance.positionX + "%";
    instance.domElement.style.bottom = instance.positionY + "%";

}


const game = new Game(createDomElement, drawDomElement);
game.start();


document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      game.movePlayer("right");
      break;
    case "ArrowLeft":
      game.movePlayer("left");
      break;
  }
});