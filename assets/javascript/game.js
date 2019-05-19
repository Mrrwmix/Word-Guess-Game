//variables
var choices = ["Bomberman", "Crono", "Kirby", "Robo", "Ryu", "Scorpion", "Yoshi", "Zangief", "Zero"];
var cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
var wins = 0;
var blanks = [];
var lettersGuessed = [];
var guessesRemaining = 12;
console.log(cpuChoice);



// generate underscores, resets numbers and text
function blanker() {
    blanks = [];
    lettersGuessed = [];
    guessesRemaining = 12;
    for (var i = 0; i < cpuChoice.length; i++) {
        blanks[i] = "_";
    }
    document.getElementById("currentWord").innerText = blanks;
    document.getElementById("guessy").innerText = guessesRemaining;
    document.getElementById("letters").innerText = lettersGuessed;
}

blanker();

//onkeyup functionality, checks letters + validation + guesses remaining, if winning, and if losing
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var theGuess = event.key;
        if (!lettersGuessed.includes(theGuess)) {
            for (var i = 0; i < cpuChoice.length; i++) {
                if (cpuChoice.charAt(i) == theGuess) {
                    blanks[i] = theGuess;
                }
            }
            if (!cpuChoice.includes(theGuess)){
                guessesRemaining--;
            }
            lettersGuessed.push(theGuess);
            document.getElementById("guessy").innerText = guessesRemaining;
            document.getElementById("letters").innerText = lettersGuessed;
            document.getElementById("currentWord").innerText = blanks;
            winGranter();
            lossGranter();
        }
    }
    else {
        alert("Please guess a letter!");
    }

}


//generate an image after win or loss








//update wins and losses, play song, choose new word
function winGranter() {
    if (!blanks.includes("_")) {
        wins++;
        document.getElementById("winnies").innerText = wins;
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
        blanker();
    }
}

function lossGranter() {
    if (guessesRemaining <= 0){
        document.getElementById("results").innerHTML = "<h2>The character was " + cpuChoice + "!</h2>";
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
        blanker();
    }
}