let x =0;
let y =0;
let easing = 0.05; //vicinanza mouse
function setup(){
	createCanvas(400, 400);
	describe('La pallina segue il mouse con ritardo easing');
}
function draw(){
	background(240);
	
	//calcolo distanza dal mouse
	//let targetX = mouseX;
	let dx = mouseX-x;
	x += dx*easing;
	
	//let targetY = mouseY;
	let dy = mouseY-y;
	y += dy*easing;
	
	fill(230,80,80);
	ellipse(x, y, 40);
	
}