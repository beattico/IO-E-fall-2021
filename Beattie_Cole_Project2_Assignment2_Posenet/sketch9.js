// Cole Beattie
// Interactive Objects and Environments 
// Sprint 3 - Glowing Skeleton with Face (Elmo)

// This is a sketch that uses Posenet and the x and y locations to create a skeleton that follows the body.
// Using Week 7 Pose net code - adapted and motified from Sketch9.js



let video;
let pose;
let skeleton;
let angle=0;
let history = [];

function setup(){
   

    
frameRate(20);     
createCanvas(940, 780);
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
filter(THRESHOLD,1);    

    
    if(pose){
        fill(255,51,255);
     
    let d = dist(pose.leftEye.x,pose.leftEye.y, pose.rightEye.x,pose.rightEye.y);
        
    ellipse(pose.nose.x, pose.nose.y, d*2);
    
        let v = createVector(pose.nose.x,pose.nose.y);
        
        history.push(v);
        let head = history[history.length-1].copy();
        history.push(head);
        history.shift();
        
        
        for(let i = 0; i < history.length-1; i++){
            drawHeadSpace(history[i].x,history[i].y);

            noStroke();    

            fill(255, 255, 255);
            const rightEye = pose.rightEye;
            ellipse(rightEye.x, rightEye.y, 20, 20);
           
          
            fill(255, 255, 255);
            const leftEye = pose.leftEye;
            ellipse(leftEye.x, leftEye.y, 20, 20);
           
            fill(255,0,0);
            ellipse(pose.nose.x, pose.nose.y, 40);
            
        }
   
        
    for(let i=0; i < pose.keypoints.length;i++){
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
        
    for(let i = 0; i < skeleton.length; i++){
        let a = skeleton[i][0];
        let b = skeleton[i][1];
        strokeWeight(12);
        stroke(255,51,255);
        line(a.position.x, a.position.y,b.position.x, b.position.y );
        fill(255,51,255);
        
        }    
    }
}  
    
    
}

function drawHeadSpace(x,y){
        
    fill(255,51,255);
        ellipse(x, y,10);
     
    if(history.length > 0){
        console.log("more than 0");
        history.splice(0,1);
        }
    }

