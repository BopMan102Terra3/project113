function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}

function draw()  
{
  
    image(video, 150, 80, 300, 250);

    stroke(168, 10, 10);
    fill(168, 10, 10);

    circle(40, 40, 50);
    circle(585, 40, 50);
    circle(40, 360, 50);
    circle(585, 360, 50);

    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 500, 25);
    rect(63, 347, 500, 25);
    rect(27, 63, 25, 275);
    rect(575, 63, 25, 275);
  }

function take_snapshot()
{
    save('ocean.png');
}

