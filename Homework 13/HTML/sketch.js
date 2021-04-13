var characterX = 100;
var characterY = 100;

// key codes for wasd
var w = 87
var s = 83;
var a = 65;
var d = 68;

// x and y for shape
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeed = [];
var shapeYSpeed = [];


// create a shape on mouse click
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600); 

    // random speed on start
    for (var i = 0; i < 9; i++)
    {
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1)
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1)
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
        }
    
    
    createPlayer(200,350);
}

function draw()
{
    // canvas background
    background(0,150,175)
    stroke(0);
    fill(0);
    
    // createBorders
    createBorders(10);

    // exit
    createExit();

    // character
    drawPlayer();

    // player movement
    playerMovement();
    
    // obsatcles
    createObstacles();

    // check if character has left exit
    checkExit();

    // shape created on mouse click
    mouseClickShape();

}

function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0,height-thickness,width,thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function createPlayer(x, y)
{
    characterX = x;
    characterY = y;
}

function drawPlayer()
{
    fill(100,0,0);
    circle(characterX,characterY,25);
}


function playerMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}

function createBorders()
{
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0,height-10,width,10);
    // right upper border
    rect(width-10,0,10,height-50);
}

function createExit()
{
    textSize(16);
    text("EXIT", width-50, height-50)
}

function checkExit()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

function mouseClickShape()
{
    fill(200,20,5);
    circle(mouseShapeX, mouseShapeY, 25);
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}


function createObstacles()
{
    
    
    fill(random(0,255), random(0,255), random(0,255));
    for (let i = 0; i < shapeXs.length; i++){
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
        shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

        //move shape
        shapeXs[i] += shapeXSpeed[i];
        shapeYs[i] += shapeYSpeed[i];
        
        // check if shape has gone out of bounds
        if(shapeXs[i] > width)
        {
            shapeXs[i] = 0;
        }
        if(shapeXs[i] < 0)
        {
            shapeXs[i] = width;
        }
        if(shapeYs[i] > height)
        {
            shapeYs[i] = 0;
        }
        if(shapeYs[i] < 0)
        {
            shapeYs[i] = height;
        }
    }
}

  