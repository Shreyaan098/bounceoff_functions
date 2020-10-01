var fixedRect, movingRect;
var box1,box2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(50, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  box1=createSprite(700,10,50,50)
  box1.shapeColor="blue"
  box2=createSprite(700,600,50,50)
  box2.shapeColor="blue"
  box1.velocityY=+5
  box2.velocityY=-5
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
bounceOff(box1,box2)
 
  drawSprites();
}
function bounceOff(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
   obj1.velocityX = obj1.velocityX * (-1);
   obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
}
}