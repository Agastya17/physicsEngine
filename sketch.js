const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    restitution: 1
  }

  ground = Bodies.rectangle(200, 390, 400, 50, ground_options); //Matter.Bodies.rectangle()
  World.add(world, ground);

  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world,ball);

  console.log(ball);
  //ground.position.x
  //ground.velocity.x
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}

/*
PHYSICS ENGINE - libraries that follow the laws of physics
-box2d
-matter

-MATTER library

Engine -- like the universe - Matter.Engine
World -- situation - Matter.World
Bodies -- objects - Matter.Bodies

NameSpacing -- giving a nickname

Methods - functions
Attributes - Properties

ellipse
*/