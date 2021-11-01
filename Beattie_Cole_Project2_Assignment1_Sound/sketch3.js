

// Cole Beattie
// Interactive Objects and Environments 
// Sprint 3 - Blinking Orange Monster

// This is a sketch that uses the keyPressed function to display an orange monster and play a blinking sound when a key is pressed.
// Adapted and motified from Week 6 - Load Sounds Class Example

let song;

function setup(){
    song = loadSound('sounds/ES_Blink Twice - SFX Producer.mp3');
    createCanvas(800, 800);
    background(0,0,0); 
        

}


function keyPressed(){
    if (song.isPlaying()){
        song.stop();
        background(0,0,0);
noStroke();

fill(0,0,0);
ellipse(400,391,481,481);

fill(0,0,0);
ellipse(400,315,196,196);

fill(0,0,0);
ellipse(422,294,134,134);

fill(0,0,0);
ellipse(459,269,36,36);


fill(0,0,0);
triangle(272, 483, 300, 532, 328, 483);

fill(0,0,0);
triangle(328, 483, 356, 532, 384, 483);


fill(0,0,0);
triangle(384, 483, 413, 532, 441, 483);


fill(0,0,0);
triangle(441, 483, 470, 532, 498, 483);



        
    }
    else{
        song.play();
        background(0,0,0);

       
        noStroke();




        fill(255,128,1);
        ellipse(400,391,481,481);
        
        fill(255,255,255);
        ellipse(400,315,196,196);
        
        fill(0,0,0);
        ellipse(422,294,134,134);
        
        fill(255,255,255);
        ellipse(459,269,36,36);
        
        
        
        
        fill(255,255,255);
        triangle(272, 483, 300, 532, 328, 483);
        
        fill(255,255,255);
        triangle(328, 483, 356, 532, 384, 483);
        
        
        fill(255,255,255);
        triangle(384, 483, 413, 532, 441, 483);
        
        
        fill(255,255,255);
        triangle(441, 483, 470, 532, 498, 483);
        
        
        

















       
    }
}