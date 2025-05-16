class Pebble {
  constructor(score) {
    this.x = width;
    this.y = height - random(12, 20);
    this.w = 20;
    this.h = 20;
    this.speed = 6 + score * 0.25;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(pImg, this.x, this.y, this.w, this.h);
  }
}