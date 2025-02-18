//Save the buttons as constants
const guessBtn = document.querySelector('.guessBtn');
let userInputField = 0;
const paragraph = document.querySelector('.paragraph');
const higherLowerParagraph = document.querySelector('.higher-lower-paragraph');
const resetBtn = document.querySelector('#reset')
const highscoreParagraph = document.querySelector('#highscore')
let guessTries = 0;
let savedHighscore = 0;
let liveHighscore = 0;

//Add an eventListener that takes input from the input field
guessBtn.addEventListener("click", () => {

    userInputField = parseInt(document.querySelector('#userGuess').value);
    guessTries++;

    userInputField !== randomNumber
        ? paragraph.innerText = 'You were totally wrong'
        : paragraph.innerText = "You are right!";

    if (userInputField !== randomNumber){
        userInputField < randomNumber
            ? higherLowerParagraph.innerText = "go higher"
            : higherLowerParagraph.innerText = "go lower";
        liveHighscore = 0; //fix her, ved ikke om det overhoved er rigtigt
    }

    // if (userInputField === randomNumber) highscoreParagraph.hide(); fix paa et tidspunkt
    if (userInputField === randomNumber) {
        randomNumber = generateNumber();
        console.log(randomNumber);

        if (guessTries === 1) {
            liveHighscore++;

            if (liveHighscore > savedHighscore) {
                savedHighscore = liveHighscore;
                highscoreParagraph.innerText = liveHighscore;
            }
            guessTries = 0;

        }
    }
});

resetBtn.addEventListener('click', () => {
    randomNumber = generateNumber();
    paragraph.innerText = '';
    higherLowerParagraph.innerText = '';
    savedHighscore = 0;
    highscoreParagraph.innerText = ''
})
//Print something to the console

//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(randomNumber);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}