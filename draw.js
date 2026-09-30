// Definizione dei processi (ID, Tempo di Arrivo, Tempo di Esecuzione/Burst, colore)
let processi = [
  { id: 'P1', arrivo: 0, burst: 3,  colore: '#FF5733' },
  { id: 'P2', arrivo: 2, burst: 1,  colore: '#33FF57' },
  { id: 'P3', arrivo: 4, burst: 3,  colore: '#3357FF' },
  { id: 'P4', arrivo: 6, burst: 2,  colore: '#F3FF33' }
];
let refresh = 0;

function setup() { 
  createCanvas(450, 450);
  frameRate(1); // Un aggiornamento al secondo per vedere l'animazione*/ 
   //disegnaDiagrammaGantt();
}

function draw() {
  
  background(240);
  
  // --- INTERFACCIA GRAFICA ---
  // Info Tempo
  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);
  text(`iterazioni refresh: ${refresh}`, 20, 20);
  
  disegnaTabellaProcessi();
  disegnaDiagrammaGantt();
  refresh++;  
}

// Mostra la tabella dei processi 												   
function disegnaTabellaProcessi() {
  textSize(13);
  textAlign(LEFT, CENTER);
  
  // Intestazione tabella estesa con metriche
  textStyle('bold');
  //fill('red');
  text("Proc", 20, 70);
  text("Arrivo", 70, 70);
  text("Burst", 130, 70); 
  
   
  line(20, 85, 180, 85);
  textStyle(NORMAL);
  //fill(0);
  for (let i = 0; i < processi.length; i++) {
    let p = processi[i];
    let y = 105 + i * 30;
    
	// Quadrato del colore del processo								   
    fill(p.colore);
    rect(20, y - 8, 12, 12);
    
    fill(0);
    text(p.id, 40, y);
    text(p.arrivo, 90, y);
    text(p.burst, 140, y);
   
  }
  
}

// Disegna il diagramma di Gantt in fondo allo schermo													  
function disegnaDiagrammaGantt() {
  let inizioX = 20;
  let inizioY = 250;
  let altezzaBarra = 40;
  let larghezzaUnita = 40; 
  let sommaBurst =0;
  //fill(0);
  textSize(15);
  textAlign(LEFT, CENTER);
  text("Diagramma di Gantt:", inizioX, inizioY - 25);

  for (let i = 0; i < processi.length; i++) {
    processo = processi[i];
    sommaBurst+=processo.burst;
   
    let fineX = inizioX + processo.burst*larghezzaUnita;
    
	// Disegna il blocco di tempo							 
    fill(processo.colore);
    
    stroke(0);
    rect(inizioX, inizioY, processo.burst*larghezzaUnita, altezzaBarra);
    
	// Testo del processo dentro il blocco								  
    fill(0);
    noStroke();
	 // Numero del tempo sotto il blocco
    textSize(15);
    textAlign(CENTER, CENTER);
    text(`${processo.id} : ${processo.burst}`, inizioX+((fineX-inizioX ) / 2), inizioY + altezzaBarra / 2);   
    inizioX = fineX;
   
    if(i == processi.length-1){
         text(`sommaBurst: ${sommaBurst}`, 320, 20);
         
         noLoop();
    }
        
  }
 
}
