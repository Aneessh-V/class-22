
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var ball;

var ball_options;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	//Create the Bodies Here.
	ball = Bodies.circle(100,100,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2760,width,20);
	World.add(world,ground);

	leftSide = new Ground(1100,600,20,120)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  ellipse(ball.position.x,ball.position.y,20); 
  
  ball.show;
  ground.show;
  leftSide.show;
  
  Engine.update(engine);

  keyPressed;
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
	}
}


