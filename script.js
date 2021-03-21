//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var numTries = 3; //number of tries
var clueHoldTime = 400; //how long to hold each clue's light/sound
var timer = 0;
var time = 10;
var startTime = 0;

const numButtons = 6; //number of game buttons
const patternSize = 8; //number of patterns
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

function guessTimer() {
  //decrement time by 1 each time
  document.getElementById("timeLeft").innerHTML = "Time Left: " + time;
  if (time <= 0) {
    loseGame();
  }
  time--;
}

function findDifficulty() {
  document.getElementById("easy").classList.remove("hidden");
  document.getElementById("medium").classList.remove("hidden");
  document.getElementById("hard").classList.remove("hidden");
}

/* set difficulty on click and playsequence */
function setTimeDifficulty(time) {
  startTime = time;
  
  document.getElementById("easy").classList.add("hidden");
  document.getElementById("medium").classList.add("hidden");
  document.getElementById("hard").classList.add("hidden");
  
  document.getElementById("triesLeft").innerHTML = "Tries Left: " + numTries;
  playClueSequence();
}

function resetTime() {
  time = startTime;
}

function clearTimer() {
  clearInterval(timer);
  resetTime();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function startGame() {
  //initialize game variables
  progress = 0;
  numTries = 3;
  gamePlaying = true;
  clueHoldTime = 400;
  clearTimer();
 
  // initialize the pattern array with size: patternSize element
  for (let i = 0; i < patternSize; i++) {
    // getRandomInt: [1,6]
    pattern[i] = getRandomInt(numButtons) + 1;
  }
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // make visible difficultly buttons
  findDifficulty();
}

function stopGame() {
  gamePlaying = false;
  clearTimer();
  document.getElementById("triesLeft").innerHTML = "";
  document.getElementById("timeLeft").innerHTML = "";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  // hide difficulty buttons
  document.getElementById("easy").classList.add("hidden");
  document.getElementById("medium").classList.add("hidden");
  document.getElementById("hard").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearTimer();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime -= 40; //decrease clueHoldTime by 20 each time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timer = setInterval(guessTimer, 1000);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //guess correct
  if (pattern[guessCounter] == btn) {
    // the current pattern is completed
    if (guessCounter == progress) {
      // the last pattern is completed so win
      if (progress == pattern.length - 1) {
        winGame();
      }
      // else, continue with next pattern
      else {
        ++progress;
        playClueSequence();
      }
    }
    else {
      ++guessCounter;
    }
  }
  // guess incorrect
  else {
    // decrease number of tries
    --numTries;
    document.getElementById("triesLeft").innerHTML = "Tries Left: " + numTries;

    // two tries used
    if (numTries == 0) {
      loseGame();
    }
  }
  
}

function loseGame(){
  document.getElementById("triesLeft").innerHTML = "";
  document.getElementById("timeLeft").innerHTML = "";
  clearTimer();
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  document.getElementById("triesLeft").innerHTML = "";
  document.getElementById("timeLeft").innerHTML = "";
  clearTimer();
  stopGame();
  alert("Game Over. You won!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 201.6,
  2: 260.6,
  3: 322,
  4: 380.2,
  5: 443.3,
  6: 500.3
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)