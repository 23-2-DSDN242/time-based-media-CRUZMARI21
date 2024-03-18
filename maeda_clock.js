// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
// YOUR MAIN CLOCK CODE GOES HERE
  background('#002A32'); 

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

}