
let playerRock = document.getElementById('playerRock');
let playerPaper = document.getElementById('playerPaper');
let playerScissors = document.getElementById('playerScissors');

let compRock = document.getElementById('compRock');
let compPaper = document.getElementById('compPaper');
let compScissors = document.getElementById('compScissors');

let gameIcons = document.querySelectorAll('.choice-icon');


const choices = {
    rock: {
        name: 'Rock',
        defeats: 'scissors'
    },
    paper: {
        name: 'Paper',
        defeats: 'rock'
    },
    scissors: {
        name: 'Scissors',
        defeats: 'paper'

    },
};

let compChoice = '';

function resetAll() {

    resultText.style.wordSpacing = '';
    resultText.textContent = '';
    resultText.style.width = '';
    resultText.style.height = '';
    resultText.style.backgroundColor = '';
    resultText.style.borderRadius = '';
    resultText.style.transform = '';
    resultText.style.color = '';
    resultText.style.fontFamliy = '';
    resultText.style.fontSize = '';
    resultText.style.lineHeight = '';
    resultText.style.textAlign = '';
    resultText.style.letterSpacing = '';

    resetSelected();
}

function compRandomChoice() {
    const compChoiceNumber = Math.random();
    if (compChoiceNumber < 0.2) {
        compChoice = 'rock';
    } else if (compChoiceNumber <= 0.4) {
        compChoice = 'paper';
    } else if (compChoiceNumber <= 0.6) {
        compChoice = 'scissors';
    }
}

function displayCompChoice() {
    switch (compChoice) {
        case 'rock':
            compRock.classList.add('selected');

            break;
        case 'paper':
            compPaper.classList.add('selected');

            break;
        case 'scissors':
            compScissors.classList.add('selected');

            break;

        default:
            break;

    }
}

function updateResult(playerChoice) {

    if (playerChoice === compChoice) {
        resultText.textContent = "DRAW"

        resultText.style.width = "271.11px";
        resultText.style.height = "166.93px";
        resultText.style.backgroundColor = "#035B0C";
        resultText.style.borderRadius = "10px";
        resultText.style.transform = "rotate(-28.87deg)";
        resultText.style.color = "white";
        resultText.style.fontFamliy = "'Open Sans', sans-serif";
        resultText.style.fontSize = "38px";
        resultText.style.lineHeight = "51.75px";
        resultText.style.textAlign = "center";
        resultText.style.letterSpacing = "0.1em;";


    } else {
        let choice = choices[playerChoice];
        if (choice.defeats.indexOf(compChoice) > -1) {
            resultText.textContent = "PLAYER 1 WIN";

            resultText.style.wordSpacing = "0";
            resultText.style.width = "271.11px";
            resultText.style.height = "166.93px";
            resultText.style.backgroundColor = "#4C9654";
            resultText.style.borderRadius = "10px";
            resultText.style.transform = "rotate(-28.87deg)";
            resultText.style.color = "white";
            resultText.style.fontFamliy = "'Open Sans', sans-serif";
            resultText.style.fontSize = "38px";
            resultText.style.lineHeight = "51.75px";
            resultText.style.textAlign = "center";
            resultText.style.letterSpacing = "0.1em;"

        } else {
            resultText.textContent = "COM WIN";

            resultText.style.wordSpacing = "40px";
            resultText.style.width = "271.11px";
            resultText.style.height = "166.93px";
            resultText.style.backgroundColor = "#4C9654";
            resultText.style.borderRadius = "10px";
            resultText.style.transform = "rotate(-28.87deg)";
            resultText.style.color = "white";
            resultText.style.fontFamliy = "'Open Sans', sans-serif";
            resultText.style.fontSize = "38px";
            resultText.style.lineHeight = "51.75px";
            resultText.style.textAlign = "center";
            resultText.style.letterSpacing = "0.1em;"
        }
    }
}

function resetSelected() {
    gameIcons.forEach((icon) => {
        icon.classList.remove('selected');
        resultText.textContent = "VS";


    });
}

function checkResult(playerChoice) {
    resetSelected();
    compRandomChoice();
    displayCompChoice();
    updateResult(playerChoice);

}

function select(playerChoice) {
    checkResult(playerChoice);

    switch (playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');

            break;
        case 'paper':
            playerPaper.classList.add('selected');

            break;
        case 'scissors':
            playerScissors.classList.add('selected');

            break;
        default:
            break;
    }
}