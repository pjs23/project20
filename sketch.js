var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1= loadAnimation("images/cat1.png");
    mouseImg1= loadAnimation("images/mouse1.png");
    catImg2= loadAnimation("images/cat2.png/cat3.png");
    mouseImg2= loadAnimation("images/mouse2.png/mouse3.png");
    catImg3= loadanimation("images/cat4.png");
    mouseImg3= loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat= createSprite(870,600);
   cat.addAnimation("catSitting",catImg1);
   cat.scale= 0.2;

   mouse= createSprite(770,500);
   mouse.addAnimation("mouseGoing",mouseImg1);
   mouse.scale=0.2;
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
   if (cat.x- mouse.x <(cat.width-mouse.width)/2){
   cat.velocityX= 0;
   cat.addAnimation("catLastImg",catImg3);
   cat.changeAnimation("catLastImg");
   cat.X=300;
   cat.scale=0.2;
   mouse.addAnimation("mouseLastImg",mouseImg3);
   mouse.changeAnimation("mouseLastImg");
   mouse.X=300;
   mouse.scale=0.2;
   }

  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay= 25;

      cat.velocityX= -5;
      cat.addAnimation("catWalking",catImg2);
      cat.changeAnimation("catWalking");
  }

}
