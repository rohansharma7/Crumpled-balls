const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	paper = new Paper(100,650,50)

	right = new Dustbin(650,650,20,80)
	left = new Dustbin(500,650,20,80)
	bottom = new Dustbin(575,680,170,20)

	//Create the Bodies Here.
  

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  ground.display();

  paper.display();

  right.display();
  left.display();
  bottom.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4.8} )
	   
	 }
   }



