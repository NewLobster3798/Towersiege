class Sling{
    constructor(body1,point1){
     var option = {
      bodyA:body1,
      pointB:point1,
      stiffness: 0.04,
      length: 1
     }
     this.bodyA = body1
     this.pointB = point1
     
     this.sling = Constraint.create(option);
     World.add(world,this.sling)
    }
    fly(){
     
      this.sling.bodyA = null;
    }
   attach(body){
      this.sling.bodyA = body;   
    }
    /*display(){
        push()
        fill("blue")
    var pointA= this.bodyA.position;
    var pointb  = this.pointB;
    if(pointA.x < 0 && pointA.x >200 && pointA.y <300 && pointA.y > 100) {

  
      strokeWeight("black");
      line(pointA.x,pointA.y, pointb.x, pointb.y);
  

      }
   
         
              pop()
    }*/
  
  }