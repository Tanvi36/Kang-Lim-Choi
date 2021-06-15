const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Assigning variables
var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

//Preload() for loading image
function preload() {

  bg = loadImage("gamingbackground1.jpg");
}


function setup() {

  //Creating canvas
  createCanvas(1700, 758);
  //Creating Engine
  engine = Engine.create();
  //Adding Engine in World
  world = engine.world;
  
  //Creating ground using the blueprint Ground.js
  ground = new Ground(600, 600, 1200, 20);

   //Creating hero using the blueprint Hero.js
  hero = new Hero(400,800,250);

   //Creating rope using the blueprint Rope.js
  rope = new Rope(hero.body, { x: 500, y: 50 });

   //Creating monster using the blueprint Monster.js
  monster = new Monster(1100,550,300);

   //Creating box line 1 using the blueprint Box.js

   //line 1
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
 
   //Creating box line 2 using the blueprint Box.js

   //line 2
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);

}

function draw() {

  // Setting background image
  background(bg);
  //Updating Engine
  Engine.update(engine);
  
  
  //Box line 1 display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  //Box line 2 display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  //Hero display()
  hero.display();

  //Rope display()
  rope.display();

  //Monster display()
  monster.display();

  //Ground display()
  ground.display();
}


  // function() for dragging the hero from mouse
function mouseDragged(){
  
  //Attaching hero to body [rope]
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
