let pg1, pg2;
let img; 
function setup() {
  var c = createCanvas(600,600);
  c.parent("canvasWrapper");
  img=loadImage("miLienzo (2).png");
  pg1=createGraphics(600,600);
  pg2=createGraphics(600,600);
}
function draw() {
  var c = get (mouseX, mouseY);
  pg2.background(img);  
  //pg2.image(img,0,0);
  pg1.noStroke();
  pg1.fill(c);
  //pg1.ellipse(width/2,height/2,300,300);
  pg1.ellipse(mouseX, mouseY, 30,30);
  image(pg2,0,0);
  image(pg1, 0,0);
}
function saveIMG(){
  clear();
  image(pg1, 0,0);
  save("cercle.png");

}
function keyPressed(){
  if(key === "s" || key === "S"){
    saveIMG();
  }
}