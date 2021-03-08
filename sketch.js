var fixedrect,movingrect

function setup() {
  createCanvas(600,400);
  
  fixedrect = createSprite(100,100,50,50)
  fixedrect.shapeColor = "red"
  movingrect = createSprite(400,100,50,100)
  movingrect.shapeColor = "red"
}

function draw() {
  background(0);  
  
  movingrect.y = mouseY
  movingrect.x = mouseX

  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 && 
     fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 &&
     movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2 &&
     fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2){
       fixedrect.shapeColor = "green"
       movingrect.shapeColor = "green"
     }
  else{
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
  }
  drawSprites();
}
