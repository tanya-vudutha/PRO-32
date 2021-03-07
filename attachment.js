class Attachment
{
  constructor(bodyA,pointB)
  {
    var options=
    {
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.7,
      length:100
    }
    this.pointB=pointB;
    this.attachment = Constraint.create(options);
    World.add(world,this.attachment);
  }

  attach(body) 
  {
    this.attachment.bodyA = body;
  }

  fly() 
  {
    this.attachment.bodyA = null;
  }
  
  display()
  {
    if (this.attachment.bodyA) { 
    var pointA=this.attachment.bodyA.position;
    var pointB=this.pointB;
    push();
    strokeWeight(3);
    stroke("white");
    line(pointB.x, pointB.y, pointA.x, pointA.y);
    pop();
    }
  }
}