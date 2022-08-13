class Ground {
    //PROPERTIES
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h,{isStatic:true})
        this.width = w
        this.height = h
        World.add(world, this.body);

    }

    //FUNCTIONS
    deezgrounds(){
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        
    }
}
/*
trex.velocityX = 3
this - keyword that refers to the object of the class that will be created later
*/  

