const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine
var world,engine;
var slingshot,polygon;
function setup() {

  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  bock  = new Box(330,235,30,40);
  bock2  = new Box(360,235,30,40);
  bock3  = new Box(390,235,30,40);
  bock4  = new Box(420,235,30,40);
  bock5 = new Box(450,235,30,40);
  bock6  = new Box(360,195,30,40);
  bock7  = new Box(390,195,30,40);
  bock8  = new Box(420,195,30,40);
  bock9  = new Box(390,155,30,40);
  ground = new Ground(390,260,150,10);
  polygon = new Bird(100,250);
  slingshot = new SlingShot(polygon.body,{x:100, y:250});
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  bock.display();
  bock2.display();
  bock3.display();
  bock4.display();
  bock5.display();
  bock6.display();
  bock7.display();
  bock8.display();
  bock9.display();
  ground.display();
  slingshot.display();
  polygon.display();
  //drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}