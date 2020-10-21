var fixedRect,movingRect,rect1,rect2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,100,50,50);
  rect1 = createSprite(300,100,50,50);
  rect2 = createSprite(100,100,50,50);
  rect1.velocityX=-3
  rect2.velocityX=3
  rect2.shapeColor="green"
}

function draw() {
  background("red");

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="brown"
    fixedRect.shapeColor="brown"
    }else{
      movingRect.shapeColor="purple"
      fixedRect.shapeColor="purple"
    }

    if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
      rect2.x-rect1.x<rect1.width/2+rect2.width/2){
        rect1.velocityX=+3;
        rect2.velocityX=-3;
      }
  drawSprites();
}
