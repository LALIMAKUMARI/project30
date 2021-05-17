const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

function preload() {
  backgroundImg = loadImage("bg.PNG");
  polygonImg = loadImage("polygon.png");
}


function setup() {
  var canvas = createCanvas(1000, 850);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(500, 760, 1000, 50);
  ground2 = new Ground(750, 460, 500, 30);
  ground3 = new Ground(300, 250, 500, 30);

  //GROUND 1

  block1 = new Block(630, 400, 50, 50);
  
  block2 = new Block(680, 400, 50, 50);
  block3 = new Block(680, 400, 50, 50);

  block4 = new Block(730, 400, 50, 50);
  block5 = new Block(730, 400, 50, 50);
  block6 = new Block(730, 400, 50, 50);
  
  block7 = new Block(780,400,50,50);
  block8 = new Block(780,400,50,50);
  block9 = new Block(780,400,50,50);
  block10 = new Block(780,400,50,50);
 
  block11 = new Block(830,400,50,50);
  block12 = new Block(830,400,50,50);
  block13 = new Block(830,400,50,50);

  block14 = new Block(880,400,50,50);
  block15 = new Block(880,400,50,50);

  block16 = new Block(930,400,50,50);


//GROUND 2
 
  block17 = new Block(160,200,50,50);

  block18 = new Block(210,200,50,50);
  block19 = new Block(210,200,50,50);

  block20 = new Block(260,200,50,50);
  block21 = new Block(260,200,50,50);
  block22 = new Block(260,200,50,50);

  block23 = new Block(310,200,50,50);
  block24 = new Block(310,200,50,50);
  block25 = new Block(310,200,50,50);
  block26 = new Block(310,200,50,50);

  block27 = new Block(360,200,50,50);
  block28 = new Block(360,200,50,50);
  block29 = new Block(360,200,50,50);

  block30 = new Block(410,200,50,50);
  block31 = new Block(410,200,50,50);

  block32 = new Block(460,200,50,50);
 

   ball = Bodies.circle(50,570,100);
   World.add(world,ball);
   slingShot = new SlingShot(this.ball,{x:50,y:570});



  
}




function draw() {
  background(backgroundImg);
  Engine.update(engine);
  fill("red");
  text(mouseX + " " + mouseY, mouseX, mouseY);

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  imageMode(CENTER);
  image(polygonImg ,ball.position.x,ball.position.y,100,100);

  
slingShot.display();


}


function mouseDragged(){
  Matter.Body.setPosition (this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}
































