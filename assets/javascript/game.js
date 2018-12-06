//Global Variables ///////////////////////////////////////////////////////////

//create an array that lists out all of the options
var words = ["sequoia", "glacier", "olympic", "redwood", "saguaro"];
var lettersAvailable = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//create variables that hold number of wins, losses, guesses left
var chances = 7;
var wins = 0;
var losses = 0;

//misc variables

var currentWord = words[Math.floor(Math.random() * words.length)];
var output = ""; //output = what is displayed in hash marks?
var messages = "" ; //put inside function?
var userGuess = "" ; //put inside onkeyup function?

//create variables that hold references to the places in HTML where we want to display things
var lettersText = document.getElementById("letters-text");
var wrongGuessesText = document.getElementById("wrong-guesses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


//Functions///////////////////////////////////////////////////////////////////

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
        userGuess = event.key;
        document.getElementById("letters").value = "";
         
    }



// 0) set up display of current word hash marks



// 1) set up function, sets up game to be started


// 2) program selects current word
    function selectCurrent() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        document.getElementBy
    }

// 3) program compares user input to current word


// 4) user input is stored in variables for later use (win/lose/letters matched/wrong letters)

    function matchedLetters() {
        for (var i = 0; i < 7; i++) {
            if (userGuess.indexOf(currentWord) > -1) {
                lettersText.value = value;
                document.getElementById("letters-text").innerHTML = ("value");
            }

            else {
                wrongGuessesText.innerHTML = "";
            }
        }
    }

// 5) program writes to html (letters matched/ wrong guesses/ chance left/ you win/ you lose)


// 6) program increments wins/losses


// 7) program loops through words array


// 8) program resets after win or loss






//Execution////////////////////////////////////////////////////////////////////