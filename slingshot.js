class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:300
        }
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);

    }
    display(){
        push();
        stroke("white");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
        pop()
    }
}