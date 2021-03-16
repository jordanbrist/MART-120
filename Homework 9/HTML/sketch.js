function setup()
{
    createCanvas(500, 600);
}
function draw()
{
    background(200,255,200);
    noStroke();
    fill(50);
    rect(150, 175, 200, 400, 20, 20);
    triangle(80, 420, 250, 125, 420, 420)
    stroke(1);
    strokeWeight(5);
    line(250,275,250,450);
    fill(180,150,100);
    noStroke();
    rect(0,420,500,180);
    fill(20);
    rect(180,410,200,50);
    rect(115,410,40,40,15);
    stroke(1);
    strokeWeight(5);
    fill(1000);
    circle(250,200,150);
    line(200,300,300,300);
    line(200,300,150,375);
    line(300,300,350,375);
    line(150,375,140,400);
    line(350,375,340,400);
    circle(340,400,40);
    circle(140,400,40);
    fill(1);
    circle(220,200,10);
    circle(280,200,10);
    line(220, 240, 280, 240);
    noStroke()
    textSize(32);
    fill(0, 102, 153);
    text('Jordan Brist', 10, 30);
}
