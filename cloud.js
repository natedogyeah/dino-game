class Cloud {
  constructor() {
    this.x = width;
    this.y = height - random(100, 150);
    this.w = 30;
    this.h = 30;
  }

  move() {
    this.x -= 2;
  }

  show() {
    image(cImg, this.x, this.y, this.w, this.h);
  }
}