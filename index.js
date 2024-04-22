let computerSelection = {Value:""};
let playerSelection;
let computerSelectionInt = 0;
let playerSelectionInt = 0;


const buttons = document.querySelectorAll(".btn");

let computerScore = 0;
let playerScore = 0;

const playerSelectionContent = document.querySelector("#playerselection");
playerSelectionContent.textContent = `You chose ${playerSelection}`;
const computerSelectionContent = document.querySelector("#computerselection");
computerSelectionContent.textContent = `Computer chose ${computerSelection.Value}`;

const playerGrade = document.querySelector("#playerscore");
playerGrade.textContent =  `Player Score: ${playerScore}`;
const computerGrade = document.querySelector("#computerscore");
computerGrade.textContent = `Computer Score: ${computerScore}`;

const outcomec = document.querySelector("#outcome");
outcomec.textContent = "Wish You Good Luck!";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        if(playerSelection === "rock"){
            playerSelectionInt = 0;
        }
        if(playerSelection === "paper"){
            playerSelectionInt = 1;
        }
        if(playerSelection === "scissors"){
            playerSelectionInt = 2;
        }
        computerSelectionInt = computerPlay(computerSelection);
        playGame();
    });
});

function computerPlay(){
    let comRandom = Math.floor(Math.random() * 3);
    if(comRandom == 0){
        computerSelection.Value = "rock";
    }
    if(comRandom == 1){
        computerSelection.Value = "paper";
    }
    if(comRandom == 2){
        computerSelection.Value = "scissors";
    }
    return comRandom;
}

function playRound(){
    let win_array = [[0, 2, 1], 
                    [1, 0, 2], 
                    [2, 1, 0]];
let result = win_array[playerSelectionInt][computerSelectionInt];
if (result == 0){
outcomec.textContent = 'Its a tie!';
playerSelectionContent.textContent = `You chose ${playerSelection}`;
computerSelectionContent.textContent = `Computer chose ${computerSelection.Value}`;
}
else if (result == 1){
outcomec.textContent = 'You won!';
playerSelectionContent.textContent = `You chose ${playerSelection}`;
computerSelectionContent.textContent = `Computer chose ${computerSelection.Value}`;
playerScore++;

}
else if (result == 2){
outcomec.textContent = 'You lost!';
playerSelectionContent.textContent = `You chose ${playerSelection}`;
computerSelectionContent.textContent = `Computer chose ${computerSelection.Value}`;
computerScore++;
}
}

function playGame(){
    outcomec.textContent = "Choose Rock, Paper, or Scissors";
    playRound();
    playerGrade.textContent = `Player Score: ${playerScore}`;
    computerGrade.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5){
        outcomec.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        computerScore = 0;
        playerGrade.textContent = `Player Score: ${playerScore}`;
        computerGrade.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5){
        outcomec.textContent = "You Lost the Game! Sorry!"
        playerScore = 0;
        computerScore = 0;
        playerGrade.textContent = `Player Score: ${playerScore}`;
        computerGrade.textContent = `Computer Score: ${computerScore}`;
    }
}

