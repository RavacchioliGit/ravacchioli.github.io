let x=200;
let y=200;
let xIncrease=3;//con incrementi uguali resto sulla diagonale
let yIncrease=1;
let r=25;
function setup(){
	createCanvas(400,400);
	// Add a general description of the canvas.
    describe('Una pallina rimbalza sulle pareti del canvas');
}
function draw(){
	//background(30);//cancella tutto, se non lo metto vedo i passaggi
	fill(255, 204,0);
	//noStroke();
	stroke('red');
	ellipse(x, y, r*2);
	//legge del moto
	x=x+xIncrease;
	y=y+yIncrease;
	
	if(x>width-r||x<r){
		//xIncrease = -xIncrease;
		noLoop();//appena tocca parete verticale stoppa framerate
	}
	if(y>width-r||y<r){
		yIncrease = -yIncrease;
	}
	text(`CANVAS width: ${width}, height:${width} `, 100, 100);
	
}