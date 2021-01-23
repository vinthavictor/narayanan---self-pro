var prince,princei;
var fireball,fireballi;
var chimney1,chimney1i;
var chimney2,chimney2i;
var chimney3,chimney3i;
var chimney4,chimney4i;
var target,targeti;
var waterball1,waterball1i;
var waterball2,waterball2i;
var waterball3,waterball3i;
var waterball4,waterball4i;
var invisible,ini;
var invisible2,ini2;
var invisible3,ini3;
var invisible4,ini4;
var waterballs;
var chimneys;
var fire,firei;
var lifecount=3;
var lifesprites;
var score;
var hearti;
var sound,sound2;
var gameState="Carnival";
var button;
var princess,princessi;
var edges;
var invis;
var doctor,doctori;
var syringe,si;
var grf,grfi;
var grd,grdi;
var men,meni;
var  woman,womani;
var corona1,corona1i;
var corona2,corona2i;
var corona3,corona3i;
var corona4,corona4i;
var score2;
var zi;
var hi;
var si;
var destroyed;
var saddoctor;
var bow,bowi;
var edges;
var redb,redbi;
var grb,grbi;
var blb,blbi
var arrow,arrowi;
var timerr;
var Win;
var timeleft = 10;
var carnival,carnivali;
var door1,door2,door3;
var ring,ringi;
var bullseye,bulli;
var border;
var topedge;
var button2;
var carnival2,ci,d;
var carnivalsound;
var c=0;
function preload(){
princei=loadImage("prince2.png");
fireballi=loadImage("fireball2.png");
chimney1i=loadImage("chim.jpg");
chimney2i=loadImage("chim2.jpg");
chimney3i=loadImage("chim.jpg");
chimney4i=loadImage("chim2.jpg");
targeti=loadImage("candlee.jpg");
waterball1i=loadImage("waterball22.jpg");
waterball2i=loadImage("waterball11.jpg");
waterball3i=loadImage("waterball22.jpg");
waterball4i=loadImage("waterball11.jpg");
ini=loadImage("invisibleprince.jpg");
ini2=loadImage("invisibleprince.jpg");
ini3=loadImage("invisibleprince.jpg");
ini4=loadImage("invisibleprince.jpg");
firei=loadImage("flameedited.jpg");
 sound=loadSound("prince.m4a");
sound2=loadSound("venk.m4a");
princessi=loadImage("princess.png");
doctori=loadImage("doctor.png");
si=loadImage("syringe.png");
grfi=loadImage("grandfFather.jpg");
grdi=loadImage("grandmother.png");
meni=loadImage("men.jpg");
womani=loadImage("woman2.jpg");
corona1i=loadImage("coronaaa.png");
corona2i=loadImage("coronaaa.png");
corona3i=loadImage("coronaaa.png");
corona4i=loadImage("coronaaa.png");
hi=loadImage("happy docotr.jpg");
// zi=loadImage("zombie.jpg");
sad=loadImage("sad doctor.jpg");
bowi=loadImage("bow.png");
redbi=loadImage("redf.png");
grbi=loadImage("grbf.png");
blbi=loadImage("bluef.png");
arrowi=loadImage("arrow.png");
carnivali=loadImage("carnivaltent.png");
ci=loadImage("carnivaltent.png");
bullseye=loadImage("target.png");
carnivalsound=loadSound("carnival.m4a");
}
function setup(){

createCanvas(1900,800);

score=0;
destroyed=0;
score2=0;
Win=0;
carnivals=0;
fire=createSprite(1370,240);
fire.addImage(firei)
fire.visible=false;
fire.scale=0.3;

  

prince=createSprite(170,350,50,50);
prince.addImage(princei);
prince.scale=0.4;

princess=createSprite(1620,380,500,500);
princess.addImage(princessi);
princess.visible=false;
princess.scale=2;

target=createSprite(1370,350,50,50);
target.addImage(targeti);
target.scale=0.5;
target.velocityY = 5;
fire.depth=target.depth+1;

target.visible=true;

bulli=createSprite(100,350,50,50);
bulli.addImage(bullseye);    
  bulli.velocityY=5;
  bulli.visible=false;
  

fireball=createSprite(40,262,50,50);
fireball.addImage(fireballi);
fireball.scale=0.2;


waterball1=createSprite(520,10,50,50);
waterball1.addImage(waterball1i);
waterball1.scale=0.5;
waterball1.velocityY=6;


waterball2=createSprite(570,670,50,50);
waterball2.addImage(waterball2i);
waterball2.scale=0.5;
waterball2.velocityY=-6;


waterball3=createSprite(900,10,50,50);
 waterball3.addImage(waterball3i);
waterball3.scale=0.5;
waterball3.velocityY=6;

waterball4=createSprite(950,690,50,50);
waterball4.addImage(waterball4i);
waterball4.scale=0.5;
waterball4.velocityY=-6;

chimney1=createSprite(540,72,50,50);
chimney1.addImage(chimney1i);
chimney1.scale=0.5;

chimney2=createSprite(540,730,50,50);
chimney2.addImage(chimney2i);
chimney2.scale=0.5;

chimney3=createSprite(920,69,50,50);
chimney3.addImage(chimney3i);
chimney3.scale=0.5;

chimney4=createSprite(930,730,50,50);
chimney4.addImage(chimney4i);
chimney4.scale=0.5;

invis=createSprite(target.x,target.y-50,50,50)
invis.visible=false;
//creating button here
//To make the button visible we use button.show() - line 283
//To make the button invisible or hide it we use button.hide() - - line 128
button=createButton("Continue");
button.position(835,451);
button.style('background','red');
button.style('width','100px');
button.style('height','100px');
button.hide();

button2=createButton("Replay");
button2.position(800,400);
button2.style('background','blue');
button2.style('width','100px');
button2.style('height','100px');
button2.hide();
//sound count
count = 0;
doctor=createSprite(135,687,50,50);
doctor.addImage(doctori);
doctor.addImage("happydocotor",hi);
doctor.visible=false;


grf=createSprite(735,690,50,50);
grf.addImage(grfi);
// grf.addImage("zombie",zi);
grf.scale=0.3;
grf.visible=false;

grd=createSprite(1070,689,50,50);
grd.addImage(grdi);  
// grd.addImage("zombie",zi);                       
grd.scale=1.1; 
grd.visible=false;                           

men=createSprite(1355,689,50,50);
men.addImage(meni);
// men.addImage("zombie",zi);                       
men.scale=0.4;
men.visible=false;

woman=createSprite(1673,689,50,50);
woman.addImage(womani);   
// woman.addImage("zombie",zi);                    
woman.scale=0.3;
woman.visible=false;

corona1=createSprite(-10,-10,50,50);
corona1.addImage(corona1i);                       
corona1.scale=0.3;

corona1.visible=false;


corona2=createSprite(1517,-500,50,50);
corona2.addImage(corona2i);                       
corona2.scale=0.3;

corona2.visible=false;

corona3=createSprite(1328,-1000  ,50,50);
corona3.addImage(corona3i);                       
corona3.scale=0.3;

corona3.visible=false;

corona4=createSprite(1676,-1300,50,50);
corona4.addImage(corona4i);                       
corona4.scale=0.3;

corona4.visible=false;

syringe=createSprite(297,600,50,50);
syringe.addImage(si);
syringe.scale=0.4;
syringe.visible=false;

bow=createSprite(width-150,400,50,50);
bow.addImage(bowi);
bow.scale=3;
bow.visible=false;


//bulli.visible=false;

arrow=createSprite(1818,315,10,10);
arrow.addImage(arrowi);
arrow.scale=1;
arrow.visible=false;
arrow.debug=false;
arrow.setCollider("rectangle",0,0,arrow.width,100);

edges=createEdgeSprites();

// redb=createSprite(679,90,400,400);
// redb.addImage(redbi);
// redb.scale=0.3;
// redb.debug=true;
// redb.visible=false;

// grb=createSprite(500,90,400,400);
//  grb.addImage(grbi);
// grb.scale=0.3;

// grb.visible=false;


// blb=createSprite(679,90,400,400);
//  blb.addImage(blbi);
// blb.scale=0.3;
// blb.visible=false;

saddoctor=createSprite(306,243,50,50);
saddoctor.addImage(sad);
saddoctor.scale=0.5;
saddoctor.visible=false;

carnival=createSprite(1000,400,50,50);
carnival.addImage(carnivali);
carnival.visible=false;
carnival.scale=4;

carnival2=createSprite(1000,400,50,50);
carnival2.addImage(ci);
carnival2.visible=false;
carnival2.scale=4;
carnivalsound.play();

door1=createSprite(990,620,140,250);
door1.visible=false;
door1.shapeColor="green ";

// door2=createSprite(960,670,80,170);
// door2.visible=false;
// door2.shapeColor="green ";

// door3=createSprite(1150,670,80,170);
// door3.visible=false;
// door3.shapeColor="green ";

// topedge=createSprite(396,6,500,50);
// topedge.visible=false;

// blb.bounceOff(edges);
// grb.bounceOff(edges);

}
function draw(){ 
  // console.log(corona1.x,",",corona1.y);
  bulli.bounceOff(edges);
  // console.log(arrow.y);
  if(gameState==="Carnival"){
    //if(carnivals === 0){
      
    //}
    button2.hide();
    background("white");   
      
   
    carnival.visible=true;
    prince.visible=false;
    fireball.visible=false;
    waterball1.visible=false;
    waterball2.visible=false;
    waterball3.visible=false;
    waterball4.visible=false;
    chimney1.visible=false;
    chimney2.visible=false;
    chimney3.visible=false;
    chimney4.visible=false;
    target.visible=false;
    door1.visible=true;
    
    
    // door2.visible=true;
    // door3.visible=true;
  drawSprites();
  textSize(60);
  fill("black");
  text("Bullseye",890,391);
  ellipse(940,620,30,30);  
  // textSize(60);
  // fill("black");
  // text("2",944,556);
  // textSize(60);
  // fill("black");
  // text("3",1139,556);
  if(mousePressedOver(door1)){
    carnivalsound.stop();
    gameState="Start";
  }
  }
  if(gameState==="Start"){
    background("white");
    fill("blue");
    textSize(30);
    text("Imagine that you are a prince of Ababwa. You have come to win the hand of princess of Agrabha,",350,300);
    text("but it is not so easy.You have to clear the test set by the king to win and marry the princess",350,350);
    // text("and you have to hit the target 3 times. If you get selected  you can marry the princess.All the best and the princess is for you!!!",200,400);
    button.show();
    button.mousePressed(playing);
  }
  if(gameState==="CORONA"){
   
    // console.log("hi")
  background("white");
  button.hide();
  prince.destroy();
  princess.destroy();
  textSize(60);
  
doctor.visible=true;
syringe.visible=true;
men.visible=true;
woman.visible=true;
grf.visible=true;
grd.visible=true;
corona1.visible=true;

corona2.visible=true;
corona3.visible=true;
corona4.visible=true;
corona1.velocityX=5;
corona1.velocityY=5;
corona2.velocityX=-2;
corona2.velocityY=4;
corona3.velocityY=7;
corona4.velocityY=7;
// corona1.x=7;
// corona1.y=-200;

// score2=0
// destroyed=0;
corona();


  }
  if(gameState==="Shooting"){
// border=createEdgeSprites();
//background(0)
// bulli.bounceOff(border);

    button.hide();
    doctor.destroy();
    saddoctor.destroy();
    background("white");
    textSize(30);
    fill("purple");
    text("Hit the very centre of the target to get the Bullseye award and use space key to move the arrow",135,70);
    bow.y=World.mouseY;
    bow.bounceOff(edges);
    arrow.y=bow.y;
    // arrow.x=World.mouseX;
    // topedge.visible=true; 
    bow.visible=true;
    arrow.visible=true;
    bulli.visible = true
    //if(c==0){
   
      //c=1
    //}
    console.log(bulli.visible)
    //bulli.visible=true;
    
    //bulli.bounceOff(edges);
//  bulli.velocityY=-3;
// if(arrow.x===531&&arrow.y>280&&arrow.y<322){
//   gameState="final";
//   if(gameState==="final"){
//     arrow.velocityX=0;
//     arrow.destroy();
//     bow.destroy();
//     arrow.destroy();
//     bulli.destroy();
//     background("black");
//     textSize(60);
//     fill("yellow")
//     text("BULLSEYE!!! 🎯",800,300);
//     button2.show();
//     button2.mousePressed(again)
//   }
// }
//    if(arrow.x===531&&arrow.y<280){
//      gameState="Lose1";
//      if(gameState==="Lose1"){
//     arrow.velocityX=0;
//     arrow.destroy();
//     bow.destroy();
//     arrow.destroy();
//     bulli.destroy();
//     background("black");
//     textSize(60);
//     fill("yellow")
//     text("You lost",800,300);
//     button2.show();
//     button2.mousePressed(again);
//      }
//   }
//   if(arrow.x===531&&arrow.y>322){
//     gameState="Lose2";
//     if(gameState==="Lose2"){
//     arrow.velocityX=0;
//     arrow.destroy();
//     bow.destroy();
//     arrow.destroy();
//     bulli.destroy();
//     background("black");
//     textSize(60);
//     fill("yellow")
//     text("You lost",800,300);
//     button2.show();
//     button2.mousePressed(again);
//     }
//   }
 



// redb.visible=false;
// // redb.velocityX=5;
// // redb.velocityY=5;
// // redb.velocityY=6;
// grb.visible=true;
// grb.velocityX=-2;
// grb.velocityY=3;
// // grb.velocityY=6;
// blb.visible=true;
// blb.velocityY=6;
// blb.velocityY=6;
// if(redb.y>500){
//   redb.velocityY=-6;
// }

      if(keyDown("space")){
          arrow.visible=true;
          arrow.velocityX=-13;
      }
    //   if(arrow.isTouching(grb)){
    //    gameState="INTELLIGENT";
   
        
          
    //   }
    //      if(arrow.isTouching(redb)){
    //      gameState="CONFUSED";
     
    //   }
    //   if(arrow.isTouching(blb)){
    //     gameState="CONFUSED";
      
    //  }
    //   // if(mousePressedOver(redb)){
      //     background("black");
       
      // }
      // textSize(30);
      // fill("Pink");
      // text("Target: Shoot the balloon with text BLUE 😜",19,36);
      // textSize(30);
      // fill("Pink");
      // text("use space key to shoot the balloon ",61,67);
    drawSprites();
  
  
    // textSize(30);
    // fill("lightgreen");
    // textFont("Algerian");
    // text("G",667,66); 
    // textSize(30);
    // textFont("Algerian");
    // fill("lightgreen");
    // text("R",667,94); 
    // textSize(30);
    // textFont("Algerian");
    // fill("lightgreen");
    // text("E",667,122); 
    // textSize(30);
    // textFont("Algerian");
    // fill("lightgreen");
    // text("E",667,153); 
    // textSize(30);
    // textFont("Algerian");
    // fill("lightgreen");
    // text("N",667,179); 
  
    // textSize(30);
    // fill("red");
    // textFont("Algerian");
    // text("R",669,608); 
    // textSize(30);
    // fill("red");
    // textFont("Algerian");
    // text("E",669,649); 
    // textSize(30);
    // fill("red");
    // textFont("Algerian");
    // text("D",669,690); 
  
    // textSize(30);
    // fill("blue");
    // textFont("Algerian");
    // text("B",667,327); 
    // textSize(30);
    // fill("blue");
    // textFont("Algerian");
    // text("L",669,356); 
    // textSize(30);
    // fill("blue");
    // textFont("Algerian");
    // text("U",667,395); 
    // textSize(30);
    // fill("blue");
    // textFont("Algerian");
    // text("E",667,436); 
 
   
      }
      // if(gameState==="INTELLIGENT"){
    //     background("black");
    //     arrow.visible=false;
    //     bow.destroy();
    //     grb.visible=false;
    //     redb.visible=false;
    //     blb.visible=false;
    //     arrow.velocityX=0;
    //     textSize(40);
    //     textFont("Bahnschrift SemiBold");
    //      text("You are Intelligent 😅",700,372);
    //      button.show();
    //      button.mousePressed(aiming);
    // }
  //   if(gameState==="CONFUSED"){
  //     background("black");
  //     arrow.visible=false;
  //     bow.destroy();
  //     grb.visible=false;
  //     redb.visible=false;
  //     blb.visible=false;
  //     arrow.velocityX=0;
  //     textSize(40);
  //     textFont("Bahnschrift SemiBold");
  //     text("Oh no you got confused 😵",700,372);
  //     button.show();
  //     button.mousePressed(aiming);
  // }

//  console.log(mouseX,",",mouseY);
// console.log(gameState);
    invis.x=target.x;
    invis.y=target.y-80;
    fire.x=target.x;
    fire.y=target.y-100
//console.log(target.y)
  if(gameState==="Play"){
    
    target.bounceOff(edges);
    target.visible=true
   // bulli.visible=false;
     //target.velocityY=5
    button.hide();
    carnival.destroy();
    door1.destroy();
    // door2.destroy();
    // door3.destroy();
    background("white");
    //console.log(lifecount)
    prince.visible=true;
  chimney1.visible=true;
  target.visible=true;
  chimney2.visible=true;
  chimney3.visible=true;
  chimney4.visible=true;
  waterball1.visible=true;
  waterball2.visible=true;
  waterball3.visible=true;
  waterball4.visible=true;
 
  fireball.visible=true;
    //Controls
    textSize(20);

    fill("blue");
    text("Use arrow keys to move fireball",80,130);
    if(keyDown(UP_ARROW)){
      fireball.y=fireball.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      fireball.y=fireball.y+10;
    }
    if(keyDown(RIGHT_ARROW)){
      fireball.x=fireball.x+10
    }
    if(waterball1.y>720){
      waterball1.y=10;
    }
    if(waterball2.y<69){
      waterball2.y=670;
    }
    if(waterball3.y>720){
      waterball3.y=10;
    }
    if(waterball4.y<69){
      waterball4.y=670;
    }

    //Score increasing
    if(fireball.isTouching(invis)||fireball.x>=1380){       
      console.log("hoi");
      fire.visible=true;      
        textSize(30);
        fill("black")
        text("press R to play again",1550,220);
          if(keyDown("R") ){
            score=score+1;
            fireball.x=40;
            fireball.y=262;
            fire.visible=false;          
      }       
    }
    
    if(score===3){
    gameState="middle"
    
    }

  // if(fireball.x===1900){
  //   fireball.x=width;    
  // }
      if(fireball.isTouching(waterball1)||fireball.isTouching(waterball2)||fireball.isTouching(waterball3)||fireball.isTouching(waterball4)){
        prince.destroy();
      chimney1.destroy();
      chimney2.destroy();
      chimney3.destroy();
      chimney4.destroy();
      fireball.destroy();
      target.destroy(); 
      waterball1.destroy();
      waterball2.destroy();
      waterball3.destroy();
      waterball4.destroy();
    // fire.y=-10;

    // spelling mistake here it was gamesate
      gameState="end";
      }

    //Displaying score
    fill("red")
    textSize(30)
    text("Score:"+score,80,62);
    drawSprites();
  }
  if(gameState==="end"){
    end();     
  }
  if(gameState==="middle"){
    middle();
  }
} 
console.log(gameState);
function end(){
  background("white");
  button.show();
  button.mousePressed(coronag);
  fill("black");
  fill("red");
  textSize(60);
  text("OOPS!!!",900,300);
  if(count === 0){
    sound2.play();
    count =2;
  }    //stopSound("Voice 010.m4a");
  
}

