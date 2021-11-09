
// Cole Beattie
// Interactive Objects and Environments 
// Sprint 1 - Voice Recognition

// This is a sketch that uses the SpeechRec function to recognize my voice and print the text on the screen. 
// You say your name and it will show your name on the screen. 
// This code is adapted and motified from p5.speech by R. Luke DuBois https://github.com/IDMNYU/p5.js-speech
// Youtube video reference: https://www.youtube.com/watch?v=q_bXBcmfTJM&t=367s



var myRec = new p5.SpeechRec(); 

	function setup()
	{
		createCanvas(windowWidth, windowHeight);
		background(100,149,237);
		noStroke();
		fill(255,255,255);
		textSize(62);
		textAlign(CENTER);
		text('Say Your Name!', 700,400);
		textStyle(BOLD);
		myRec.onResult = showResult;
		myRec.start();
	}

	function showResult()
	{
		if(myRec.resultValue==true) {
			background(255,127,80);
			fill(255,255,255);
			
			text(myRec.resultString, width/2, height/2);
			console.log(myRec.resultString);
		}
	}