var plane;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var block1_options = {
	restitution : 0.5,
	friction: 0.02,
	frictionAir: 0 
}

var block2_options = {
	restitution : 0.5,
	friction: 0.02,
	frictionAir: 0 
}

var block3_options = {
	restitution : 0.01,
	friction: 1,
	frictionAir: 0.5
}

var planeOptions = {
	isStatic: true
}

plane = Bodies.rectangle(400, 700, 800, 20, planeOptions)
World.add(world,plane);

block1 = Bodies.circle(220,10,30,block1_options)
World.add(world,block1);

block2 = Bodies.rectangle(110,50,60,60,block2_options)
World.add(world,block2);

block3 = Bodies.rectangle(350,50, 60,60,block3_options)
World.add(world,block3);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ellipse(block1.position.x, block1.position.y, 30);
  rect(block2.position.x, block2.position.y, 60, 60);
  rect(block3.position.x, block3.position.y, 60,60);
  rect(plane.position.x, plane.position.y, 800, 20);
  drawSprites();
 
}



