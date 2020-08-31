var ball,imageBall,imagePaddle,paddle;
function preload() {
 imageBall=loadAnimation("ball.png");
  imagePaddle=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,20,20);
  ball.velocityX=4;
  ball.velocityY=4;
   ball.addAnimation("BALL",imageBall);

  paddle=createSprite(390,200,10,100)
 paddle.addImage("PADDLE",imagePaddle);
}

function draw() {
  background(205,153,0);
 
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  ball.bounceOff(paddle);

  
  if(keyDown(UP_ARROW)) {
    paddle.velocityY=-4;
     
  }
  
  if(keyDown(DOWN_ARROW)){
   paddle.velocityY=4;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

