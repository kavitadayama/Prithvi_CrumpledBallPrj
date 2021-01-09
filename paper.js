class Paper {
    constructor(x,y,radius) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false     
        }

        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.radius = 70;
        //this.image = loadImage("paper.png");
    }

    display() {
       //imageMode(CENTER);
       //image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
       var paperpos=this.body.position;		

       push()
       translate(paperpos.x, paperpos.y);
       rectMode(CENTER)
       strokeWeight(3);
       fill(255,0,255)
       ellipse(0,0,this.radius, this.radius);
       pop()
    }
}