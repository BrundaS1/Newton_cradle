class bob{
    constructor(x,y){

    var options= {
        restitution : 1 ,
        friction : 0,
        isStatic:false,
	    density:0.8	
    }
   
    this.body = Bodies.circle(x,y,10,options)
    World.add(world,this.body)
    }

    display(){
        ellipseMode(RADIUS);
        push ()
        fill("white");
        ellipse(this.body.position.x,this.body.position.y,10,10)
        pop ()

    }
}