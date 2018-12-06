

//declare var 
var words = [
    "sequoia", "glacier", "olympic", "redwood", "saguaro"
];

var select = [Math.floor(Math.random() * 5)];
var current = words[choices];
var myLength = answer.length;
var display = [myLength];
var win = [myLength];
var letter = current.split("");
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

// needs to go somewhere:  document.getElementById("submitguess").onclick = function(){ 

var game = function(id) {
    return document.getElementById(id);
}

 var setup = function() {
    document.onkeyup = function (event) {
    userLetter = event.key;
    
    }

    for (var i = 0;i < current.length; i++); {
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
    userLetter = event.key.value;

    for (var x=0; x < current.length; x++); {
    if(userLetter.toUpperCase() == letter[x]) {
        display[x] = userLetter.toUpperCase();
        // win--;
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
    game();
    setup();
    ("submit").onclick = submit; 
}