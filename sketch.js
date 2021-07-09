const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3, bob4,bob5;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);



	bob1 = new bob(320,380);
	bob2 = new bob(360,380);
	bob3 = new bob(400,380);
	bob4 = new bob(440,380);
	bob5 = new bob(480,380);
	
	rope1=new rope(bob1.body,roof,-80, 0)
	rope2=new rope(bob2.body,roof,-40, 0)
	rope3=new rope(bob3.body,roof,0, 0)
	rope4=new rope(bob4.body,roof,40, 0)
	rope5=new rope(bob5.body,roof,80, 0)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-15});
	}
}
