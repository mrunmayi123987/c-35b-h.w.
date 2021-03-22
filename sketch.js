var balloon,balloonImage1,balloonImage2;
// create database and position variable here

var database;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
    database=firebase.database();
  createCanvas(1500,700);


  //database=firebase.database();


  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  var ballPosition=database.ref('ball/position');
  ballPosition.on("value", readPosition,showerror);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
changePosition(-10,0);
balloon.scale = balloon.scale  -0.01;

  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
    changePosition(10,0);
    balloon.scale = ballon.scale -0.01;

  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    changePosition(0,-10);
    balloon.scale = balloon.scale -0.01;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
    changePosition(0,10);
    balloon.scale = balloon.scale -0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

 // var balloonPosition=database.ref ('balloon/position');
  //balloonPosition.on("value",readPosition , showError)
}

function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readPosition(data){
  position=data.val();
  ball.x=position.x;
  ball.y=position.y;
 }

 function writePosition(x,y){
  database.ref('ball/position').set({
      x:position.x+x,
      y:position.y+y
  })


 }

 function showerror(){
  console.log("errori in writing database");
 }