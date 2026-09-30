let x=0;
function setup(){
	createCanvas(400,400);
	// Add a general description of the canvas.
    describe('Una pallina scorre da sx a dx sul canva');
}
function draw(){
	background(100);
	fill(50, 150,250);
	ellipse(x, 200, 50,50);
	text(`CANVAS width: ${width}, height:${width} `, 100, 100);
	x = x+2;
	if(x>width){
		x=0;
	}
}