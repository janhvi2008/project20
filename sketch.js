var bgImg;
var cat;
var mouse;

function preload(){
bgImg=loadImage("images/garden.png");    
catImg1=loadImage("images/cat1.png");
catImg2=loadImage("images/cat2.png");
catImg3=loadImage("images/cat3.png");
catImg4=loadImage("images/cat4.png");
mouseImg1=loadImage("images/mouse1.png");
mouseImg2=loadImage("images/mouse2.png");
mouseImg3=loadImage("images/mouse3.png");
mouseImg4=loadImage("images/mouse4.png");
}
function setup() {
  createCanvas(1000,800);


  cat = createSprite(870,600);
  cat.addAnimation("catSitting",catImg1);
  cat.scale = 0.2; 
  mouse = createSprite(200,600);
  mouse.addAnimation("happyMouse",mouseImg1);
  mouse.scale = 0.15;
}

function draw() {
  background(bgImg);  
  if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    velocityX=0;
    cat.addAnimation("cat", catImg4);
    cat.x =300;
    cat.scale=0.2;
    cat.changeAnimation("cat");
    mouse.addAnimation("mouse", mouseImg4);
    mouse.scale=0.15;
    mouse.changeAnimation("mouse");
  }
  drawSprites();
}
function keyPressed(){
    if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimatin("mouseTeasing");
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimatin("catRunning");
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimatin("catRunning");
    cat.velocityX = -3
    mouse.frameDelay= 25;  
  }
  if (keyCode === LEFT_ARROW){
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimatin("mouseTeasing");
  cat.addAnimation("catRunning",catImg2);
    cat.changeAnimatin("catRunning");
    cat.addAnimation("catRunning",catImg3);
    cat.changeAnimatin("catRunning");
    cat.velocityX = -3
  mouse.frameDelay= 25;  
}
  }