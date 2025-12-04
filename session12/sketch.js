

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background('#52C2FC');
//Take each fish out from the group？ and then draw it.
  for (let fish of fishes) {
    drawFish(fish);
  }
}
//Position
let fishes = [
  {x: 100, y: 150, size: 1.0},
  {x: 250, y: 280, size: 0.8},
  {x: 180, y: 80, size: 1.2},
  {x: 300, y: 80, size: 0.8},
  {x: 300, y: 150, size: 1.0},
  {x: 150, y: 300, size: 1.2}
];
function drawFish(fish) {
  // Follow the mouse
  let dx = mouseX - fish.x;
  let dy = mouseY - fish.y;
  let angle = atan2(dy, dx);

  push();
  translate(fish.x, fish.y);
  rotate(angle);

  // Fish body
  fill('#A2DEFD');
  //ellipse(x, y, w, h)
  ellipse(0, 0, 50 , 25 );

  // Tail
  fill('#3AA0E0');
  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(-25 , 0, -40 , -10 , -40 , 10);

  // Eye
  fill(255);
  ellipse(15 , -5 , 12 );
  fill(0);
  ellipse(17 , -5 , 6 );

  pop();
}