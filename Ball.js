class Ball {
    //PROPERTIES
    constructor(x, y, r){
        this.body = Bodies.circle(x, y, r)
       this.radius=r
        World.add(world, this.body);

    }

    //FUNCTIONS
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius)
    
    }
}
/*
trex.velocityX = 3
this - keyword that refers to the object of the class that will be created later
*/  

