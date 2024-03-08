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
  
  background('#3EC6DE'); 

  //Draw Tower 
  triangle(330, 375, 358, 320, 386, 375)
  fill('Brown')

  stroke('#AC897D')
  rect (260, 50, 380,450)
  fill('#AC897D')
  
  //Big Clock
  fill('white')
  ellipse(450,250,264,250)

  //Clock Pointer
  fill('black')
  stroke('black')
  ellipse(450,250,10,10)

  

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



  
  


  

}
