/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
var Xmove = 1;
var Ymove = 1;
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  

  if(obj.seconds > 5){
    background('orange'); 
  }
  else{
    background('#DFF4F3'); // blue
    }
    angleMode(RADIANS)

    

  
 //Draw clock line 
 //line(2+Ymove,2,20,20);
 //line(2+Xmove,2,2,40)


  //Draw Tower 
  noStroke()
  fill('#BD7A77')
  rect(260, 50, 380,450)
  
  //Big Clock
  noStroke()
  fill('#96605A')
  rect(290,100,320,250)
  stroke ('#B88052')
 
  noStroke()
  rect(315,350,270,150)

  if(obj.seconds_until_alarm < 0){
  }else{ 
    background('#ffd1d4'); // pink
    textSize(50)
    text("DAYLIGHT", 70, height/2)
    text("SAVING", 610, height/2)
    fill ('white')

}

  //Top Left Clouds Drawing 
  noStroke()
  fill('white')
  ellipse(60+Xmove,100,50,35)
  ellipse(20+Xmove,100,50,35)
  ellipse(40+Xmove,80,50,35)
  
  //Bottom Left Clouds Drawing
   noStroke() 
   fill('white')
   ellipse(40+Xmove,300,50,35)
   ellipse(20+Xmove,320,50,35)
   ellipse(60+Xmove,320,50,35)

   //Top Right Clouds Drawing 
   ellipse(770-Ymove,90, 50,35)
   ellipse(750-Ymove,110,50,35)
   ellipse(790-Ymove,110,50,35)

   //Bottom Right Clouds Drawing 
   ellipse(870-Ymove,300,50,35)
   ellipse(850-Ymove,320,50,35)
   ellipse(890-Ymove,320,50,35)

  

  fill('grey')
  ellipse(width/2.12, height/2.1,235)
  
  strokeWeight(5)
  textSize(50)
  textAlign(150, 400,400);
  text(obj.seconds, width / 2.27, 420);


 //Draw Clock Line
 push()
 translate(width / 2.1, height / 2);
    //// drawing the face of the clock 
  
    
 fill ('white')
 ellipse(-0,0,30,30)
 rotate(200 , 300);
 stroke('white')
 line(50,90,-4, -0)
 line(50,10,-4, -7)
  
  //O'clock
  //translate(130, 200);
  //rotate(20);
  //strokeWeight(5);
  //line(5,15,25,50,50,150,50,height)

  //fill('white')
 

  Xmove = Xmove + 1;
  
  if(Xmove > 200){
    Xmove = 200;

  Ymove = Ymove + 1
  if(Ymove > 200){
    Ymove = 200;

  }
  }




}
