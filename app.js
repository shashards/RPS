let choices = 
["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerPlay() {
    let response = prompt("Choose Rock, Paper or Scisors");
    return response.toLowerCase();
}

const computerSelection = computerPlay();
const playerSelection = playerPlay();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log("Draw!")
    } else {
        if(playerSelection === "rock" && computerSelection === "paper"){
            console.log("You Lose! Paper beats Rock");
        } else {
            if (playerSelection === "rock" && computerSelection === "scissors"){
                console.log("You Win! Rock beats Scissors");
            } else {
                if(playerSelection === "paper" && computerSelection === "rock"){
                    console.log("You Win! Paper beats Rocks");
                } else {
                    if(playerSelection === "paper" && computerSelection === "scissors"){
                        console.log("You Lose! Scissors beats Paper")
                    } else {
                        if(playerSelection === "scissors" && computerSelection === "rock"){
                            console.log("You Lose! Rock beats Scissors")
                        } else {
                            if(playerSelection === "scissors" && computerSelection === "paper"){
                                console.log("You Win! Scissors beats paper")
                            }
                        }
                    }
                }
            }
        }
    }
}

playRound(playerSelection, computerSelection);

