var sourceText = "I Am An Art Director.";
var curIndex = 0;

function setup() {
   createCanvas(windowWidth, windowHeight);
   frameRate(8);
 }

function draw() {
  background(50);
  fill(255, 153, 153);
  textFont("Bodoni");
  textSize(300);
  textAlign(CENTER); 
  text(sourceText.substring(curIndex, curIndex+1), width/2, height/2);
  curIndex++;
  if (curIndex > sourceText.length) {
    curIndex = 0;
  }
}