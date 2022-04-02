const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ball

var ground;
var left;
var right;
var top_wall;
var wall

var but1;
var but2;

var red;
var green;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ballOptions =
  {
    restitution: 0.95,
    frictionAir: 0.02
  };


  ball = Bodies.circle(20, 20, 20, ballOptions);
  World.add(world, ball);

  //create buttons
  but1 = createImg("right.png");
  but2 = createImg("up.png");
  but1.position(220, 35);
  but2.position(100, 35);
  but1.size(50, 50);
  but2.size(50, 50);

  but1.mouseClicked(hForce);
  but2.mouseClicked(vForce);

  ground = new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  wall = new Ground(300,350,20,60);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function hForce()
{
  Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 0.01, y: 0});
}

function vForce()
{
  Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 0, y: -0.05});
}

function draw() 
{
  background(51);
  
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  wall.show();

  fill(1000);
  ellipse(ball.position.x, ball.position.y, 20);

  Engine.update(engine);

  //I didnt have enough time to finsh this
  fill("LIME");
  rect(345, 350, 60, 50);
  
  if(ball.position.x >= 345-30
    && ball.position.x <= 345+30
    && ball.position.y >= 350-25)
  {
    fill("green");
    rect(345, 350, 60, 50);

    ball.position.x = 40
    ball.position.y = 40

    fill("lime")
    textSize(30)
    text("you win!", 150, 150)

    //this is itentional
    thisWillMakeTheGameCrash()

  }
  else
  {
    fill("LIME");
  rect(345, 350, 60, 50);
  }

  if(ball.position.x >= 255-30
    && ball.position.x <= 255+30
    && ball.position.y >= 350-25)
  {
    fill("orange");
    rect(255, 350, 60, 50);

    ball.position.x = 40
    ball.position.y = 40

    fill("red")
    textSize(30)
    text("you lose!", 150, 150)

    //this is itentional
    thisWillMakeTheGameCrash()

  }
  else
  {
    fill("red");
    rect(255, 350, 60, 50);
  }



}

