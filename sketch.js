var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1= createSprite(200,100,50,50);
  gameObject2= createSprite(300,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
}

function draw() {
  background(0); 
  console.log(movingRect.x);
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;
  if (istouching (movingRect,gameObject2)){
    movingRect.shapeColor="blue";
    gameObject2.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="green";
    gameObject2.shapeColor="green";
  }
 

  drawSprites();
}


