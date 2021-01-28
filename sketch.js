const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

function preload(){

}

function setup(){
  var canvas = createCanvas(600,600);

  myEngine=Engine.create();
  myWorld = myEngine.world;

  ball = new Ball(0,50,80,80);
  chain = new SlingShot(ball.body,{x:300,y:50});

  ground1 = new Ground(300,450,200,15);
  box1 = new Box(300,350,70,70);
  box2 = new Box(300,300,70,70);
  box3 = new Box(300,280,150,20);
  box4 = new Box(250,200,30,100);
  box5 = new Box(350,200,30,100);



}
function draw(){
  background(0);
  Engine.update(myEngine);

  
  chain.display();
  ball.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
}