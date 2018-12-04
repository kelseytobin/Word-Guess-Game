//Global Variables ///////////////////////////////////////////////////////////

//create an array that lists out all of the options
var words = ["sequoia", "glacier", "olympic", "redwood", "saguaro"];


//create variables that hold number of wins, losses, guesses left
var chances = 7;
var wins = 0;
var losses = 0;

//misc variables
var lettersAvailable = "abcdefghijklmnopqrstuvwxyz";
var lettersMatched = "";

var currentWord = "" ;
var messages = "" ;
var userGuess = "" ;

//create variables that hold references to the places in HTML where we want to display things
var lettersMatchedText = document.getElementById("letters-matched-text");
var wrongGuessesText = document.getElementById("wrong-guesses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementsById("losses-text");






//Functions///////////////////////////////////////////////////////////////////

// 1) set up function, sets up game to be started

// 2) program selects current word

// 3) program compares user input to current word

// 4) user input is stored in variables for later use (win/lose/letters matched/wrong letters)

// 5) program writes to html (letters matched/ wrong guesses/ chance left/ you win/ you lose)

// 6) program increments wins/losses

// 7) program loops through words array

// 8) program resets after win or loss






//Execution////////////////////////////////////////////////////////////////////