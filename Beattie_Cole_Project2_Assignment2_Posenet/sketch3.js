// Cole Beattie
// Interactive Objects and Environments 
// Sprint 1 - Clown/Egg Man Face

// This is a sketch that uses the draw function to make shapes into a face.
// Using Week 7 Pose net code - adapted and motified from Sketch3.js


let video;
let pose;

function setup(){
createCanvas(1920, 1080);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
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
if(pose){

    fill(244,244,244);
    ellipse(pose.nose.x, pose.nose.y, 200, 300);

    fill(255,0,0);
    ellipse(pose.nose.x, pose.nose.y, 80);

 // Create a yellow ellipse for the right eye
 fill(255, 215, 0);
 const rightEye = pose.rightEye;
 ellipse(rightEye.x, rightEye.y, 40, 40);

fill(0,0,0);
 ellipse(rightEye.x, rightEye.y, 20, 20);


 // Create a yellow ellipse for the left eye
 fill(255, 215, 0);
 const leftEye = pose.leftEye;
 ellipse(leftEye.x, leftEye.y, 40, 40);

 fill(0,0,0);
 ellipse(leftEye.x, leftEye.y, 20, 20);


 fill(244,244,244);
 const leftEar = pose.leftEar;
 ellipse(leftEar.x, leftEar.y, 60,80);

 fill(244,244,244);
 const rightEar = pose.rightEar;
ellipse(rightEar.x, rightEar.y, 60,80);


}    
    
}
