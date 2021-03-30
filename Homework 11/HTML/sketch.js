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
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 100;
var shape2Y = 350;
var shape2XSpeed;
var shape2YSpeed;

var shape3X = 10;
var shape3Y = 50;
var shape3XSpeed;
var shape3YSpeed;

// create a shape on mouse click
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(500, 600);
    // random speed on start
    shapeXSpeed - Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shapeYSpeed - Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 1);

    shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
    shape3YSpeed = 1;
}

function draw()
{
    background(0,150,175)
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0,height-10,width,10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit
    textSize(16);
    text("EXIT", width-50, height-50)

    // character
    fill(75,0,100);
    circle(characterX,characterY,25);

    // keys
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

    // obsatcles
    fill(0);
    circle(shapeX, shapeY, 15);
    fill(1000);
    circle(shape2X, shape2Y, 10);
    fill(20,20,200);
    circle(shape3X, shape3Y, 20);

     // get random speed on start
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);

     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);

     shape3XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
     shape3YSpeed = 1;

    // move shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    shape2X -= shape2XSpeed;
    shape2Y -= shape2YSpeed;

    shape3X += shape3XSpeed;
    shape3Y += shape3YSpeed;

    // check if shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }

    if(shape3X > width)
    {
        shape3X = 0;
    }
    if(shape3X < 0)
    {
        shape3X = width;
    }
    if(shape3Y > height)
    {
        shape3Y = 0;
    }
    if(shape3Y < 0)
    {
        shape3Y = height;
    }

    // check if character has left exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // shape created on mouse click
    fill(200,0,0);
    rect(mouseShapeX, mouseShapeY, 25, 25);
}

    function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }