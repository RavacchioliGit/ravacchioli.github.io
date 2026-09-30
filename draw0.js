let x=0;
function setup(){
	createCanvas(400,400);
	// Set the frame rate to 1.
	frameRate(1);
}
function draw(){
	
	background(100);
	fill(50, 150,250);
	
	ellipse(x, 200, 50,50);
	
	text(`CANVAS width: ${width}, height:${width} `, 100, 100);
    describe('Una pallina statica sul canva');
	noLoop();//parte statica o metto in setup o meglio blocco refresh quadri
	
	// Get the target frame rate and
	// display it.
	  let fps = getTargetFrameRate();/*Ndt default 60*/
	  text(fps, 43, 54);
}