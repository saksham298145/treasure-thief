var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var highestraid=0
var cashG,diamondsG,jwelleryG,swordGroup;
var over

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png")
OverImg=loadImage("gameover.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 8;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.velocityY=-2 
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
over=createSprite(150,100)
over.addImage(OverImg)
over.scale=0.5

}

function draw() {

  if(gameState===PLAY){
  background(0);
  
  over.visible=false
  
boy.x=World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+150
     } 
     if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+100
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END
        over.visible=true
        boy.addAnimation("Sahil Running",OverImg)  
               
cashG.destroyEach()
if (treasureCollection>highestraid){
  highestraid=treasureCollection
}

cashG.setVelocityYEach(0)
diamondsG.destroyEach()
diamondsG.setVelocityYEach(0)
jwelleryG.destroyEach()
jwelleryG.setVelocityYEach(0)
swordGroup.destroyEach()
swordGroup.setVelocityYEach(0)

    }
    
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  text("Highest Raid:"+highestraid,300,30)
  
  }
}
if (gameState===END&&  (keyDown(UP_ARROW))){
reset()
}
}


function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 300;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 300;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 300;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 7;
  sword.lifetime = 300;
  swordGroup.add(sword);
  }
}
function reset() {
 gameState=PLAY
 over.visible=false
 treasureCollection=0

}