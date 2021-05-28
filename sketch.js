var btn_red;
var btn_green;

var r
var g
var b


function setup() {
  createCanvas(400, 400);  

  btn_red=createButton("RED")
  btn_red.position(100,100)
  

  btn_green=createButton("GREEN")
  btn_green.position(200,100)
  btn_green.mousePressed(green1)


  
}

function draw() {
  background(btn_green);


}


function green1(){
  r=0
  g=255
  b=0
}
