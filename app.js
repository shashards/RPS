let choices = 
["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerPlay() {
    let response = prompt("Choose Rock, Paper or Scisors");
    return response.toLowerCase();
}



function playRound() {
    let result = 0;
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    if(playerSelection === computerSelection){
        console.log("Draw!")
    } else {
        if(playerSelection === "rock" && computerSelection === "paper"){
            console.log("You Lose! Paper beats Rock");
            result = 1;
        } else {
            if (playerSelection === "rock" && computerSelection === "scissors"){
                console.log("You Win! Rock beats Scissors");
                result = 2;
            } else {
                if(playerSelection === "paper" && computerSelection === "rock"){
                    console.log("You Win! Paper beats Rocks");
                    result = 2;
                } else {
                    if(playerSelection === "paper" && computerSelection === "scissors"){
                        console.log("You Lose! Scissors beats Paper");
                        result = 1;
                    } else {
                        if(playerSelection === "scissors" && computerSelection === "rock"){
                            console.log("You Lose! Rock beats Scissors");
                            result = 1;
                        } else {
                            if(playerSelection === "scissors" && computerSelection === "paper"){
                                console.log("You Win! Scissors beats paper");
                                result = 2;
                            }
                        }
                    }
                }
            }
        }
    } return result
}

// playRound(playerSelection, computerSelection);

game = () => {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        console.log("Player: " + playerScore + " : " + "Computer: " + computerScore)
        let result = playRound();
        if(result === 1){
            computerScore += 1;
        } else {
            if(result === 2){
                playerScore += 1;
            }
        } 
    } console.log("Player: " + playerScore + " : " + "Computer: " + computerScore)
    if(playerScore === computerScore){
        console.log("Its a draw!");
    } else {
        if(playerScore > computerScore){
            console.log("Winner Winner")
        } else {
            console.log("Loser!")
        }
    }
}

game();



