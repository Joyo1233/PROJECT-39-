var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1_img,car2_img,car3_img,car4_img,ground_img,track_img
var cars, car1, car2, car3, car4;
function preload() {
  car1_img=loadImage("images/car1.png")
  car2_img=loadImage("images/car2.png")
  car3_img=loadImage("images/blue_truck.png")
  car4_img=loadImage("images/black_car.png")
  track_img=loadImage("images/track.jpg")
  ground_img=loadImage("images/ground.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState===2) {
    game.end()
  }
}
