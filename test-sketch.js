function setup() {
  createCanvas(400, 400);
}

function draw(){
  background (120,128,100);
  var offset = 70;
  line(150,20,20,120);
  line(150,20,260,120);
  line(260,120,200,250);
  line(20,120,70,250)
  line(70,250,200,250)
  fill(99,99,99,256);
  ellipse(80+offset,98,40,40);
  ellipse(220,168-offset,20,20);
  fill(10,10,10)
}