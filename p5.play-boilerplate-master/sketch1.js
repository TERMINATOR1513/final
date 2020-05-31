var bg;
var platform;
var platformIMG;
var tile1;
var tile2;
var tile3;  
var player,player_imgl,player_stand;
var player2,player_imgl2,player_stand2;
var playeridle;
var playeridle2;
function preload()
{
bg=loadImage("Backgrounds/TheGhouls.png");
tile1=loadImage("platforms/false platform.png")
tile2=loadImage("platforms/hard platform.png")
playeridle=loadAnimation("idle.png.png")
player_stand=loadAnimation("walk/one.png.png","walk/two.png.png","walk/three.png.png","walk/four.png.png","walk/five.png.png")
   player_img=loadAnimation("attack/one.png.png","attack/two.png.png","attack/three.png.png","attack/four.png.png","attack/five.png.png","attack/six.png.png","attack/seven.png.png")
   playeridle2=loadAnimation("idle2.png.png")
player_stand2=loadAnimation("walk2/one.png.png","walk2/two.png.png","walk2/three.png.png","walk2/four.png.png","walk2/five.png.png")
   player_img2=loadAnimation("attack2/one.png.png","attack2/two.png.png","attack2/three.png.png","attack2/four.png.png","attack2/five.png.png")
  }
function setup() {
  createCanvas(displayWidth,displayHeight);
  platform= createSprite(displayWidth/2,displayHeight/2-50);
 platform.addImage(tile1);

  platform2= createSprite(displayWidth/2-50,displayHeight/2+200);
  platform2.addImage(tile2);
  platform2.scale=3;
player=createSprite(100,500);
player.addAnimation("player0",playeridle);
  player.addAnimation("player1",player_stand);
  player.addAnimation("player2",player_img);
  player.scale=0.3;

  player2=createSprite(800,500);
player2.addAnimation("player0",playeridle2);
  player2.addAnimation("player1",player_stand2);
  player2.addAnimation("player2",player_img2);
  player2.scale=0.3;
}

function draw() {
  background(bg);  
  if(keyDown("D")){
    player.changeAnimation("player1",player_stand);
    //player.x += 10;
  }else if(keyDown("D") === false){
    player.changeAnimation("player0",playeridle);
  }
  if(keyDown("A")){
    player.x -= 10;
    player.changeAnimation("player1",player_stand);
  }else if(keyDown("A") === false){
    player.changeAnimation("player0",playeridle);
  }
  if(keyDown("T")) 
  {
    player.changeAnimation("player2",player_img);
    
  }
  else if(keyDown("T") === false){
    player.changeAnimation("player0",playeridle);
  }

  if(keyDown(RIGHT_ARROW)){
    player2.changeAnimation("player1",player_stand2);
    player2.x += 10;
  }else if(keyDown(RIGHT_ARROW) === false){
    player2.changeAnimation("player0",playeridle2);
  }
  if(keyDown(LEFT_ARROW)){
    player2.x -= 10;
    player2.changeAnimation("player1",player_stand2);
  }else if(keyDown(LEFT_ARROW) === false){
    player2.changeAnimation("player0",playeridle2);
  }
  if(keyDown("M")) 
  {
    player2.changeAnimation("player2",player_img2);
    
  }
  else if(keyDown("M") === false){
    player2.changeAnimation("player0",playeridle2);
  }
  drawSprites();
}