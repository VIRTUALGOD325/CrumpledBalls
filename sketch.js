
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;

var world;

var throwButton;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball=createSprite(width/2, 80, 10,10);

	engine = Engine.create();
	world = engine.world;



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropGround = createSprite(width/1.65, height-80, 20,100);
	dropGround.shapeColor = color("red");
	dropGroundside1 = createSprite(width/2, height-50,150,20);
	dropGroundside1 = color("red");
	dropGround = createSprite(width/2.5, height-80, 20,100);
	dropGround.shapeColor = color("red");

	World.add(world, ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(mousePressedOver(ball)){
	  ball.velocityY = 3;
  }

  drawSprites();
 
}




