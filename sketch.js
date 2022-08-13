//Name Spacing - giving nicknames to very big names of functions
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
let world;
var ground
var rightwalls
var leftwalls
var topwalls
var ball



function setup() {
  createCanvas(400,400);
  engine = Engine.create(); //Universe
  
  world = engine.world; //Planet
  rectMode(CENTER);
  ellipseMode(RADIUS);
  // new = new object
  ground=new Ground(200,380,400,10)
  rightwalls = new Ground(380,200,10,400)
  leftwalls = new Ground(20,200,10,400)
  topwalls = new Ground(200,20,400,10)
  ball=new Ball(200,200,10)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.deezgrounds()
  rightwalls.deezgrounds()
  leftwalls.deezgrounds()
  topwalls.deezgrounds()
  ball.display()
}

/*
Object Oriented Programming
1. Design the object - CLASS - contains properties & function of objects
2. Create the object - Properties are assigned, but not functions
3. Using the functions of the object
*/

