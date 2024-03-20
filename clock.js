/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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
  
  background('#BAE0FF'); 

  angleMode(DEGREES)

  //Draw Tower 
  noStroke()
  fill('#BD7A77')
  rect(260, 50, 380,450)
  
  //Clock
  ellipse(450,240, 240,220)
  noStroke()
  fill('#D4D4D4')

  //Big Clock
  noStroke()
  fill('#96605A')
  rect(290,100,320,250)
  stroke ('#B88052')
 
  noStroke()
  rect(315,350,270,150)

  //Top Left Clouds Drawing 
  fill('white')
  stroke('white')
  ellipse(120,100,50,35)
  ellipse(80,100,50,35)
  ellipse(100,80,50,35)
 
   //Bottom Left Clouds Drawing 
   fill('white')
   stroke('white')
   ellipse(100,300,50,35)
   ellipse(80,320,50,35)
   ellipse(120,320,50,35)

   //Top Right Clouds Drawing 
   ellipse(850,100,50,35)
   ellipse(870,120,50,35)
   ellipse(830,120,50,35)

   //Bottom Right Clouds Drawing 
   ellipse(750,300,50,35)
   ellipse(770,320,50,35)
   ellipse(730,320,50,35)

   pop();
   
   

  fill('grey')
  ellipse(width/2.12, height/2.1,235)
  
  strokeWeight(5)
  textSize(50)
  textAlign(CENTER, CENTER);
  text(obj.seconds, width / 2, 200);




 //Draw Clock Line
 push()
 translate(450,240);
    //// drawing the  face of the clock 

 ellipse(0,0,10,10)
 rotate(PI / 3.0);
 line(50, -0.01, 20, 52);
 pop() 
   
  //O'clock
  translate(430, 200);
  rotate(360);
  strokeWeight(5);
  line(50,20,50,50,50,150,50,height)







 

  

  


   

 


   


}
