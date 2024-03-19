console.log(`Hei, my name is main.js . I've loaded`);

const image1 = new Image();
image1.src = "images/piglet1.jpg";
const image2 = new Image();
image2.src = "images/piglet2.jpg";
const image3 = new Image();
image3.src = "images/piglet3.jpg"

let game = new Game(10);
game.addPlayer(new Player(`Lucian`, image1));
game.addPlayer(new Player(`opponent1`,image2));
game.addPlayer(new Player(`opponent2`, image3));

game.newRound();
game.playGame();
game.showResults();