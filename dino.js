class Dino{
  
  constructor(){
    this.size = 45;
    this.x = this.size;
    this.y = height - this.size;
    this.velocity = 0;
    this.gravity = 0.75;
  }
  
  show() {
    if (this.onGround()) {
      image(dinoRunGif, this.x, this.y, this.size, this.size);
    } else {
      image(dImg, this.x, this.y, this.size, this.size);
    }
    // noFill();
    // stroke(255, 0, 0);
    // rect(this.x, this.y, this.size, this.size);
  }

  onGround(){
    return this.y == height - this.size;
  }

  jump(){
    if(this.y == height - this.size ){
      this.velocity = -12.5;
    }
  }
  move(){
    this.y+= this.velocity;
    this.velocity +=this.gravity;
    this.y = constrain(this.y,0,height - this.size)
  }
  
  hits(stump) {
    return (
      this.x < stump.x + stump.w &&
      this.x + this.size > stump.x &&
      this.y < stump.y + stump.h &&
      this.y + this.size > stump.y
    );
  }
}