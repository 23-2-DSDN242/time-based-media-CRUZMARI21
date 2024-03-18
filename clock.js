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

  //Draw Tower 
  fill('#876049')
  stroke ('#876049')
  rect (260, 50, 380,450)
  
  //Big Clock
  fill('#BF8F73')
  stroke('#BF8F73')
  rect(289,60,320,250)
  stroke ('#B88052')
 
  rect(315,350,270,150)
  stroke('#B88052')
 
  
  fill('white')
  strokeWeight('white');
  ellipse(200, 50, 33, 33); // Left circle
  push();
  fill('white');
  ellipse(233, 50, 33, 33);

  
  //Clock
  fill('#E9BA96')
  stroke('#B88052')
  ellipse(450,185, 240,220)

 

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

   ellipse(0, 50, 33, 33); // Left circle
   push(); // Start a new drawing state
   strokeWeight(15);
   fill(204, 153, 0);
   ellipse(33, 50, 33, 33); // Left-middle circle

   translate(width / 2.3, height / 3);
   rotate(PI / 3.0);
   line(50, -26, 52, 52);
   



  
  


  

}
