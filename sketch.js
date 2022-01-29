var gameState = "level1";
var PLAY = 1;
var END = 0;

function preload(){
//player
player1_running = loadAnimation("./assets/player/player1/player1_1.png","./assets/player/player1/player1_2.png","./assets/player/player1/player1_3.png","./assets/player/player1/player1_4.png");
player1_fighting = loadAnimation("./assets/player/player_1_fight/player1_fight_1.png","./assets/player/player_1_fight/player1_fight_2.png","./assets/player/player_1_fight/player1_fight_3.png");
player2_running = loadAnimation("./assets/player/player2/player2_1.png","./assets/player/player2/player2_2.png","./assets/player/player2/player2_3.png","./assets/player/player2/player2_4.png");
player2_fighting = loadAnimation("./assets/player/player_2_fight/player2_fight_1.png","./assets/player/player_2_fight/player2_fight_2.png","./assets/player/player_2_fight/player2_fight_3.png");
//boss
boss1 = loadAnimation("./assets/boss/boss_1/boss1_1.png","./assets/boss/boss_1/boss1_2.png","./assets/boss/boss_1/boss1_3.png","./assets/boss/boss_1/boss1_4.png","./assets/boss/boss_1/boss1_5.png","./assets/boss/boss_1/boss1_6.png","./assets/boss/boss_1/boss1_7.png","./assets/boss/boss_1/boss1_8.png","./assets/boss/boss_1/boss1_9.png","./assets/boss/boss_1/boss1_10.png","./assets/boss/boss_1/boss1_11.png","./assets/boss/boss_1/boss1_12.png")
boss2 = loadAnimation("./assets/boss/boss_2/boss_2_1.png","./assets/boss/boss_2/boss_2_2.png","./assets/boss/boss_2/boss_2_3.png","./assets/boss/boss_2/boss_2_4.png","./assets/boss/boss_2/boss_2_5.png","./assets/boss/boss_2/boss_2_6.png","./assets/boss/boss_2/boss_2_7.png");
boss2_death = loadAnimation("./assets/boss/boss_2_2/1boss_2_death.png","./assets/boss/boss_2_2/2boss_2_death.png","./assets/boss/boss_2_2/3boss_2_death.png","./assets/boss/boss_2_2/3boss_2_death.png","./assets/boss/boss_2_2/4boss_2_death.png","./assets/boss/boss_2_2/5boss_2_death.png","./assets/boss/boss_2_2/6boss_2_death.png","./assets/boss/boss_2_2/7boss_2_death.png","./assets/boss/boss_2_2/8boss_2_death.png"
,"./assets/boss/boss_2_2/9boss_2_death.png","./assets/boss/boss_2_2/10boss_2_death.png","./assets/boss/boss_2_2/11boss_2_death.png","./assets/boss/boss_2_2/12boss_2_death.png","./assets/boss/boss_2_2/13boss_2_death.png","./assets/boss/boss_2_2/14boss_2_death.png","./assets/boss/boss_2_2/15boss_2_death.png","./assets/boss/boss_2_2/16boss_2_death.png")
boss3 = loadAnimation("./assets/boss/boss_3/boss_3_1.png","./assets/boss/boss_3/boss_3_2.png","./assets/boss/boss_3/boss_3_3.png","./assets/boss/boss_3/boss_3_4.png","./assets/boss/boss_3/boss_3_5.png","./assets/boss/boss_3/boss_3_6.png","./assets/boss/boss_3/boss_3_7.png","./assets/boss/boss_3/boss_3_8.png","./assets/boss/boss_3/boss_3_9.png","./assets/boss/boss_3/boss_3_10.png","./assets/boss/boss_3/boss_3_11.png","./assets/boss/boss_3/boss_3_12.png");
boss3_death = loadAnimation("./assets/boss/boss_3_2/boss_3_2_1.png","./assets/boss/boss_3_2/boss_3_2_2.png","./assets/boss/boss_3_2/boss_3_2_3.png","./assets/boss/boss_3_2/boss_3_2_4.png","./assets/boss/boss_3_2/boss_3_2_5.png","./assets/boss/boss_3_2/boss_3_2_6.png","./assets/boss/boss_3_2/boss_3_2_7.png","./assets/boss/boss_3_2/boss_3_2_8.png","./assets/boss/boss_3_2/boss_3_2_9.png","./assets/boss/boss_3_2/boss_3_2_10.png","./assets/boss/boss_3_2/boss_3_2_11.png","./assets/boss/boss_3_2/boss_3_2_12.png","./assets/boss/boss_3_2/boss_3_2_13.png","./assets/boss/boss_3_2/boss_3_2_14.png","./assets/boss/boss_3_2/boss_3_2_15.png","./assets/boss/boss_3_2/boss_3_2_16.png");
boss4 = loadAnimation("./assets/boss/boss_4/boss4_1.png","./assets/boss/boss_4/boss4_2.png","./assets/boss/boss_4/boss4_3.png","./assets/boss/boss_4/boss4_4.png","./assets/boss/boss_4/boss4_5.png","./assets/boss/boss_4/boss4_6.png","./assets/boss/boss_4/boss4_7.png","./assets/boss/boss_4/boss4_8.png","./assets/boss/boss_4/boss4_1.png","./assets/boss/boss_4/boss4_9.png","./assets/boss/boss_4/boss4_10.png","./assets/boss/boss_4/boss4_11.png","./assets/boss/boss_4/boss4_12.png","./assets/boss/boss_4/boss4_13.png","./assets/boss/boss_4/boss4_14.png","./assets/boss/boss_4/boss4_15.png","./assets/boss/boss_4/boss4_16.png");
boss5 = loadAnimation("./assets/boss/boss_5/boss_5_1.png","./assets/boss/boss_5/boss_5_2.png","./assets/boss/boss_5/boss_5_3.png","./assets/boss/boss_5/boss_5_4.png","./assets/boss/boss_5/boss_5_5.png","./assets/boss/boss_5/boss_5_6.png","./assets/boss/boss_5/boss_5_7.png","./assets/boss/boss_5/boss_5_9.png","./assets/boss/boss_5/boss_5_10.png");
boss5_death = loadAnimation("./assets/boss/boss_5_2/boss_5_2_1.png","./assets/boss/boss_5_2/boss_5_2_2.png","./assets/boss/boss_5_2/boss_5_2_3.png","./assets/boss/boss_5_2/boss_5_2_4.png","./assets/boss/boss_5_2/boss_5_2_5.png","./assets/boss/boss_5_2/boss_5_2_6.png","./assets/boss/boss_5_2/boss_5_2_7.png","./assets/boss/boss_5_2/boss_5_2_8.png","./assets/boss/boss_5_2/boss_5_2_9.png","./assets/boss/boss_5_2/boss_5_2_10.png","./assets/boss/boss_5_2/boss_5_2_11.png","./assets/boss/boss_5_2/boss_5_2_12.png","./assets/boss/boss_5_2/boss_5_2_13.png","./assets/boss/boss_5_2/boss_5_2_14.png","./assets/boss/boss_5_2/boss_5_2_15.png","./assets/boss/boss_5_2/boss_5_2_16.png","./assets/boss/boss_5_2/boss_5_2_17.png","./assets/boss/boss_5_2/boss_5_2_18.png","./assets/boss/boss_5_2/boss_5_2_19.png","./assets/boss/boss_5_2/boss_5_2_20.png");
//obstacles
big = loadAnimation("./assets/obstacles/big/big_1.png","./assets/obstacles/big/big_2.png","./assets/obstacles/big/big_3.png","./assets/obstacles/big/big_4.png","./assets/obstacles/big/big_5.png","./assets/obstacles/big/big_6.png","./assets/obstacles/big/big_7.png","./assets/obstacles/big/big_8.png","./assets/obstacles/big/big_8.png","./assets/obstacles/big/big_10.png","./assets/obstacles/big/big_11.png","./assets/obstacles/big/big_12.png","./assets/obstacles/big/big_13.png","./assets/obstacles/big/big_14.png","./assets/obstacles/big/big_15.png","./assets/obstacles/big/big_16.png","./assets/obstacles/big/big_17.png","./assets/obstacles/big/big_18.png","./assets/obstacles/big/big_19.png","./assets/obstacles/big/big_20.png","./assets/obstacles/big/big_21.png","./assets/obstacles/big/big_22.png","./assets/obstacles/big/big_23.png","./assets/obstacles/big/big_24.png","./assets/obstacles/big/big_25.png");
bomb = loadAnimation("./assets/obstacles/bomber/bomb_1.png","./assets/obstacles/bomber/bomb_2.png","./assets/obstacles/bomber/bomb_3.png","./assets/obstacles/bomber/bomb_4.png","./assets/obstacles/bomber/bomb_5.png","./assets/obstacles/bomber/bomb_6.png")
flame = loadAnimation("./assets/obstacles/flamer/flame_1.png","./assets/obstacles/flamer/flame_2.png","./assets/obstacles/flamer/flame_3.png","./assets/obstacles/flamer/flame_4.png");
goblin = loadAnimation("./assets/obstacles/goblin/goblin_1.png","./assets/obstacles/goblin/goblin_2.png","./assets/obstacles/goblin/goblin_3.png","./assets/obstacles/goblin/goblin_4.png","./assets/obstacles/goblin/goblin_5.png","./assets/obstacles/goblin/goblin_6.png","./assets/obstacles/goblin/goblin_7.png");
shooter = loadAnimation("./assets/obstacles/shooter/shoot_1.png","./assets/obstacles/shooter/shoot_2.png","./assets/obstacles/shooter/shoot_3.png","./assets/obstacles/shooter/shoot_4.png","./assets/obstacles/shooter/shoot_5.png","./assets/obstacles/shooter/shoot_6.png");
slime = loadAnimation("./assets/obstacles/slime/slime_1.png","./assets/obstacles/slime/slime_2.png","./assets/obstacles/slime/slime_3.png","./assets/obstacles/slime/slime_4.png","./assets/obstacles/slime/slime_5.png","./assets/obstacles/slime/slime_6.png","./assets/obstacles/slime/slime_7.png","./assets/obstacles/slime/slime_8.png");
spider = loadAnimation("./assets/obstacles/spider/spider_1.png","./assets/obstacles/spider/spider_2.png","./assets/obstacles/spider/spider_3.png","./assets/obstacles/spider/spider_4.png","./assets/obstacles/spider/spider_5.png");
//ground
ground_1 = loadImage("./assets/ground_1.png")
//extras
died = loadImage("./assets/youDied.png")
}
function setup() {
createCanvas(800,600);
ground1 = createSprite(110,460,400,20);
ground1.addImage("ground1",ground_1);
ground1.x = ground1.width / 2;
player1 = createSprite(110,350,20,50);
player1.addAnimation("1running",player1_running);
player1.addAnimation("1fighting",player1_fighting);
player1.scale = 0.3;
invisibleGround = createSprite(110,400,14000,10);
invisibleGround.visible = false;
o_1 = createSprite(1000 , 350 , 20 , 50);
o_1.addAnimation("o_1",spider);
o_1.scale = 0.2;
o_1.debug = true
player1.debug = true;
player1.setCollider("rectangle",0,0,100,250);
youDied = createSprite(400,300)
youDied.addImage("dead",died);
youDied.visible = false;
//676 348
}


