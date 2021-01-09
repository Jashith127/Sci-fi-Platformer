var hero
var Idle
var dead
var jump
function preload() {
  idle=loadAnimation("Idle/idle0.png","Idle/idle1.png","Idle/idle2.png","Idle/idle3.png",
  "Idle/idle3.png","Idle/idle4.png","Idle/idle5.png","Idle/idle6.png","Idle/idle7.png",
  "Idle/idle8.png","Idle/idle9.png","Idle/idle10.png","Idle/idle11.png")
}
function setup() {
  createCanvas(800,400);
 hero= createSprite(400, 200, 10, 10);
}

function draw() {
  background("white")
  hero.addAnimation("idleAn",idle);
  drawSprites();
}