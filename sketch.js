var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect = createSprite(300, 300, 100, 60);
  movingRect.shapeColor="green";
}


function draw() {
  background(255,255,255);
  console.log(fixedRect.x-movingRect.x);
  movingRect.x= mouseX;
  movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
    movingRect.ShapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}