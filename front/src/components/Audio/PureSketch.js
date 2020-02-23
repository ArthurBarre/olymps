import p5 from 'p5';
let song;
let i;
function preload() {
  song = loadSound("respire.mp3");
}

function setup() {
  // preload();
  createCanvas(100, 100);
  song.loop();
  i = 0;

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(0);

  // Get the average (root mean square) amplitude
  let vol = analyzer.getLevel();
  fill(255);
  stroke(0);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  // 1 coin haut gauche
  //2 haut droit
  //3 epaisseur
  //4 longueur avec facteur rms
  while (i === 100) {
    i = 0;
  }
  if (i == 50) {
    i = 30;
  }
  i = i / 1.05;
  console.log(i);
  console.log();z
  i++;
  rect(15, 40, 10, vol * 10 + i);
  rect(35, 40, 10, vol * 50 + i);
  rect(55, 40, 10, vol * 150 + i);
  rect(75, 40, 10, vol * 170 + i);
  // rect(15, 40, 10, vol * 10 + i);
  // rect(35, 40, 10, vol * 50 + i);
  // rect(55, 40, 10, vol * 150 + i);
  // rect(75, 40, 10, vol * 200 + i);

  // Draw an ellipse with size based on volume

  // ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}
