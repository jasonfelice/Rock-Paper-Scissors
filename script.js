function mainGame(e) {

    const playerScoreElement = document.createElement("h1");
    const computerScoreElement = document.createElement("h1");
    const playerSelection = e.target.attributes.value.nodeValue;
    const computerSelection = computerPlay();
    let winner = 0;
    round++;

    if (playerSelection == "rock" && computerSelection == "rock") { winner = 0; }
    else if (playerSelection == "rock" && computerSelection == "paper") { winner = -1; }
    else if (playerSelection == "rock" && computerSelection == "scissors") { winner = 1; }

    else if (playerSelection == "paper" && computerSelection == "rock") { winner = 1; }
    else if (playerSelection == "paper" && computerSelection == "paper") { winner = 0; }
    else if (playerSelection == "paper" && computerSelection == "scissors") { winner = -1; }

    else if (playerSelection == "scissors" && computerSelection == "rock") { winner = -1; }
    else if (playerSelection == "scissors" && computerSelection == "paper") { winner = 1; }
    else if (playerSelection == "scissors" && computerSelection == "scissors") { winner = 0; }


    if (winner == 1) {
        playerScore++;
        playerScoreElement.appendChild(document.createTextNode("1"));
        computerScoreElement.appendChild(document.createTextNode("0"));
    }
    else if (winner == -1) {
        computerScore++;
        playerScoreElement.appendChild(document.createTextNode("0"));
        computerScoreElement.appendChild(document.createTextNode("1"));
    }
    else {
        playerScoreElement.appendChild(document.createTextNode("0"));
        computerScoreElement.appendChild(document.createTextNode("0"));
    }
    document.querySelector("#player_scores > .score").appendChild(playerScoreElement);
    document.querySelector("#computer_scores > .score").appendChild(computerScoreElement);

    if (round == 5) {
        console.log([playerScore, computerScore]);
        console.log(round);
        playerScore = 0;
        computerScore = 0;
        round = 0;

    }
}

let playerScore = 0;
let computerScore = 0;
let round = 0;


function clearScoreBoard() {
    const length = document.querySelectorAll("#player_scores .score h1").length;
    for (let i = 0; i < length; i++) {
        document.querySelectorAll(".score")[0].removeChild(document.querySelectorAll("#player_scores .score h1")[0]);
        document.querySelectorAll(".score")[1].removeChild(document.querySelectorAll("#computer_scores .score h1")[0]);
    }
}

function computerPlay() {
    choices = ["rock", "scissors", "paper"];
    return choices[Math.floor(Math.random() * choices.length)];
}

for (let i = 0; i < document.querySelectorAll("#player_selection > .btns").length; i++) {
    document.querySelectorAll("#player_selection > .btns")[i].addEventListener("click", mainGame);
}