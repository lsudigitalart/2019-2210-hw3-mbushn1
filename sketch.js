//function setup() {
    //createCanvas(windowWidth,windowHeight);
   // var redC= 255;
    //var greenC= 0;
    //var blueC = 0;
     
    //background(0,175,175);
    
var interval = .02

let t = 0;
var r=0;
var g=0;
var b=0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  fill(0,0,0);
}

function draw() {
  background(10,10);

  //loop
  for (let x = 0; x <= width; x = x + 75) {
    for (let y = 0; y <= height; y = y + 75) {
      //grid
      const xAngle = map(mouseX, 0, width, 0* PI, 6 * PI, true);
      const yAngle = map(mouseY, 0, height, 0 * PI, 6 * PI, true);
      //particle location 
      const angle = xAngle * (x /width) + yAngle * (y /height);

      //particle movement
      const myX = x + 35 * cos(20 * PI * t + angle);
      const myY = y + 35 * -1/sin(.1 * PI * t + angle);
      


      
      fill(r,g,b);
      ellipse(myX, myY,8,8);

      if(t % (3*interval) < interval){ //red
          r = (t % interval)/interval * 256
      }
      else if(t % (3*interval) < 2*interval){ //green
         g = (t % interval)/interval * 256
      }
      else if(t % (3*interval) < 3*interval){ //blue
         b = (t % interval)/interval * 256
      }

    }
  }

  t = t + 0.001;
}

