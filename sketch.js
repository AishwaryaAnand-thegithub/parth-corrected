
var button, buttonImage;
var date 
var time 
var hr 
var flag=0
var subject_Name;
var meetingID_English = "abdcefgh";
var password_English = 1234;
var link_English= "www.zoom.com"
function preload(){
  buttonImage = loadImage("click.png")
}

function setup(){
  var info = new Date();
date= info.toDateString();
time = info.toTimeString();
hr = info.getHours();
  createCanvas(400,400);
  button = createSprite(200,200,50,50);
  button.scale= 0.5
  button.addImage(buttonImage);
  button.visible = true;
}

function draw(){
  background(220);
  text("Click to know subject details",130,20);
  text("Date: "+date, 30,50);
  text("Time: "+time ,30,70)

  if(mousePressedOver(button) && hr===12){
   
      flag=1
  }
  // console.log(flag)
  if(flag==1){
    button.visible = false;


  }
  drawSprites();
  if(flag==1){
    subject_Name = "English"
    button.visible = false;
    text("Subject: "+subject_Name, 150,200);
    text("Meeting ID: "+ meetingID_English, 150,230);
    text("Meeting password: "+password_English, 150,250);
    text("Meeting Link: "+link_English,150, 270)
  }
  
}


