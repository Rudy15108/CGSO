var gameState=GOOD;
var GOOD;
var car;
var wall;
var speed,weight;

function setup(){
createCanvas(800,800)
car=createSprite(30,100,20,20)
wall=createSprite(770,100,10,80)
}

function draw(){
  background(193,231,255)
  for(var i=200;i<800;i=i+200){
    part=createSprite(400,i,800,4)
    part.shapeColor=(rgb(6,28,21))
  }
if(gameState===GOOD){
speed=random(55,90)
weight=random(400,1500)
car.velocityX=speed;
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500
  if(deformation>180){
    car.shapeColor=color(255,0,0)
  }
  if(deformation<180 && deformation>100){
    car.shapecolor=color(230,230,0);
  }
  if(deformation<100){
    car.shapecolor=color(0,255,0)
  }
  wall.destroy();
}
}
  drawSprites();
}
