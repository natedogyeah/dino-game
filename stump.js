class Stump {
  constructor(score) {
    this.x = width;
    this.y = height - 50; 
    this.w = 30; 
    this.h = 50; 
    this.speed = 6 + score * 0.25;
    this.passed = false;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(sImg, this.x, this.y, this.w, this.h);
  }
}