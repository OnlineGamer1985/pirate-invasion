const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var balls=[]

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = 20
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(150,100,130,100, angle)
 

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  for(var i=0;i<balls.length;i++){
    showcannonballs(balls[i])
  }
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.display()
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}

function keyPressed(){
 if(keyCode==DOWN_ARROW){
  cannonball=new CannonBall(cannon.x,cannon.y)
  balls.push(cannonball)
  
 } 
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
     balls[balls.length-1].fire()
  }
}

function showcannonballs(ball){
  ball.display
}

