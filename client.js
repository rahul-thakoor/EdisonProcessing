var socket = io();		      // socket.io instance. Connects back to the server
var deg, rad;           // readings from the server

function setup() {
  createCanvas(500, 500);   // set up the canvas
  x = width/2;              // set X and Y in the middle of the screen
  y = width/2;
}

function draw() {
  background(255);          // make the screen white
  var fillColor = 127;      // set the fill color to black
  noStroke();
  fill(50,60,0);          // set the fill color
  ellipse(30, 30, 30, 30);    // draw the ellipse
}


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 30, 30);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
     socket.emit('led',"on");
      console.log('led');
  }
}

/*function readData (data) {
  deg = data.deg;                 // x is the first value
  rad = data.rad;                 // y is the second value
    console.log(deg+","+rad);
}

// when new data comes in the websocket, read it:
socket.on('message', readData);*/