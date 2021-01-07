const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ball;

function setup() {
 
 
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world= engine.world;
 var object_op={
     
  isStatic :true

 }
object= Bodies.rectangle(400,370,70,70,object_op);
World.add(world,object);
var ball_op={
  restitution:2.0
}
ball=Bodies.circle(400,300,5,ball_op);
World.add(world,ball);

console.log(object);
console.log(object.position.x);
console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);
  ellipseMode(RADIUS);

ellipse(ball.position.x,ball.position.y,20,20);

  //drawSprites();
}