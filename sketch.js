
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bucket;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50,50)
	dustbin = new Dustbin(600,650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  dustbin.display()
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-100})
	}
}

