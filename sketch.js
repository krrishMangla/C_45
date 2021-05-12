const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var p1,p2;
var s1,s2;

function preload()
{

}


function setup()
{
  var canvas = createCanvas(450,700);
  engine = Engine.create();
  world = engine.world;  

  p1 = new Paddle(100,670,130,40,1);
  p2 = new Paddle(305,670,130,40,2);

  s1 = new Screw(p1.body,{x:40,y:670},-65);
  s2 = new Screw(p2.body,{x:365,y:670},65);

}


function draw()
{
  background(0);
  Engine.update(engine);
  
  
  p1.display();
  p2.display();
  s1.display();
  s2.display();
}

function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.setAngularVelocity(p1.body,-0.5);  
  }

  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.setAngularVelocity(p2.body,0.5);  
  }
}