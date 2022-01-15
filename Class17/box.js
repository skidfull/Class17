class Box
  {
    constructor(x,y,www,h)
    {
      this.x =x;
      this.y = y
      this.www = www;
      this.h = h;
    }
    
    show()
    {
      console.log("hello"+this.x+" "+this.y+" "+this.www+" "+this.h)
      rect(this.x,this.y,this.www,this.h)
    }
    
    //write function to set the width of the box
    set_width(v){
      this.www = v
    }
    set_velocity(y){
      this.x = y+this.x
    }

  }

  
