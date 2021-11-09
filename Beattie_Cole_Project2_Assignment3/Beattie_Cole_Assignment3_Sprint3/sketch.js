
// Cole Beattie
// Interactive Objects and Environments 
// Sprint 3 - Colour changing circles with sound

// This is a sketch that uses the mousePressed function to play a sound. The ellipse change colour with the sound, when mouse is pressed. 
// Adapted and modified from Class - Week 6 - Load Sounds Class Example 
// Code for random colour changing shapes is from: https://editor.p5js.org/vidianindhita/sketches/rJpmUmlj-

let song;
let bgColor = 0;
let ellipseColor = 0;


function setup() { 
    song = loadSound('sounds/ES_PREL Ascend Cartoon 1 - SFX Producer.mp3');
  createCanvas(800, 600);
	bgColor = random(255);
	ellipseColor = random(255);
	
} 

function draw() { 
  background(bgColor);
	noStroke();
	fill(ellipseColor);
	ellipse(400,315,196,196);
    ellipse(200,200,80,80);
    ellipse(700,100,380,380);
    ellipse(250,-50,300,300);
    ellipse(150,450,250,250);
    ellipse(650,450,100,100);
	noStroke();
	
  if (mouseIsPressed) {
    bgColor = color(random(255), random(255), random(255));
		ellipseColor = color(random(255), random(255), random(255));
  }
}

function mousePressed() {



    if (song.isPlaying()){
        song.stop();
       


        
    }
    else{
        song.play();
      
    }
	
}