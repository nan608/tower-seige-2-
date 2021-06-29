class Stand{
    constructor(x,y,width,height){
        var options ={
            isstatic:true
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        world.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        strokeWeight(2);
        fill ("white");
        push ();
        translate (this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.weight,this.height);
        pop ();
    }

    
}