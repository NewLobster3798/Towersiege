const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base1;
var sling;
var polygonimg;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function preload(){
polygonimg = loadImage("polygon.png")
}
function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;
    base1 = new Ground(750,410,300,20)
    box1 = new Box(770,380,40,40)
    box2 = new Box(730,380,40,40)
    box3 = new Box(700,380,40,40)
    box4 = new Box(800,380,40,40)
    box5 = new Box(750,350,40,40)
    box6 = new Box(715,350,40,40)
    box7 = new Box(785,350,40,40)
    box8 = new Box(770,330,40,40)
    box9 = new Box(730,330,40,40)
    box10 = new Box(750,305,40,40)
    var options = {
        isStatic:false,
        density:2,
        restitution:1,
        friction:1
    }
    polygon = Matter.Bodies.polygon(200,200,6,20,options)
    World.add(world,polygon);
  sling =  new Sling(polygon,{x:200,y:200});

}
function draw(){
 Engine.update(engine);
 background(240)
 base1.display();
 push()
 fill("blue")
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
pop()
 //sling.display();

 imageMode(CENTER)
 image(polygonimg,polygon.position.x,polygon.position.y,50,50)
}

function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    sling.fly();
}