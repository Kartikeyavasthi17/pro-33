const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos =[];
var divisions =[];
var particles =[];

var divisionHeight =300;

var score =0;

var particless;

var count=0;

var gameState ="start";

var kk;
   
function preload() {
  
}

function setup() {
  var canvas = createCanvas(500,800);
  
  engine = Engine.create();
  world = engine.world;

  plinko1 =new Plinko(200,200,20);

  for(var j=30; j <= width; j =j+50)
  {
     plinkos.push(new Plinko(j,75,10));
     
  }
 
  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j =30; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,375,10));
  }

  for(var k=0; k <= width; k=k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  kk =new Division(250,795,1000,10);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  if(particless!=null)
  {
    particless.display();

    if(particless.body.position.y>760)
    {
      if(particless.body.position.x < 300)
      {
        score =score+500
        particless =null;
        if(count>= 5)gameState ="end";
      }
     
      else if(particless.body.position.x > 301 && particless.body.position.x <600)
      {
        score =score+100
        particless =null;
        if(count>= 5)gameState ="end";
      }

      else if(particless.body.position.x > 601 && particless.body.position.x <900)
      {
        score =score+200
        particless =null;
        if(count>= 5)gameState ="end";
      }
    }
  }

  kk.display();

  console.log(gameState);

  textSize(15);
  text("SCORE :"+ score,50,30);

  drawSprites();

}

function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particless =new Particle(mouseX,10,10);
      console.log(count);
  }
}