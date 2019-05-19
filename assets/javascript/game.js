//variables
var choices = ["Bomberman", "Crono", "Kirby", "Robo", "Ryu", "Scorpion", "Yoshi", "Zangief", "Zero"];
var cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
var wins = 0;
var blanks = [];
var lettersGuessed = [];
var guessesRemaining = 12;
console.log(cpuChoice);



// generate underscores
function blanker() {
    blanks = [];
    for (var i = 0; i < cpuChoice.length; i++) {
        blanks[i] = "_";
    }
    document.getElementById("currentWord").innerText = blanks;
}

blanker();

//show letters guessed (key must be a letter)
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var theGuess = event.key;
        if (!lettersGuessed.includes(theGuess)) {
            for (var i = 0; i < cpuChoice.length; i++) {
                if (cpuChoice.charAt(i) == theGuess) {
                    blanks[i] = theGuess;
                }
            }
            lettersGuessed.push(theGuess);
            document.getElementById("letters").innerText = lettersGuessed;
            document.getElementById("currentWord").innerText = blanks;
            winGranter();
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