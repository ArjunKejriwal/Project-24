class Paper {
    constructor(x, y, r){
        this.image = loadImage("paper.png");
        
     this.body = Bodies.circle(x, y, r, {density:0.6,restitution:0.5})
     World.add(world, this.body)
     this.r = r;
     
    }
   
    display(){
     //circle(this.body.position.x, this.body.position.y, this.r*2)
     image(this.image, 0, 0, this.r, this.r)
    }
     

   show(){
   
   push();
   
   ellipseMode(CENTER);

   ellipse(this.body.position.x, this.body.position.y, this.r*2)

   pop();
   }

}