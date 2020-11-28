//this is name spacing 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  var canvas =   createCanvas(400,400);
  engine  = Engine.create();
  world = engine.world ; 
  
  var options = {
    isStatic:true 
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground);

  var ballOptions = {
    restitution:1     
  }
  ball = Bodies.circle(200,200,10,ballOptions)
  World.add(world,ball)
  console.log(ball)
  
}

function draw() {
  background(0);  
  Engine.update(engine)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  
  rectMode(CENTER);
  rect(ground.position.x , ground.position.y,400,20);
  

  
}