function draw() {
  background(155,255,255);  
  //console.log(mouseX+" "+mouseY,mouseX,mouseY);
if(gameState === "level1"){
  if(o_1.isTouching(player1)){
    gameState = END;
  }
  handlePlayerControls();
  text("LEFT_ARROW = MOVE FORWARD",camera.x - 390,20);
  text("RIGHT_ARROW = MOVE BACKWARD",camera.x - 390,40);
  text("c = FIGHT MODE",camera.x - 390,60);
  text("v = NORMAL MODE",camera.x - 390,80);
}
if(gameState === END){
  invisibleGround.destroy();
  //player1.destroy();
  if(player1.y > 610){
    player1.destroy()
    youDied.visible = true;
    youDied.x = o_1.x - 50;
  }
}


player1.velocityY = player1.velocityY + 0.8
player1.collide(invisibleGround);

  drawSprites();
}
function handlePlayerControls(){
  if(keyDown("w")) {
    player1.x += 5;
  }
  if(keyDown("s")) {
    player1.x -= 5;
  }
  if(keyDown("c")) {
    player1.changeAnimation("1fighting");
    player1.velocityX = 0;
  }
  if(keyDown("v")) {
    player1.changeAnimation("1running"); 
  }
  
if(keyDown("space")&& player1.y >=160) {
  player1.velocityY = -13; 
}
camera.position.x = player1.position.x;
}