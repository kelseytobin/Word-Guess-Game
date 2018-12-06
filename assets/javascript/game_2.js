var display = document.querySelector("display");
var userGuess = document.querySelector("character");
var textForm = document.querySelector("");

var parkWords = [
    "sequoia", "glacier", "olympic", "redwood", "saguaro"
];

//select random word

var getWord = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var currentWord = getWord(parkWords);

//input values

textForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var lives = 7;
    var guessedLetters = [];
    var lettersMatched = [];

    var guessWord = guessQuerySelector.value;

    for (i = 0; i < shorterWordlength; i++) {
        if (guessWord[i] === randomWord[i]) {
          correctCharacters.push(guessWord[i])
          console.log("correct " + correctCharacters)
        } else {
          triedCharacters.push(guessWord[i])
          console.log("incorrect " + triedCharacters)
        }
    }
    randomWord = getRandomWord(commonWords);
    console.log('randomWord', randomWord);
  })


