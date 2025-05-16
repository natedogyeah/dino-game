var d;
var dImg;
var sImg;
var bImg;
var cImg;
var pImg;
var dinoRunGif;
let stumps = [];
let clouds = [];
let pebbles = [];
let score = 0;
let playing;
let lastStumpX = 0; 

const MIN_STUMP_DIST = 180; 

function preload(){
  dImg = loadImage('dino.png');
  sImg = loadImage('Stump.png');
  bImg= loadImage('BG.png');
  cImg= loadImage('cloud.png');
  pImg= loadImage('pebble.png');
  dImg = loadImage('dino.png');
  dinoRunGif = loadImage('dino_run.gif');
}

function setup() {
  createCanvas(480, 200);
  background(255);
  d = new Dino();
  playing = true;
}

function draw() {
  camera.zoom = 2;
  if(playing){
    clear();
    background(255);
    stroke(0);
    strokeWeight(0.3);
    line(0, height - height/20, width, height - height/20);
    if (
      (stumps.length === 0 || width - lastStumpX > MIN_STUMP_DIST) &&
      random(1) < 0.005
    ) {
      stumps.push(new Stump(score));
      lastStumpX = width;
    }
    if(random(1) < 0.003){
      clouds.push(new Cloud()); 
    }
    if(random(1) < 0.1){
      pebbles.push(new Pebble(score)); 
    }
    for(let i = 0; i < pebbles.length; i++){
      pebbles[i].show();
      pebbles[i].move();
    }
    for(let i = 0; i < clouds.length; i++){
      clouds[i].show();
      clouds[i].move();
    }
    for(let i = 0; i < stumps.length; i++){
      stumps[i].show();
      stumps[i].move();
      if(d.hits(stumps[i])){
        console.log("Hit");
        console.log("Game over")
        playing = false;
      }
      if(!stumps[i].passed && stumps[i].x + stumps[i].w < d.x){
        stumps[i].passed = true;
        score++;
      }
    }
    if (stumps.length > 0) {
      lastStumpX = stumps[stumps.length - 1].x;
    }

    d.show();
    d.move();

    textSize(32);
    fill(100, 100, 100);
    strokeWeight(0);
    text('Score: '+ score, 10, 30);
  }
}

function restart(){
  score = 0 ;
  stumps = [];
  playing = true;
}

function keyPressed(){
  if(key === ' ' && playing){
    d.move();
    d.jump();
  }
  if(key === ' ' && !playing){
    restart();
  }
}