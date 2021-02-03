canvas=document.getElementById("Canvas1");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(400,300,30,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",Draw)
function Draw(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    createCircle(mouse_x,mouse_y);
}
function createCircle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(x,y,30,0,2*Math.PI);
    ctx.stroke();   
}
function ClearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
