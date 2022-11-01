var mouseevent = "";


canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "black";
lineWidth = 2;
bgcolor = "white";

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e) {
  color = document.getElementById("color").value;
lineWidth = document.getElementById("lineWidth").value;
bgcolor = document.getElementById("background").value;
document.getElementById("canvas").style.backgroundColor = bgcolor;
mouseevent = "mousedown";
mouse_x = e.clientX - canvas.offsetLeft;
  mouse_y = e.clientY - canvas.offsetTop;
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){

  if(mouseevent=="mousedown"){
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
  ctx.stroke();
}
  }


canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
  mouseevent="";
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
  color = document.getElementById("color").value;
  lineWidth = document.getElementById("lineWidth").value;
  bgcolor = document.getElementById("background").value;
  document.getElementById("canvas").style.backgroundColor = bgcolor;

  last_y = e.touches[0].clientY - canvas.offsetTop;
  last_x = e.touches[0].clientX - canvas.offsetLeft;
}

canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e) {
  current_y = e.touches[0].clientY - canvas.offsetTop;
  current_x = e.touches[0].clientX - canvas.offsetLeft;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;

  ctx.moveTo(last_x, last_y);
  ctx.lineTo(current_x, current_y);
  ctx.stroke();

  last_x = current_x;
  last_y = current_y;
}

function clearArea() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
