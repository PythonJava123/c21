var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(200,200,30,60);
  rect1.shapeColor = "blue";
  rect2 = createSprite(400,200,50,30);
  rect2.shapeColor = "blue";

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

}

function draw() {
  background(0,0,0);
  
  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1, rect2)){

  rect1.shapeColor = "white";
  rect2.shapeColor = "white";

  }

  else{

    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";

  }


  bounceOff(movingRect, fixedRect);

  drawSprites(); 
 
}
 

