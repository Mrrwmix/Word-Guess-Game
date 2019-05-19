//variables
var choices = ["Bomberman", "Crono", "Kirby", "Robo", "Ryu", "Scorpion", "Yoshi", "Zangief", "Zero", "Vile", "Thunder"];
var cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
var wins = 0;
var blanks = [];
var lettersGuessed = [];
var guessesRemaining = 12;
var tracks = ["assets/tunes/bomberman.mp3", "assets/tunes/chrono.mp3", "assets/tunes/kirby.mp3", "assets/tunes/ninja.mp3", "assets/tunes/scorpion.mp3", "assets/tunes/yoshi.mp3", "assets/tunes/zangief.mp3", "assets/tunes/zero.mp3", "assets/tunes/KI.mp3", "assets/tunes/loss.mp3"];
var images = ["assets/images/bomberman.gif", "assets/images/crono.gif", "assets/images/kirby.gif", "assets/images/robo.gif", "assets/images/ryu.gif", "assets/images/scorpion.gif", "assets/images/yoshi.gif", "assets/images/zangief.gif", "assets/images/zero.gif", "assets/images/vile.gif", "assets/images/thunder.gif"];


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
            if (!cpuChoice.includes(theGuess)) {
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
        document.getElementById("instructions").textContent = "Letters only!";
    }

}


//generate an image after win or loss
function imageGenerator() {
    if (cpuChoice == "bomberman") {
        document.getElementById("results").setAttribute("src", images[0]);
    }
    else if (cpuChoice == "crono") {
        document.getElementById("results").setAttribute("src", images[1]);
    }
    else if (cpuChoice == "kirby") {
        document.getElementById("results").setAttribute("src", images[2]);
    }
    else if (cpuChoice == "robo") {
        document.getElementById("results").setAttribute("src", images[3]);
    }
    else if (cpuChoice == "ryu") {
        document.getElementById("results").setAttribute("src", images[4]);
    }
    else if (cpuChoice == "scorpion") {
        document.getElementById("results").setAttribute("src", images[5]);
    }
    else if (cpuChoice == "yoshi") {
        document.getElementById("results").setAttribute("src", images[6]);
    }
    else if (cpuChoice == "zangief") {
        document.getElementById("results").setAttribute("src", images[7]);
    }
    else if (cpuChoice == "zero") {
        document.getElementById("results").setAttribute("src", images[8]);
    }
    else if (cpuChoice == "vile") {
        document.getElementById("results").setAttribute("src", images[9]);
    }
    else {
        document.getElementById("results").setAttribute("src", images[10]);
    }
}







//update wins and losses, play song, choose new word
function winGranter() {
    if (!blanks.includes("_")) {
        wins++;
        document.getElementById("winnies").innerText = wins;
        imageGenerator();
        if (cpuChoice == "bomberman") {
            playSound(tracks[0]);
        }
        else if (cpuChoice == "crono" || cpuChoice == "robo") {
            playSound(tracks[1]);
        }
        else if (cpuChoice == "kirby") {
            playSound(tracks[2]);
        }
        else if (cpuChoice == "ryu") {
            playSound(tracks[3]);
        }
        else if (cpuChoice == "scorpion") {
            playSound(tracks[4]);
        }
        else if (cpuChoice == "yoshi") {
            playSound(tracks[5]);
        }
        else if (cpuChoice == "zangief") {
            playSound(tracks[6]);
        }
        else if (cpuChoice == "zero" || cpuChoice == "vile") {
            playSound(tracks[7]);
        }
        else {
            playSound(tracks[8]);
        }
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
        blanker();
    }
}

function lossGranter() {
    if (guessesRemaining <= 0) {
        document.getElementById("results").innerHTML = "<h2>The character was " + cpuChoice + "!</h2>";
        playSound(tracks[tracks.length - 1]);
        cpuChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
        blanker();
    }
}

function playSound(url) {
    document.getElementById("audio").setAttribute("src", url);
    document.getElementById("audio").setAttribute("autoplay", true);
}