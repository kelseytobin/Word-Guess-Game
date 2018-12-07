var lives = 7;
var userLetter = "";

//var references for text
var outputText = document.getElementById("output-display");
var wrongText = document.getElementById("wrong-display");
var livesText = document.getElementById("lives");
var winsText = document.getElementById("wins-display");
var lossesText = document.getElementById("losses-display");

//function

var game = document.getElementById("game");

var setup = function() {
  current = words[Math.floor(Math.random() * words.length) + 1];
  display = current.split("").map(function(letter){
    return "_";
  
  })
  outputText.innerHTML = display.join(" ");
  console.log(win);
  winsText.innerHTML = win.toString();
  lossesText.innerHTML = losses.toString();
  livesText.innerHTML = lives.toString();
  // document.onkeyup = function(event) {
  //   userLetter = event.key;
  };


var collectInput = function() {
  letter.addEventListener(keypress, collectInput, useCapture);
}

var currentPlay = function() {
  document.onkeyup()
}



//   for (var x = 0; x < current.length; x++);
//   {
//     if (userLetter == letter[x]) {
//       // display[x] = userLetter();
//       // win--;
//     }
//     // output = output + display[x] + "";
//   }
// };


// if (win < 1) {
//   document.getElementById("wins-text").innerHTML = "You win!";
// } else if (lives < 1) {
//   document.getElementById("losses-text").innerHTML = "You lose!";
// } else {
//   document.getElementById("lives-text").innerHTML =
//     "You have " + lives + " guesses left";
// }

//execute

window.onload = function() {
  // game();
  setup();
  currentPlay();
  // ("enter").onclick = submit;
  // submit();
};
