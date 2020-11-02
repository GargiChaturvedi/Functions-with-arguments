var  fixedRect, movingRect, gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,300,50,80);
  movingRect=createSprite(400,200,80,50);
  gameObj1 = createSprite(200, 100, 50, 50);
  gameObj2 = createSprite(350, 100, 50, 50);
  gameObj3 = createSprite(500, 100, 50, 50);
  gameObj4 = createSprite(650, 100, 50, 50);
 
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObj1.shapeColor = "green";
  gameObj2.shapeColor = "green";
  gameObj3.shapeColor = "green";
  gameObj4.shapeColor = "green";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);
  console.log(fixedRect.y);
  console.log(movingRect.y);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObj1) === true) {
    gameObj1.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  } else {
    gameObj1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObj2) === true) {
    gameObj2.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  } else {
    gameObj2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObj3) === true) {
    gameObj3.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else {
    gameObj3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObj4) === true) {
    gameObj4.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  } else {
    gameObj4.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(movingRect, fixedRect) === true) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  } else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 
  drawSprites();
 
}

function isTouching(obj1, obj2) {

    if(obj1.x-obj2.x <= obj2.width/2+obj1.width/2 
      && obj2.x - obj1.x <= obj2.width/2 + obj1.width/2
      && obj2.y - obj1.y <= obj2.height/2 + obj1.height/2
      && obj1.y - obj2.y <= obj2.height/2 + obj1.height/2){
      return true ;
    }
    else{
      return false ;
    }

}