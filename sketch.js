var bullet;
var wall,thickness;
var speed;
var weight;

function setup() {

  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

}

function draw() {
  background(0,0,0); 
  
  bullet.velocityX = speed;

  if(wall.x - bullet.x <(bullet.width+wall.width)/2){

bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){

wall.shapeColor = color(255,0,0);

}else if(damage<10){

  wall.shapeColor = color(230,230,0);

  }
  }
  drawSprites();
}