function middle(){

  background("white");
  fill("green");
  textSize(60);
  text("Congratulations!!!",700,300);
  // count = 3;
  if(count === 0){
     sound.play();
    count = 1;
 
  }

  button.mousePressed(Level2);
  button.show();
  princess.visible=true;
  prince.visible=true;
  chimney1.visible=false;
  chimney2.visible=false;
  chimney3.visible=false;
  chimney4.visible=false;
  waterball1.visible=false;
  waterball2.visible=false;
  waterball3.visible=false;
  waterball4.visible=false;
  target.visible=false;
  // door2.visible=true;
  fireball.x=40;
  fireball.visible=false;
  fire.visible=false;
  prince.x=1379
  prince.y=390;
  doctor.visible=false;
  drawSprites();

}
function Level2(){
  gameState="Coronastory";
  if(gameState==="Coronastory"){
   sound.stop();
  background("black");
  clear();
 
  prince.destroy();
  princess.destroy();
  textSize(30);
  fill("Orange");
  text("This game is mainly designed for everybody to kill Corona virus and be happy 😉",300,300);
  button.show();
  button.mousePressed(coronagame);
  // gameState="CORONA"
  }
}
function playing(){
  gameState="Play";
}
function coronag(){
  gameState="Coronastory2";
  if(gameState==="Coronastory2"){
  sound2.stop();
  background("white");
  clear();
  textSize(30);
  fill("Orange");
  text("This game is mainly designed to kill Corona virus virtually",300,300);
  textSize(60);
  text("😉",1090,300);
  button.mousePressed(coronagame);
  score2=0;
  }
}
function coronagame(){
  gameState="CORONA";
}
function corona(){
  background("white");
  // console.log(mouseX,",",mouseY);
  fill("Blue");
  textSize(20);
  textFont("Algerian")
  text("Use arrow keys to move syringe and kill Corona and win",135,200);
  if(keyDown(RIGHT_ARROW)){
    syringe.x=syringe.x+8;
   
  }
  if(keyDown(LEFT_ARROW)){
    syringe.x=syringe.x-8;
  }
  if(keyDown(UP_ARROW)){
    syringe.y=syringe.y-8;
  }
  if(keyDown(DOWN_ARROW)){
    syringe.y=syringe.y+8;
  }
  if(syringe.isTouching(corona1)){
    corona1.destroy();
  score2++

  

  }
  if(syringe.isTouching(corona2)){
    corona2.destroy();
   score2++
  }
  if(syringe.isTouching(corona3)){
    corona3.destroy();
score2++
  }
  if(syringe.isTouching(corona4)){
    corona4.destroy();
score2++
  }
 
  if(corona1.isTouching(grf)){
    // grf.changeImage("zombie",zi);
 destroyed++
   

     
  }
  if(corona2.isTouching(grd)){
  
    // grd.changeImage("zombie",zi);
    // grd.scale=0.3;
    destroyed++
  }
  if(corona3.isTouching(men)){
    // men.changeImage("zombie",zi);
    destroyed++
  }
  if(corona4.isTouching(woman)){
    // woman.changeImage("zombie",zi);
    destroyed++
  }
  fill("red");
  textSize(60);
  textFont("Algerian")
  text("Corona destroyed :"+score2,135,99);
 
  if(score2===4){
    
// Win=Win+1;
    grf.destroy();
    grd.destroy();
    men.destroy();
    woman.destroy();
    syringe.destroy();
background("white");
doctor.x=310;
doctor.y=268;
doctor.changeImage("happydocotor",hi)
button.show();
button.mousePressed(balloon)
fill("green");
textSize(50);
textFont("Bahnschrift SemiBold");
text("Good job doctor you have saved the people from CORONA!!!",598,274)
  }

  if(destroyed>0){
        grf.destroy();
    grd.destroy();
    men.destroy();
    woman.destroy();
    syringe.destroy();
    corona1.destroy();
    corona2.destroy();
    corona3.destroy();
    corona4.destroy();
    doctor.destroy();
background("white");

saddoctor.visible=true;

button.show();
button.mousePressed(balloon);
fill("red");
textSize(50);
textFont("Bahnschrift SemiBold");
text("Oh no doctor!!Try hard next time to save all the people",598,274);
  }
  
  drawSprites();
  
}
function balloon(){
  gameState="Shooting";   
   
    // timerr=setTimeout(timer(),5000);
    // clearTimeout(timerr);
    // setTimeout(timer2(),6000)
    

// // function timer(){
// //   textSize(30);
// //   text("5",100,400)
// // }
// // function timer2(){
// //   textSize(30);
// //   text("4",100,400)
// // }

}
function aiming(){
  clear();
  button.hide();
  gameState="AIMING";   
   
if(gameState==="AIMING"){
    background("black");
    // timerr();
    if(score===3&&score2===4&&arrow.isTouching(grb)){
      Win=3;
    }
    if(score===0&&score2===4&&arrow.isTouching(grb)){
Win=2;
    }
    if(score===3&&destroyed>0&&arrow.isTouching(grb)){
      Win=2;
    }
    if(score===3&&score2===4&&arrow.isTouching(redb)){
      Win=2;
    }
    if(score===3&&score2===4&&arrow.isTouching(blb)){
      Win=2;
    }
     if(score==3&&destroyed>0&&arrow.isTouching(redb)||arrow.isTouching(blb)){
       Win=1;
     }
     if(score==0&&score2===4&&arrow.isTouching(redb)||arrow.isTouching(blb)){
      Win=1;
    }
    if(score==0&&destroyed>0&&arrow.isTouching(grb)){
Win=1;
    }
    if(score===0&&score2===0&&arrow.isTouching(redb)||arrow.isTouching(blb)){
      Win=0;
    }
    
    
    if(Win===3){
      textSize(60);
      fill("blue");
      text("Your Aiming skill:3/3 😁",550,300)
     }
  
 
  if(Win===2){
    textSize(60);
    fill("blue")
    text("Your aiming skill:2/3 😊",550,300);
  }
  if(Win===1){
    textSize(60);
    fill("blue");
    text("Your aiming skill:1/3 😐",550,300);
  }
  if(Win===0){
    textSize(60);
    fill("blue");
    text("Your aiming skill:0/3 😥",550,300);
  }
}
}
// function timerr(){
//   //if we use text() it will keept overwriting because of draw() even thought you use background()
//   timer.html(timeleft);     
//   if(timeleft === 0){
//     clearInterval(downloadTimer);
//   neram();
//   }
//   timeleft--;
// }
// function neram(){
//   gameState="NERAM";
//   if(gameState==="NERAM"){
//     clear();
//     background("white")
//     bow.destroy();
//     arrow.destroy();
//     redb.destroy();
//     grb.destroy();
//     blb.destroy();
  
//   }

 
// }
function again(){ 
  gameState="Again";
  if(gameState==="Again"){
    gameState="Carnival";
  }
}

