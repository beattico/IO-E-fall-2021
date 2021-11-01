// Cole Beattie
// Interactive Objects and Environments 
// Sprint 1 - Colour flashing circle that changes size and frequency

// This is a sketch that uses three sensors on the Arduino Sensor Kit. The light sensor, button, and potentiometer.
// Adapted and motified from Week 6 - Arduino file that's running is "threeSensorExample" by Doug Whitton




let osc;
let playing = false;
let serial;
let latestData = "waiting for data";  
let splitter;
let diameter0 = 0, diameter1 = 0, diameter2 = 0;

let osc1, osc2, osc3, fft;


var r;
var g;
var b;
var a;


function setup() {
  
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();
  serial.list();
  console.log("serial.list()   ", serial.list());

  
  serial.open("/dev/tty.usbmodem14101");

  serial.on('connected', serverConnected);

  serial.on('list', gotList);
 
  serial.on('data', gotData);

  serial.on('error', gotError);
  

 
  serial.on('open', gotOpen);
 

 
}



osc1 = new p5.TriOsc(); 
osc1.amp(.2);
osc2 = new p5.TriOsc(); 
osc2.amp(.5);  
osc3 = new p5.TriOsc(); 
osc3.amp(.8);    

fft = new p5.FFT();
osc1.start();
osc2.start(); 
osc3.start();

function serverConnected() {
  console.log("Connected to Server");
}

function gotList(thelist) {
  console.log("List of Serial Ports:");
  for (var i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

function gotOpen() {
  console.log("Serial Port is Open");
}

function gotError(theerror) {
  console.log(theerror);
}



function gotData() {
  var currentString = serial.readLine();  
  trim(currentString);                    
  if (!currentString) return;             
  console.log("currentString  ", currentString);            
  latestData = currentString;            
  console.log("latestData" + latestData);   
  splitter = split(latestData, ',');       
  diameter0 = splitter[0];                 
  diameter1 = splitter[1];
  diameter2 = splitter[2]; 



}

function gotRawData(thedata) {
  println("gotRawData" + thedata);
}




function draw() {


    r = random(255); 
    g = random(128); 
    b = random(64); 
    a = random(200,255); 


  
  background(0,0,0);
  text(latestData, 10,10);
  ellipseMode(RADIUS);    
  fill(r,g,b,a);
  stroke(0,255,255); 
  strokeWeight(10);
  ellipse(300, 300, diameter0*200, diameter0*200);
  ellipseMode(RADIUS);    
  fill(r,g,b,a);
  ellipse(300, 300, diameter1, diameter1);
  ellipseMode(RADIUS);
  fill(r,g,b,a);
  ellipse(300, 300, diameter2, diameter2);
    
  
  var freq = map(diameter0, 0, width, 40, 880);    
    osc1.freq(freq);
    
  var freq2 = map(diameter1, 0, width, 40, 880);    
    osc2.freq(freq2);
    
 var freq3 = map(diameter2*10, 0, width, 40, 880);    
    osc3.freq(freq3);
}


function mouseClicked(){
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    console.log("getAudioContext().state" + getAudioContext().state);
  }
  };
  


  
