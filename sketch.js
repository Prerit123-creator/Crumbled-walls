
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 1000);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:true
	}
	ground = Matter.Bodies.rectangle(400,650,1500,20,options);
	World.add(world,ground);

	rect1 = new Dustbin(1026,635,200,10);
	rect2 = new Dustbin(923,595,10,90);
	rect3 = new Dustbin(1130,595,10,90);

	paperObject = new Paper(20,200,20);

  
}


function draw() {
Engine.update(engine);
  background(255);
  text(mouseX + ","+ mouseY,100,100);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1500,20);
  rect1.display();
  paperObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}


