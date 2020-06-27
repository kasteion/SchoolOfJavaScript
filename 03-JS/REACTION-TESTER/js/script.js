var timeout = 0;
var timer = 0;
var clicked = 1;
var drawn = false;

function randomtimeout() {
	return Math.floor(Math.random()*501);
}

function figure()
{
	var foo = Math.floor(Math.random()*2);
	if (foo >= 1)
	{
		return ("square");
	}
	else
	{
		return ("circle");
	}
}

function randomsize() {
	var size = 0;
	while (size < 50)
	{
		size = Math.floor(Math.random()*201);
	}
	return (size);
}

function randomcolor() {
	var r = 0;
	var g = 0;
	var b = 0;
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return ("rgb("+r+","+g+","+b+")");
}

function randommargin() {
		return (Math.floor(Math.random()*501));
}

function drawrandomsquare() {
	var size = randomsize();
	document.getElementById("reaction").innerHTML = "<div id='clickme' onclick='clickrandomfigure();' style='width:" + size + "px; height:" + size + "px; background-color:" + randomcolor() + "; margin-top:" + randommargin() + "px; margin-left:" + randommargin() + "px;'></div>";
}

function drawrandomcircle() {
	var size = randomsize();
	document.getElementById("reaction").innerHTML = "<div id='clickme' onclick='clickrandomfigure();' style='width:" + size + "px; height:" + size + "px; border-radius:50%; background-color:" + randomcolor() + "; margin-top:" + randommargin() + "px; margin-left:" + randommargin() + "px;'></div>";
}

function countms() {
	timer = timer + 1;
	if (drawn == false)
	{
		if (timer == timeout)
		{
			drawrandomfigure();
			timer = 0;
			clicked = 0;
		}
	}
}

function drawrandomfigure() {
	if (figure()=="square")
	{
		drawrandomsquare();
	}
	else
	{
		drawrandomcircle();
	}
	drawn = true;
	timeout = randomtimeout();
}

function clickrandomfigure() {
	clicked = timer;
	if (clicked > 1)
	{
		document.getElementById("yourtime").innerHTML = "Your time: " + (clicked/100) + " seconds.";
		document.getElementById("reaction").innerHTML = "";
		drawn = false;
		timer = 0;
	}
}

//drawrandomfigure();

//document.getElementById("clickme").onclick = function() {
//	drawrandomfigure();
//	alert(timer);
//	timer = 0;
//}
timeout = randomtimeout();
setInterval(countms, 6);
