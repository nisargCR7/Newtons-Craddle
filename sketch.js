const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5,bob6;
var rope1,rope2,rope3,rope4,rope5,rope6;
var roof;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

roof = new Roof(550,100,550,30);

bob1 = new Bob(400,450,50);    
bob2 = new Bob(600,400,50);    
bob3 = new Bob(700,400,50);    
bob4 = new Bob(800,400,50);    
bob5 = new Bob(900,400,50);    
bob6 = new Bob(1000,400,50);    

rope1 = new Rope(bob1.body,{x:300,y:100});
rope2 = new Rope(bob2.body,{x:400,y:100});
rope3 = new Rope(bob3.body,{x:500,y:100});
rope4 = new Rope(bob4.body,{x:600,y:100});
rope5 = new Rope(bob5.body,{x:700,y:100});
rope6 = new Rope(bob6.body,{x:800,y:100});


}

function draw(){
    background(100);
    Engine.update(engine);
    strokeWeight(4);


   rope1.display(); 
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   rope6.display();
   
   roof.display();
   
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   bob6.display();





}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}





