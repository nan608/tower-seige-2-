class slingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.04,
            lenght:20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        world.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodya.position;
            var pointB = this.pointB;

            strokeweight(4);
            fill ("red");
            line (pointa.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
