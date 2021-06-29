class Block{

    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:1.0,
            isStatic:true
        }
        this.body = Bodies.rectancle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(world,this.body);

    }
    display(){

        console.log(this.body.speed)
        if(this.body.speed<3){
        
        var angle = this.body.angle;
        var pos = this.body.position;
        push ();
        translater (pos.x,pos.y)
          rotate (angle);
          rectMode(CENTER);
          rect(0,0,this.weight,this.height);
          pop ();
        }
        else{
            world.remove(world,this.body)
        }

    }
}