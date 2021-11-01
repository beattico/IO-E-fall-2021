
// Cole Beattie
// Interactive Objects and Environments 
// Sprint 2 - Evil Laughing Witch

// This is a sketch that uses the mousePressed function to play an evil Witch laugh. When the mouse is pressed, the sound plays and a Witch appears.
// Adapted and motified from Week 6 - Load Sounds Class Example

let song;

function setup(){
    song = loadSound('sounds/ES_Evil Laugh 3 - SFX Producer.mp3');
    createCanvas(800, 800);
    background(0,0,0);
   
}


function mousePressed(){
    if (song.isPlaying()){
        song.stop();
        background(0,0,0);
noStroke();

        
    }
    else{
        song.play();
        background(0,0,0);

        fill(0,102,0);
        ellipse(400,350,200,400);
        
        
       
        fill(38,51,64);
        triangle(280, 321, 400, 30, 520, 321);
       
        fill(38,51,64);
        rect(248, 280, 303, 62);

        fill(255,226,0);
        rect(356, 240, 91, 55);

        fill(38,51,64);
        rect(372, 255, 61, 25);
        
        fill(18,84,18);
        triangle(379, 420, 400, 500, 420, 420);


       

        


       
    }
}