var canvas = document.getElementById ('canvas');
var person = prompt("Please, enter your name!", "Max 10");
if (person != null  &&  person.length <= 10) {
        document.getElementById("name").innerHTML =
        "Hi " + person + "!";
}
else 
{
location.reload();
}

var context = canvas.getContext('2d');
context.lineWidth = 5;
context.lineCap='round';
var down = false;
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown',function()
{
    down = true;
    context.beginPath();
    context.moveTo(xPos, yPos);
    canvas.addEventListener('mousemove',draw);
});

canvas.addEventListener('mouseup',function(){ down = false; });

function draw (e)
{
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    if (down == true)
    {
        context.lineTo(xPos, yPos);
        context.stroke();
        context.strokeStyle = color;
    }
}
var color = "black";
function change(e) { color=this.value; }
function clearCanvas() { context.clearRect(0, 0, canvas.width, canvas.height); }
function changeBrushSize(size) {context.lineWidth = size;}
function fillCanvas () { context.fillRect(0, 0, canvas.width, canvas.height);}
function triggerClick() {document.getElementById('file').click();}
function changeBrushStyle(brushStyle) {context.lineCap=brushStyle;}
document.getElementById("color").onchange = change;

		function start(e){
		  var mouseX = e.pageX - canvas.offsetLeft;
		  var mouseY = e.pageY - canvas.offsetTop;
		  paint = true;
		  ctx.beginPath();
		  ctx.moveTo(mouseX,mouseY);
		  points[points.length]=[mouseX,mouseY];
		};
document.getElementById('file').addEventListener('change', function(e)
{
    clearCanvas();
    URL = URL || webkitURL;
    var temp= URL.createObjectURL(e.target.files[0]);
    var image= new Image ();
    image.src= temp;

    image.addEventListener('load',function()
    {
        imageWidth=image.naturalWidth;
        imageHeight=image.naturalHeight;
        newImageWidth=imageWidth;
        newImageHeight=imageHeight;
        originalImageRatio=imageWidth / imageHeight;

        if(newImageWidth > newImageHeight && newImageWidth > 800)
        {
            newImageWidth=1360;
            newImageHeight=629;
        }
        if((newImageWidth >= newImageHeight || newImageHeight > newImageWidth) && newImageHeight > 500)
        {
            newImageHeight=629;
            newImageWidth=newImageWidth;
        }
        context.drawImage(image, 0, 0, newImageWidth, newImageHeight);
        URL.revokeObjectURL(temp);
    });
});
