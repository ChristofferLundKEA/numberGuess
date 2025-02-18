const guessBtn = document.querySelector('.guessBtn');
const paragraph = document.querySelector('.paragraph');
const higherLowerParagraph = document.querySelector('.higher-lower-paragraph');
const resetBtn = document.querySelector('#reset')
const highscoreParagraph = document.querySelector('#highscore')
const userGuess = document.querySelector('#userGuess')

let userInputField = 0;
let guessTries = 0;
let savedHighscore = 0;
let liveHighscore = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter")  guessBtn.click();
    if (event.key === "Escape") resetBtn.click();
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#userGuess").focus();
});

guessBtn.addEventListener("click", () => {

    userGuess.focus();
    userInputField = parseInt(userGuess.value);
    guessTries++;

    userInputField !== randomNumber
        ? paragraph.innerText = `${userInputField} is totally wrong`
        : paragraph.innerText = "You are right!";

    if (userInputField !== randomNumber){
        userGuess.value = "";
        higherLowerParagraph.style.display = "block";
        userInputField < randomNumber
            ? higherLowerParagraph.innerText = "go higher"
            : higherLowerParagraph.innerText = "go lower";
        liveHighscore = 0; //fix her, ved ikke om det overhoved er rigtigt
    }

    if (userInputField === randomNumber) {
        randomNumber = generateNumber();
        higherLowerParagraph.style.display = "none";
        userGuess.value = "";
        console.log(randomNumber);

        if (guessTries === 1) {
            liveHighscore++;
            if (liveHighscore > savedHighscore) {
                savedHighscore = liveHighscore;
                highscoreParagraph.innerText = liveHighscore;
            }
        }
        guessTries = 0;
    }

    if (isNaN(userInputField)) {
        paragraph.innerText = "Are you trying to crash me?\nJust type a number between 1 & 5 :)";
        higherLowerParagraph.style.display = "none";
    }
});

resetBtn.addEventListener('click', () => {
    userGuess.value = "";
    userGuess.focus();
    randomNumber = generateNumber();
    paragraph.innerText = '';
    higherLowerParagraph.innerText = '';
    savedHighscore = 0;
    highscoreParagraph.innerText = 0;
})

//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}