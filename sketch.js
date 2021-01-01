const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base1,base2;
var sling;
var score;
var polygonimg;
var box11,box12,box13,box14,box15,box16;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function preload(){
    polygonimg = loadImage("polygon.png")
    getBackgroundImg()

}
function setup(){
    createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;
    score  =0;
    base1 = new Ground(700,410,300,20)
     base2 = new Ground(1000,300,200,20)
    box1 = new Box(720,380,40,40)
    box2 = new Box(680,380,40,40)
    box3 = new Box(650,380,40,40)
    box4 = new Box(750,380,40,40)
    box5 = new Box(700,350,40,40)
    box6 = new Box(665,350,40,40)
    box7 = new Box(735,350,40,40)
    box8 = new Box(720,330,40,40)
    box9 = new Box(680,330,40,40)
    box10 = new Box(700,305,40,40)
    //second tower
    box11 = new Box(1000,280,40,40)
    box12 = new Box(980,280,40,40)
    box13 = new Box(1020,280,40,40)
    box14 = new Box(1020,260,40,40)
    box15 = new Box(980,260,40,40)
    box16 = new Box(1000,240,40,40)

 
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
 //background(240)
 
 text("score:"+score,50,50)
 base1.display();
 base2.display()
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
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 pop();
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 box12.score();
 box13.score();
 box14.score();
 box15.score();
 box16.score();





 imageMode(CENTER)
 image(polygonimg,polygon.position.x,polygon.position.y,50,50)
}

function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
    if(keyCode == 32){
        sling.attach(polygon)
    }
}
async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
     var responseJSON = await response.json(); 
    var datetime = responseJSON.datetime; 
    var hour = datetime.slice(11,13); 
    if(hour>= 06&& hour<=14)
    { 
    background("white")
    
    } 
    else{ 
    background("black")
    }
 
    }