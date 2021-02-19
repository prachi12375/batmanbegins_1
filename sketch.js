const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    drop1 = new Drops(300, 300);

    man = new umbrella(300, 530);
   
    
}

function draw(){
    background(0);
    Engine.update(engine);

    drop1.display();

    man.display();
    
}   

