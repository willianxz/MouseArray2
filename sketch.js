var mouseXPositions = [];
var mouseYPositions = [];
var posicao = 0;
var totalLuzes = 10;

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  var sorte = random(0.1, 0.2);  
  strokeWeight(10);
  stroke(0, 127 + 127*sin(frameCount*sorte), 0);
  for(var x = 0; x < mouseXPositions.length; x++){ 
       ellipse(mouseXPositions[x], mouseYPositions[x], 30, 30);
  }
  
 
  textSize(18);
  textAlign(CENTER);
  fill(0, 255, 0);
  noStroke();
  text("Total Lights",width/2 - 578, height/2 - 275); 
  strokeWeight(3);
  stroke(0, 255, 0);
  noFill();
  rect(width/2 - 630, height/2 - 270, 100,80);
  fill(0, 255, 0);
  textSize(50);  
  text(totalLuzes, width/2 - 583, height/2 - 215); 
 
  mouseXPositions[posicao] = mouseX;
  mouseYPositions[posicao] = mouseY;
  posicao++;
  
  if(posicao > totalLuzes){
    posicao = 0;
  }

}

function mousePressed(){
  totalLuzes++; 
}
