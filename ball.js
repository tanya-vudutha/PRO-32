class Ball
{
  constructor(x, y, width, height, angle)
  {
    var options=
    {
      restitution:0.7,
      friction:0.5,
      density:0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }

  display()
  {
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("orange");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}