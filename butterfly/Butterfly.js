function Butterfly(x, y, img) {
  this.x = x;
  this.y = y;
  this.img = img;
  this.lifespan = 255;
  this.r = 2;
  this.arr = [-1.0, 1.0];
  this.sc = 1;
  this.trans = 1;


  this.clicked = function() {
    this.r = random(0.1, 2);
    this.sc = floor(random(-1, 1));
    if(this.sc === 0) { // using the translate to shift over the display window with image flip
      this.sc = 1;
      this.trans = 1;
    }
    if(this.sc < 0){
      this.trans = width;
    }
    print(this.sc);
    print(this.trans);
  }

  this.display = function() {
    tint(255, this.lifespan);
    imageMode(CENTER);
    push();
    translate(this.trans, 1); // used translate plus shift(in pixels) reverses click placement
    scale(this.sc, 1); // removed the this.arr, not sure what it was doing.
    image(this.img, this.x, this.y, img.width / this.r, img.height / this.r);
    pop();
    //fill(0);
    // ellipse(this.x, this.y, 75, 75);
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan += -1;
  }
}