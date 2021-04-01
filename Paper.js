class paper {
    constructor(x, y, r, angle){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            desnity: 1.2
        }

        this.body = Bodies.circle(x, y, r, options)
        this.r = r
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        ellipseMode(CENTER)
        rotate(angle);
        ellipse(0, 0, this.r, this.r);
        image(this.image, 0, 0, this.r);
        pop()
    }
}