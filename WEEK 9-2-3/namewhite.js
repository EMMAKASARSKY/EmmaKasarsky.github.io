var sourceText = "Hi My Name is Emma. Nice To Meet You.";
function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(8);
}

function draw() {
  background(255);
  fill(255, 153, 153);
  textSize(100);
  textFont("Bodoni");
  textAlign(CENTER); 
  var middle = sourceText.length / 1;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}