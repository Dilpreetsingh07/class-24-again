class Bird{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            density: 2.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        var pos=this.body.position
        push();
    translate(this.body.position.x,this.body.position.y)
    pos.x=mouseX
    pos.y=mouseY
    rotate(angle)
    rectMode(CENTER);
    fill("red")
    rect(0,0,this.width,this.height);
    pop();
    
    }
}