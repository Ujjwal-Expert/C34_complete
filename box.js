class Box {
    constructor(x,y,width,height){
        var opt= {
            restitution:0.5,
            density:2,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,opt);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();
    }
}