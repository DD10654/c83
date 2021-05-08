canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
colour = "red";
width_of_line = "2";
radius = "20";
mouseEvent = "empty";


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown()
{
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup()
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave()
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
    console.log("Current Mouse Positions, X = " + mouse_x + " and Y = " + mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width_of_line;
    ctx.arc(mouse_x, mouse_y, radius , 0 , 2*Math.PI);
    ctx.stroke();
    }
}
//C83
var width = screen.width;

    phone_width = screen.width - 70;
    phone_height = screen.height - 300;
    if(width < 992){
        document.getElementById("mycanvas").width = phone_width;
        document.getElementById("mycanvas").height = phone_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart()
    {
        mouseEvent = "mousedown";
    }

    canvas.addEventListener("touchend", my_touchend);
    
    function my_touchend()
    {
        mouseEvent = "touchend";
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e)
    {
   
        phone_x = e.touches[0].clientX - canvas.offsetLeft;
        phone_y = e.touches[0].clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(phone_x, phone_y, radius , 0 , 2*Math.PI);
        ctx.stroke();
    }

    }