// lights
var y = 5;

// text
var size = 22;

var textX1 = 70
var textY1 = 550

var textX2 = 110
var textY2 = 625

var textDirection = 5



function setup()
{
    createCanvas(550, 700);
    frameRate(12);
}

function draw()
{
    // canvas background
    background(220,220,245);
    stroke(0);
    fill(0);
    
    // trees
    createTrees();
    
    // text
    createText();
  
    // borders
    createBorders(20);
    
    // name
    createSignature();
  
    // ufo
    createUFO();
  
}


function createTrees()
{
  strokeWeight(5);
  stroke(25, 35, 20);
  randomSeed()

  // random lines - horizontal
  for (let y = 70; y < 200; y++) {
  let x = randomGaussian(10, 20);
  line(0, y, x, y);
}
  for (let y = 200; y < 390; y++) {
  let x = randomGaussian(35, 30);
  line(0, y, x, y);
}
  for (let y = 390; y < 550; y++) {
  let x = randomGaussian(80, 30);
  line(0, y, x, y);
}
  for (let y = 400; y < 700; y++) {
  let x = randomGaussian(270, 10);
  line(270, y, x, y);
}
  for (let y = 400; y < 700; y++) {
  let x = randomGaussian(350, 15);
  line(350, y, x, y);
}
   for (let y = 370; y < 700; y++) {
  let x = randomGaussian(310, 15);
  line(310, y, x, y);
}

  // random lines - vertical
  for (let x = 0; x < 600; x++) {
  let y = randomGaussian(470, 15);
  line(x, 700, x, y);
}
   for (let x = 220; x < 270; x++) {
  let y = randomGaussian(445, 15);
  line(x, 700, x, y);
}
   for (let x = 450; x < 600; x++) {
  let y = randomGaussian(430, 15);
  line(x, 700, x, y);
}
  for (let x = 350; x < 600; x++) {
  let y = randomGaussian(460, 15);
  line(x, 700, x, y);
}
  for (let x = 260; x < 350; x++) {
  let y = randomGaussian(415, 15);
  line(x, 700, x, y);
}
  
}



function createBorders(thickness)
{
    noStroke();
    fill(1000);
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0,height-thickness,width,thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);
    
    // border for the border
    stroke(0);
    strokeWeight(1);
    line(0, 0, 0, 700)
    line(550, 0, 550, 700)
    line(0, 0, 550, 0)
    line(0, 700, 550, 700)
}

function createUFO()
{
    scale(0.85);
    noStroke();
    fill(95);
    translate( width / 5, height / 40);
    rotate(PI / 25.0);

    // top
    rect(200, 105, 132, 70, 35, 35, 10);
    quad(210, 115, 320, 115, 370, 150, 160, 150);
    // middle - top
    fill(100)
    quad(160, 149, 370, 149, 480, 180, 50, 180);
    // middle
    fill(80);
    rect(48, 179, 433, 10, 15);
    // bottom
    fill(40);
    ellipse(265, 216, 208, 40);
    // middle - bottom
    fill(50);
    quad(50, 188, 480, 188, 370, 219, 160, 219);
    // highlights
    fill(1000);
    quad(225, 110, 250, 110, 230, 145, 175, 145);
    quad(175, 152, 230, 152, 160, 175, 80, 175);
  
    // blinking lights
    fill(random(0,255), random(0,255), random(0,255));
    for(let i = 55; i < 480; i += 30){
    circle(i, 184, y);
    if (y == 5){
    fill(random(0,255), random(0,255), random(0,255));
    y = y - 5;
  }
  
  else if (y == 0){
    y = y + 5;
  }
  }
    
}

function createText()
{
    fill(1000);
    stroke(1000);
    strokeWeight(1);
    textFont('arial black', 70);
    text('I WANT TO', textX1, textY1);
    text('BELIEVE', textX2, textY2);
  
    // text movement
    // top text
    textX1 +=textDirection;
    if(textX1 >= 110 || textX1 <= 30)
    {
        textDirection *= -1;
    }
    
    // bottom text
    textX2 +=textDirection;
    if(textX2 >= 100 || textX2 <= 20)
    {
        textDirection *= -1;
    }
}

function createSignature()
{
  stroke(1);
  strokeWeight(1);
  fill(1000);
  textSize(size);
  text('Jordan Brist', 382, 697);

}