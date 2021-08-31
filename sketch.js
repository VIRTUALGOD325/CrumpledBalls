
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (100, 600, 10);

	ground = new Ground (400, 680, 800, 20);

	leftSide = new DustBin (550, 620, 100, 20);
	bottomSide = new DustBin (610, 660, 20, 100)
	rightSide = new DustBin (670, 620, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottomSide.display();
  rightSide.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15,y: -15})
	}
}

