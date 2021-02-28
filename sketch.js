
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var box1,box2,box3;
var ground;
function preload()
{
	
}

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	box1=createSprite(555,560,10,50);
	box2=createSprite(755,560,10,50);
    box3=createSprite(650,580,200,10);

	ground=new Ground(400,590,800,10);
	ground.shapeColor="white";

	paper1 =new Paper(200,450,40);
	//paper1.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paper1.display();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:52,y:-52})
	}
}


