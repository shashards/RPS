let choices = 
["rock", "paper", "scissors"];

// Set Globals

let computerSelection = computerPlay();
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// Get Page Elements

const resultDIV = document.getElementById("result");
const scoreDIV = document.getElementById("score");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Set Event Listeners 

rockButton.addEventListener("click", function setRock(){
   playerSelection = "rock";
   computerSelection = computerPlay();
   playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", function setPaper(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", function setScissors(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        resultDIV.innerHTML = "Draw!";
        scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
    } else {
        if(playerSelection === "rock" && computerSelection === "paper"){
            resultDIV.innerHTML = "You Lose! Paper beats Rock";
            computerScore += 1;
            scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
        } else {
            if (playerSelection === "rock" && computerSelection === "scissors"){
                resultDIV.innerHTML = "You Win! Rock beats Scissors";
                playerScore += 1;
                scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
            } else {
                if(playerSelection === "paper" && computerSelection === "rock"){
                    resultDIV.innerHTML = "You Win! Paper beats Rocks";
                    playerScore += 1;
                    scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
                } else {
                    if(playerSelection === "paper" && computerSelection === "scissors"){
                        resultDIV.innerHTML = "You Lose! Scissors beats Paper";
                        computerScore += 1;
                        scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
                    } else {
                        if(playerSelection === "scissors" && computerSelection === "rock"){
                            resultDIV.innerHTML = "You Lose! Scissors beats Paper";
                            computerScore += 1;
                            scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
                        } else {
                            if(playerSelection === "scissors" && computerSelection === "paper"){
                                resultDIV.innerHTML = "You Win! Scissors beats paper";
                                playerScore += 1;
                                scoreDIV.innerHTML = "Player " + playerScore + " - " + computerScore + " Computer"
                            }
                        }
                    }
                }
            }
        }
    } if(computerScore == 5){
        resultDIV.innerHTML = "You Lost that round!";
        playerScore = 0;
        computerScore = 0;
    } else {
        if(playerScore == 5){
            resultDIV.innerHTML = "You Won that round!";
            playerScore = 0;
            computerScore = 0;
    }}
}



