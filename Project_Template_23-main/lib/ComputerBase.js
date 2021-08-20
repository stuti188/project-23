class ComputerBase{
    constructor(x,y,widh,height){
        var options = {
            isStatic:true
        };


        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/base2.png");

        World.add(world,this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      Push();
      translate(pos.x,pos.y);
      rotate(angle);
      ImageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
    
      Pop();
    }
}