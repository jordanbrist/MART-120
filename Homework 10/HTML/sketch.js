var headX = 250;
var headY = 200;
var headDirection = 10;

var squareX = 115;
var squareY = 410;
var squareDirection = 4;

var rectX = 180;
var rectY = 410;
var rectDirection = 6;

var handRightX = 140;
var handRightY = 400;
var handRightDirection = 3;

var handLeftX = 340;
var handLeftY = 400;
var handLeftDirection = 5;

var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(200,255,200);
    

    // Chair
    noStroke();
    fill(50);
    rect(150, 175, 200, 400, 20, 20);
    triangle(80, 420, 250, 125, 420, 420)

    // head
    stroke(1);
    strokeWeight(5);
    fill(1000);
    circle(headX,headY,150);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
   
    // eyes
    stroke(1);
    strokeWeight(5);
    fill(1);
    circle(220,200,10);
    circle(280,200,10);
    
    // mouth
    stroke(1);
    strokeWeight(5);
    line(220, 240, 280, 240);

    // body
    stroke(1);
    strokeWeight(5);
    line(250,275,250,450);
    
    
    // desk
    fill(180,150,100);
    noStroke();
    rect(0,420,500,180);

    // mouse (using mouse as a variable makes it interact with the cursor...)
    fill(20);
    noStroke();
    rect(squareX,squareY,40,40,15);
    squareX+=squareDirection;
    if(squareX >= 140 || squareX <= 82)
    {
        squareDirection *= -1;
    }

    // keyboard
    fill(20);
    noStroke();
    rect(rectX,rectY,200,50);
    rectX+=rectDirection;
    if(rectX >= 300 || rectX <= 100)
    {
        rectDirection *= -1;
    }
    rectY += rectDirection;
    

    // right arm
    stroke(1);
    strokeWeight(5);
    fill(1000);
    line(200,300,300,300);
    line(200,300,150,375);
    line(150,375,140,400);
    circle(handRightX,handRightY,40);
    handRightY += handRightDirection;
    if(handRightY <= 0 || handRightY >= 450 )
    {
        handRightDirection *= -1;
    }

    // left arm
    stroke(1);
    strokeWeight(5);
    fill(1000);
    line(300,300,350,375);
    line(350,375,340,400);
    circle(handLeftX,handLeftY,40);
    handLeftY += handLeftDirection;
    if(handLeftY <= 0 || handLeftY >= 450 )
    {
        handLeftDirection *= -1;
    }

    
    
    noStroke()
    fill(0, 102, 153);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Jordan Brist', 10, 30);


}
