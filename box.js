class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = 255;
    }
  display(){
    rectMode(CENTER)
    var pos =this.body.position;
  
    if(this.body.speed<3){
      push()
      rect(pos.x, pos.y, this.width, this.height);
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      if(this.Visibility = 0){
        World.remove(world,this.body)
      }
      pop()
        }
    }
    
  }
  