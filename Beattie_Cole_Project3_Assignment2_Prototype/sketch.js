// Cole Beattie
// Interactive Objects and Environments 
// Project 3 - Assignment 2 - Code Prototype

// This is a sketch that uses Posenet and the x and y locations to make the fish follow the user as they walk by the installation.

// Using Week 7 Pose net code - adapted and motified from Sketch9.js
// Using code from: https://editor.p5js.org/chjno/sketches/ByZlypKWM 

//Illustrations of fish are original

let video;
let pose;
let skeleton;
let angle=0;
let history = [];
let x, y;
let fish1;
let fish2;
let fish3;


var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 9;

function preload(){
    bgImg = loadImage("fishbackground.jpg");
    fish1 = loadImage("fish1.png")
    fish2 = loadImage("fish2.png")
    fish3 = loadImage("fish3.png")
}

function setup(){
   
x2 = 1420;
    
frameRate(20);     
createCanvas(1420, 500);
noStroke();    

video = createCapture(VIDEO);
video.size(width,height);    

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)    
video.hide(); 


       
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
 
    if( poses.length > 0 ){
        pose = poses[0].pose;
        skeleton = poses[0].skeleton; 
    } 
    
} 

function draw(){
       
image(video, 0, 0,width,height);

image(bgImg, x1, 0, 1440, height);
  image(bgImg, x2, 0, 1440, height);
  
  
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  


  

    
    if(pose){
        
     
    let d = dist(pose.leftEye.x,pose.leftEye.y, pose.rightEye.x,pose.rightEye.y);
        
    
    
        let v = createVector(pose.nose.x,pose.nose.y);
        
        history.push(v);
        let head = history[history.length-1].copy();
        history.push(head);
        history.shift();
        
        
        for(let i = 0; i < history.length-1; i++){
            drawHeadSpace(history[i].x,history[i].y);

            noStroke();    

            
            const rightEye = pose.rightEye;
            image(fish2, rightEye.x, rightEye.y, 90, 90);
           
          
        
            const leftEye = pose.leftEye;
            image(fish3, leftEye.x, leftEye.y, 80, 80);
            
           
           
        }
   
        
  
}  
    
    
}

function drawHeadSpace(x,y){
        
    image(fish1, x, y, 120, 120);

    image(fish2, x, y, 120, 120);




   
     
    if(history.length > 0){
        console.log("more than 0");
        history.splice(0,1);
        }
    }

