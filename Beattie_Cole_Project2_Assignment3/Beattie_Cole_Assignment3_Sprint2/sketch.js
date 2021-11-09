
// Cole Beattie
// Interactive Objects and Environments 
// Sprint 2 - Glowing Cat eyes

// This is a sketch that uses Posenet and the x and y locations to follow the left and right eyes.
// Using Class - Week 7 Pose net code - adapted and motified from Sketch3.js







let video;
let pose;

function setup(){
createCanvas(640, 480);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
video.hide();  
rect(30, 20, 55, 55);
noStroke();

}


function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
image(video, 0, 0);

rect(0, 0, 640, 480);

if(pose){

  
//Creating the cat eyes
 fill(255, 215, 0);
 const rightEye = pose.rightEye;
 ellipse(rightEye.x, rightEye.y, 40, 40);

fill(0,0,0);
 ellipse(rightEye.x, rightEye.y, 8, 25);

 fill(255, 215, 0);
 const leftEye = pose.leftEye;
 ellipse(leftEye.x, leftEye.y, 40, 40);

 fill(0,0,0);
 ellipse(leftEye.x, leftEye.y, 8, 25);


}    
    
}
