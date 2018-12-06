//js initial
var game = function(id) {
    return document.getElementById(id);
}

//declare var and initialize
var game = [
    "sequoia", "glacier", "olympic", "redwood", "saguaro"
];

var choices = [Math.floor(Math.random() * 5)];
var answer = game[choices];
var myLength = answer.length;
var display = [myLength];
var win = [myLength];
var letter = answer.split("");
var lives = 7;
var output = "";
var userLetter = "";

//var references for text
var outputText = document.getElementById("output-display");
var wrongText = document.getElementById("wrong-display");
var livesText = document.getElementById("lives");
var winsText = document.getElementById("wins-display");
var lossesText = document.getElementById("losses-display");

//function

document.onkeyup = function (event) {
    var guess = event.key;
}

var setup = function() {
    for (var i = 0;i < answer.length; i++); {
        display[i] = "_";
        output = outputText + display[i];
        console.log(display);
        document.getElementById("").innerHTML = output;
    }
    // document.getElementById("output-display").innerHTML = output;
    output = "";
}

var submit = function() {
    output = "";
    userLetter = ("letter").value;

    for (var x=0; x < answer.length; x++); {
    if(userLetter.toUpperCase() == letter[x]) {
        display[x] = userLetter.toUpperCase();
        win--;
    }
    output = output + display[x] + "";
    }
    document.getElementById("").innerHTML = output;
    output = "";
    lives--;

    if (win < 1) {
        document.getElementById("wins-text").innerHTML = "You win!";
    }
    else if (lives < 1) {
        document.getElementById("losses-text").innerHTML = "You lose!";
    }
    else {
        document.getElementById("lives-text").innerHTML = "You have " + lives +" guesses left";
    }

}

       


//execute

window.onload = function() {
    setup();
    game("submit").onclick = submit; 
}