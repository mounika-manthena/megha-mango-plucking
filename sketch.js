const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var ground;
var tree;
var boy, boyImg;
var mango;
var slingShot;

function preload()
{

}

function setup() {
	var canvas = createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy (200,560,175,250);

	
	ground = new Ground(500,645,1000,110);
	tree = new Tree(750,365,500,500);
	
	mango = new Mango(760,300,25);
	mango2 = new Mango(730,250,20);
	mango3 = new Mango(690,320,25);
	mango4 = new Mango(600,300,20);
	mango5 =new Mango(800,150,25);
	mango6 = new Mango(915,270,20);
	mango7 = new Mango(950,350,25);
	mango8 = new Mango(700,200,20);
	mango9 = new Mango(840,280,25);
	mango10 = new Mango(770,210,20);
	mango11 = new Mango(540,330,25);
	mango12 = new Mango(620,230,20);
	mango13 = new Mango(875,240,22.5);

	stone = new Stone(150,500,50,50);

	slingShot = new Slingshot (stone.body, {x: 150, y: 500});

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(184,226,242);
  Engine.update(engine);
  
 
  ground.display();
  tree.display();
  boy.display();
  stone.display();
 
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  slingShot.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition (stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{
	slingShot.fly();
}
