var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,trayPart1,trayPart2,trayPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;
	trayPart1=new tray(350,655,250,10);
	trayPart2=new tray(230,607,10,90)
	trayPart3=new tray(470,607,10,90);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  trayPart1.display();
  trayPart2.display();
  trayPart3.display();
  drawSprites();
 
}

function keyPressed() {
	// Look at the hints in the document and understand how to make the package body fall only on
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}

}




