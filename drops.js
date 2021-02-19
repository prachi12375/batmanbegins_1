class Drops {
    constructor(x,y){
      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
      this.body=Bodies.circle(x,y,10, options);
      this.width = width;
      this.height = height;
      this.radius = 10;
      World.add(world, this.body)
      this.tragetry=[]
    }
  
    display() {
      var maxDrops = 100;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("blue")
      ellipseMode(CENTER);
      circle(0, 0, this.radius);
      pop();

      if(this.body.position.y>this.height){
        Matter.body.setPosition(this.body, {x:random(0, 600), y:random(0, 600)})
      }
      for(var i = 0; i<maxDrops; i++){
        drop1.push(new Drops(random(0, 600), random(0, 600)));
      }
    }
  }
