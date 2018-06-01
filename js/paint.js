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
var color = "rgb(255,0,0)";
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
function canvasWhite() {
 document.getElementById("fillicon").style.color = "white";
}
 function colorWhite() {
 document.getElementById("coloricon").style.color = "white";
}
 function canvasb1adad() {
 document.getElementById("fillicon").style.color = "#b1adad";
}
 function colorb1adad() {
 document.getElementById("coloricon").style.color = "#b1adad";
}  
 function canvas444() {
 document.getElementById("fillicon").style.color = "#444";
}
 function color444() {
 document.getElementById("coloricon").style.color = "#444";
} 
 function canvasBlack() {
 document.getElementById("fillicon").style.color = "black";
}
 function colorBlack() {
 document.getElementById("coloricon").style.color = "black";
}          
 function canvasff9797() {
 document.getElementById("fillicon").style.color = "#ff9797";
}
 function colorff9797() {
 document.getElementById("coloricon").style.color = "#ff9797";
}        
 function canvasf35e5e() {
 document.getElementById("fillicon").style.color = "#f35e5e";
}
 function colorf35e5e() {
 document.getElementById("coloricon").style.color = "#f35e5e";
}   
 function canvasRed() {
 document.getElementById("fillicon").style.color = "red";
}
 function colorRed() {
 document.getElementById("coloricon").style.color = "red";
}
 function canvas9c0000() {
 document.getElementById("fillicon").style.color = "#9c0000";
}
 function color9c0000() {
 document.getElementById("coloricon").style.color = "#9c0000";
}
 function canvasffa16e() {
 document.getElementById("fillicon").style.color = "#ffa16e";
}
 function colorffa16e() {
 document.getElementById("coloricon").style.color = "#ffa16e";
}
 function canvasff7e38() {
 document.getElementById("fillicon").style.color = "#ff7e38";
}
 function colorff7e38() {
 document.getElementById("coloricon").style.color = "#ff7e38";
}
 function canvasff5a00() {
 document.getElementById("fillicon").style.color = "#ff5a00";
}
 function colorff5a00() {
 document.getElementById("coloricon").style.color = "#ff5a00";
}
 function canvas9b3000() {
 document.getElementById("fillicon").style.color = "#9b3000";
}
 function color9b3000() {
 document.getElementById("coloricon").style.color = "#9b3000";
}
 function canvasf8ed7c() {
 document.getElementById("fillicon").style.color = "#f8ed7c";
}
 function colorf8ed7c() {
 document.getElementById("coloricon").style.color = "#f8ed7c";
}
 function canvase8f55c() {
 document.getElementById("fillicon").style.color = "#e8f55c";
}
 function colore8f55c() {
 document.getElementById("coloricon").style.color = "#e8f55c";
}
 function canvasa4b300() {
 document.getElementById("fillicon").style.color = "#a4b300";
}
 function colora4b300() {
 document.getElementById("coloricon").style.color = "#a4b300";
}
 function canvas899600() {
 document.getElementById("fillicon").style.color = "#899600";
}
 function color899600() {
 document.getElementById("coloricon").style.color = "#899600";
}
 function canvasdaffae() {
 document.getElementById("fillicon").style.color = "#daffae";
}
 function colordaffae() {
 document.getElementById("coloricon").style.color = "#daffae";
}
 function canvasb9fc6a() {
 document.getElementById("fillicon").style.color = "#b9fc6a";
}
 function colorb9fc6a() {
 document.getElementById("coloricon").style.color = "#b9fc6a";
}
 function canvas87f900() {
 document.getElementById("fillicon").style.color = "#87f900";
}
 function color87f900() {
 document.getElementById("coloricon").style.color = "#87f900";
}
 function canvas5da803() {
 document.getElementById("fillicon").style.color = "#5da803";
}
 function color5da803() {
 document.getElementById("coloricon").style.color = "#5da803";
}
 function canvasaeffc0() {
 document.getElementById("fillicon").style.color = "#aeffc0";
}
 function coloraeffc0() {
 document.getElementById("coloricon").style.color = "#aeffc0";
}
 function canvas64fb86() {
 document.getElementById("fillicon").style.color = "#64fb86";
}
 function color64fb86() {
 document.getElementById("coloricon").style.color = "#64fb86";
}
 function canvas00ff39() {
 document.getElementById("fillicon").style.color = "#00ff39";
}
 function color00ff39() {
 document.getElementById("coloricon").style.color = "#00ff39";
}
 function canvas009e23() {
 document.getElementById("fillicon").style.color = "#009e23";
}
 function color009e23() {
 document.getElementById("coloricon").style.color = "#009e23";
}
 function canvasa9ffda() {
 document.getElementById("fillicon").style.color = "#a9ffda";
}
 function colora9ffda() {
 document.getElementById("coloricon").style.color = "#a9ffda";
}
 function canvas59ffb8() {
 document.getElementById("fillicon").style.color = "#59ffb8";
}
 function color59ffb8() {
 document.getElementById("coloricon").style.color = "#59ffb8";
}
 function canvas00ff92() {
 document.getElementById("fillicon").style.color = "#00ff92";
}
 function color00ff92() {
 document.getElementById("coloricon").style.color = "#00ff92";
}
 function canvas009f5b() {
 document.getElementById("fillicon").style.color = "#009f5b";
}
 function color009f5b() {
 document.getElementById("coloricon").style.color = "#009f5b";
}
 function canvas88feed() {
 document.getElementById("fillicon").style.color = "#88feed";
}
 function color88feed() {
 document.getElementById("coloricon").style.color = "#88feed";
}
 function canvas47fde3() {
 document.getElementById("fillicon").style.color = "#47fde3";
}
 function color47fde3() {
 document.getElementById("coloricon").style.color = "#47fde3";
}
 function canvas00e4c3() {
 document.getElementById("fillicon").style.color = "#00e4c3";
}
 function color00e4c3() {
 document.getElementById("coloricon").style.color = "#00e4c3";
}
 function canvas00a48c() {
 document.getElementById("fillicon").style.color = "#00a48c";
}
 function color00a48c() {
 document.getElementById("coloricon").style.color = "#00a48c";
}
 function canvasa4c2ff() {
 document.getElementById("fillicon").style.color = "#a4c2ff";
}
 function colora4c2ff() {
 document.getElementById("coloricon").style.color = "#a4c2ff";
}
 function canvas528bff() {
 document.getElementById("fillicon").style.color = "#528bff";
}
 function color528bff() {
 document.getElementById("coloricon").style.color = "#528bff";
}
 function canvas0054fe() {
 document.getElementById("fillicon").style.color = "#0054fe";
}
 function color0054fe() {
 document.getElementById("coloricon").style.color = "#0054fe";
}
 function canvas0038a9() {
 document.getElementById("fillicon").style.color = "#0038a9";
}
 function color0038a9() {
 document.getElementById("coloricon").style.color = "#0038a9";
}
