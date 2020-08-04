var ship, troid, troid2, bullet;

var shipI;

var points

function setup() {
  createCanvas(400,400);
  ship = createSprite(200, 200, 20, 20);
  ship.addImage(shipI)
  ship.scale = 0.5; 

  troid = createSprite(1, 1, 1, 1);
  troid2 = createSprite(1, 1, 1, 1);
  bullet = createSprite(1, 1, 1, 1);
  
  points = 0;
}

function preload(){
  shipI = loadImage("space.png")
}

function draw() {
  background(255,255,255);  
  SpawnOB();
  SpawnOB2();
  if(keyDown(LEFT_ARROW)){
    ship.x = ship.x + -7.5;
  }
  else if(keyDown(RIGHT_ARROW)){
    ship.x = ship.x + 7.5;
  }
  else if(keyDown(UP_ARROW)){
    ship.y = ship.y + -7.5;
  }
  else if(keyDown(DOWN_ARROW)){
    ship.y = ship.y + 7.5;
  }
  else if(keyWentDown("Space")){
    bullet = createSprite(200,350,5,10);
    bullet.x = ship.x;
    bullet.y = ship.y;
    bullet.velocityY = -5;
  }

  if(bullet.isTouching(troid)){
    troid.destroy();
  }

  if(bullet.isTouching(troid2)){
    console.log(ship.x);
    troid2.destroy();
    points = points + 10;
  }

  if(troid.isTouching(ship)){
    ship.destroy();
  }

  text("Score_" + points,300,10);
  drawSprites();
}
function SpawnOB(){
  if(World.frameCount % 100 === 0){
    troid = createSprite(10,10,25,25);
    troid.x = random(0,200);
    troid.y = random(0,200);
    troid.velocityX = random(0,4);
    troid.velocityY = random(0,3);
    troid.visible = true;
  }
}

function SpawnOB2(){
  if(World.frameCount % 100 === 0){
    troid2 = createSprite(10,10,25,25);
    troid2.x = random(200,0);
    troid2.y = random(200,0);
    troid2.velocityX = random(4,0);
    troid2.velocityY = random(3,0);
    troid2.visible = true;
  }
}