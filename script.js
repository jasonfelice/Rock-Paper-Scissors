let whoWins = 0;

function computerPlay() {
    if (Math.floor(Math.random() * 1000) % 3 === 0) { return "rock" }
    else if (Math.floor(Math.random() * 1000) % 3 === 1) { return "paper" }
    else { return "scissors" }
}


function play() {
    const playerSelection = prompt("Rock, Paper or Scissors", "").toLowerCase();
    if (playerSelection == 'rock' && computerPlay() == 'rock') { whoWins = 0; return "Tie!" }
    else if (playerSelection == 'rock' && computerPlay() == 'paper') { whoWins = -1; return "You Lose! Paper beats Rock" }
    else if (playerSelection == 'rock' && computerPlay() == 'scissors') { whoWins = 1; return "You Win! Rock beats Scissors" }
    else if (playerSelection == 'paper' && computerPlay() == 'rock') { whoWins = 1; return "You Win! Paper beats Rock" }
    else if (playerSelection == 'paper' && computerPlay() == 'paper') { whoWins = 0; return "Tie!" }
    else if (playerSelection == 'paper' && computerPlay() == 'scissors') { whoWins = -1; return "You Lose! Scissors beats Paper" }
    else if (playerSelection == 'scissors' && computerPlay() == 'rock') { whoWins = -1; return "You Lose! Rock beats Scissors" }
    else if (playerSelection == 'scissors' && computerPlay() == 'paper') { whoWins = 1; return "You Win! Scissors beats Paper" }
    else if (playerSelection == 'scissors' && computerPlay() == 'scissors') { whoWins = 0; return "Tie!" }
}

function game() {
    let scores = [0, 0];
    for (let i = 0; i < 5; i++) {
        play();
        if (whoWins == 1) { scores[0] = (scores[0] + 1) }
        else if (whoWins == -1) { scores[1] = (scores[1] + 1) }
    }
    console.log("player " + scores[0]);
    console.log("computer " + scores[1]);
}