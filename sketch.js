function setup() {
  createCanvas(innerWidth, innerWidth);
strokeWeight(5);
  frameRate(3)//x frames/sec
}



function draw() { 
  
var margin =40;
var width = innerWidth - 2*margin;
var height = innerWidth - 2*margin;
  
var shift = 5
var space = 5;
var numSquares = 3;
var sideLen = width/numSquares;
  translate(margin, margin); 
for(var y=0; y<height; y = y+sideLen){
  for(var x=0; x<width; x = x+sideLen){
    fill(random(0,255),50,75);
          //fill(random(0,255),50,75);                              
  quad(x + space+random(-shift, shift),y + space +random(-shift, shift), 
       x+sideLen-space+random(-shift, shift),y + space+random(-shift, shift),
       x+sideLen-space,y+sideLen-space+random(-shift, shift), 
       x+space+random(-shift,shift),y+sideLen-space);
  }
}
  //noLoop();
}