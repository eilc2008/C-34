class Ball {
    constructor(x,y,width,height){
        var options = {
            //restitution: 1,
            frictionAir: 0.01,
            density: 0.5
}

        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("black");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}