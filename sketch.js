const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball, attachment, hoop, border1, border2, border3;
var hoop1,hoop2;
var basket, basketImg;
var bg, backgroundImg;

function preload()
{
  basketImg = loadImage("basket.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  
  ground = new Ground(400,390,800,20);

  basket = createSprite(730,150,70,120);
  basket.addImage("basket",basketImg);
  basket.scale=0.1;

  border1 = new Ground(810,170,10, 350);
  border2 = new Ground(400, 0, 800, 1);
  border3 = new Ground(0, 170, 1, 350);

  hoop1 = new Hoop(665,160,10,110);
  hoop2 = new Hoop(775,160,10,110);

  ball = new Ball(200,150,50,50)
  attachment = new Attachment(ball.body, {x:200,y:150});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  Engine.update(engine);
  fill("red")
  textSize(20);
  text("Press space to play again!",20,30);

  ground.display();

  border1.display();
  border2.display();
  border3.display();

  //hoop1.display();
  //hoop2.display();

  ball.display();
  attachment.display();

  drawSprites();
}

function mouseDragged() 
{
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  attachment.fly();
}

function keyPressed(){
  if (keyCode === 32){
      attachment.attach(ball.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=19){
    bg = "bg1.jpg";
  }
  else{
    bg="bg2.jpg";
  }

  backgroundImg = loadImage(bg);
}