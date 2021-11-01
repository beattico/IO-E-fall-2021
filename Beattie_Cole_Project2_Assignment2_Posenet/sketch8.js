// Cole Beattie
// Interactive Objects and Environments 
// Sprint 2 - Random Coloured Nose that draws

// This is a sketch that uses poseNet and the draw function to create an ellipse that follows my nose and draws a picture, while flashing random colours
// Using Week 7 Pose net code - adapted and motified from Sketch8.js




let video;
let pose;
let angle=0;
let history = [];

function setup(){

    
frameRate(10);     
createCanvas(640, 480);
noStroke();    
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses) 

       
    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){

    if( poses.length > 0 ){
        pose = poses[0].pose;
         
    } 
} 


function draw(){
   
image(video, 0, 0,width,height);
   
r = random(255); 
g = random(255); 
b = random(255); 
a = random(255); 
    
    if(pose){
        noStroke();
        fill(r, g, b, a);
   
        let v = createVector(pose.nose.x,pose.nose.y);
        
        history.push(v);
        let head = history[history.length-1].copy();
        history.push(head);
        history.shift();
        
        for(let i = 0;i < history.length-1; i++){
           
            drawHeadSpace(history[i].x,history[i].y);
            
        }
           
}  
      
}

function drawHeadSpace(x,y){
        fill(r,g,b,a);
        ellipse(x, y,100); 
    } 
