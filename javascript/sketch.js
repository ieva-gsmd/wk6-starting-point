//define the parameters we'll be using
let synth;
let playing, note;

function setup() {
//put the canvas into a variable
cnv = createCanvas(windowWidth, windowHeight);
//so you could trigger it with mouse pressed
cnv.mousePressed(playSynth);

//define a new synth object
synth = new Tone.Synth({
  volume: -6
}).toDestination();


}

function draw() {
  background(220);
//map the note to mouse y position
  note = map(mouseY, 0, height, 20, 1000);
  
  if (playing) {
    //if playing is true then set the note to mouse position
    synth.setNote(note, 0.1);
  }

}

function playSynth() {
  //function to start playing the synth, with an initial value of C4 and envelope attack of 0.3 seconds
  synth.triggerAttack("C4", 0.3);
  //playing set to true for later
  playing = true;
}

function mouseReleased() {
  //listen for mouse released which will stop playing the synth. add a 0.2 release time
  synth.triggerRelease("+0.2")
  //set playing to false
  playing = false;
}