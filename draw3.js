let x=200;
let y=200;
let xIncrease=3;//con incrementi uguali resto sulla diagonale
let yIncrease=1;
let r=25;

let osc;//onda sonora
let audioAttivo = false;
let bottone;

function setup(){
	createCanvas(400,400);	
	// Crea una onda sinusoidale
	osc = new p5.Oscillator('sine');
	osc.amp(0.5); // Imposta il volume (da 0 a 1)
	osc.freq(440); // Imposta la frequenza a 440Hz (nota LA)
    describe('Una pallina rimbalza sulle pareti del canvas, quando tocca il bordo si suona LA');
	  // Crea il pulsante per attivare l'audio
  bottone = createButton('Attiva Suono 🔇');
  bottone.position(10, 10);
  bottone.mousePressed(attivaAudio);
}
function draw(){
	background(40);//cancella tutto, se non lo metto vedo i passaggi
	textAlign(CENTER, CENTER);
	text('Clicca per riprodurre il suono', width / 2, height / 2);
	fill(255, 204,0);
	noStroke();
	
	ellipse(x, y, r*2);
	//legge del moto
	x=x+xIncrease;
	y=y+yIncrease;
	
	if(x>width-r||x<r){
		xIncrease = -xIncrease;
		//osc.start();
		disattivaAudio();
	}
	if(y>width-r||y<r){
		yIncrease = -yIncrease;
		attivaAudio();
	}
	text(`CANVAS width: ${width}, height:${width} `, 100, 100);
	
}
function mousePressed() {
  // Avvia l'oscillatore quando l'utente clicca
  osc.start();
}

function mouseReleased() {
  // Ferma l'oscillatore quando l'utente rilascia il mouse
  osc.stop();
}
function attivaAudio() {
  // Avvia l'oscillatore in modo sicuro tramite un'azione utente
  if (!audioAttivo) {
    osc.start();
    audioAttivo = true;
    bottone.html('Suono Attivo 🔊');
    bottone.attribute('disabled', ''); // Disabilita il tasto perché non serve più cliccarlo
  }
}
function suonaBip() {
  // Suona solo se l'utente ha premuto il tasto di attivazione
  if (audioAttivo) {
    osc.amp(0.5, 0.01); 
    osc.amp(0, 0.1); 
  }
}
function disattivaAudio() {
  
  if (audioAttivo) {
    osc.stop();
    audioAttivo = false;
    bottone.html('Suono DISATTIVO 🔇');
    //bottone.attribute('disabled', ''); // Disabilita il tasto perché non serve più cliccarlo
  }
}