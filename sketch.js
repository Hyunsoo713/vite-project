function setup() {
  initializeFields();
  createCanvas(500, 500);
}

function draw() {
  noStroke();
  fill(color(255, 200, 50));
  rect(80, 150, 350, 250);
  fill(color(255, 200, 50));
  quad(80, 145, 430, 145, 410, 100, 100, 100);
// fill(255);
// rect(230,150,50,250);
// fill(255);
// quad(230,145,280,145,270,100,240,100);
}

function mousePressed() {
  noStroke();
  fill(color(255, 200, 50));
  rect(80, 150, 350, 250);
  fill(color(255, 200, 50));
  quad(80, 145, 430, 145, 410, 100, 100, 100);
  fill(color(255, 200, 50));
  quad(70, 145, 90, 100, 80, 60, 50, 70);
  fill(color(255, 200, 50));
  quad(440, 145, 460, 70, 430, 60, 420, 100);
}

function initializeFields() {
}

