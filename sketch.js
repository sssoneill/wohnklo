var butterflies = [];
var butter;
var b;

function preload() {
  butter = loadImage('images/butterfly2.png');
}

function setup() {
  createCanvas(600, 600);
  /*for (var j = 0; j < 20; j++) {
    var b = new Butterfly(random(width), random(height), butter);
    butterflies.push(b);
  }*/
}

function mousePressed() {
  b = new Butterfly(mouseX, mouseY, butter);
  butterflies.push(b);
   b.clicked();

}

//function mouseRelease(){
 // b.rest();
//}

function draw() {
  background(255);
  for (var i = butterflies.length - 1; i >= 0; i--) {
    butterflies[i].update();
    butterflies[i].display();
    if (butterflies[i].lifespan < 0) {
      butterflies.splice(i, 1);
    }
  }
}
