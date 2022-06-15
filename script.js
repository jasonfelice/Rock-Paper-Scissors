let playerScore = 0;
let computerScore = 0;
let round = 0;
let totalPlayerScores = 0;
let totalComputerScores = 0;
let selectedRounds = 3;

document.getElementById'playAgain').addEventListener("click", playAgain);
document.getElementById('roundPlus').addEventListener("click", roundPlus);
document.getElementById("roundMinus").addEventListener("click", roundMinus);

document.getElementById('roundDisplayBox').textContent = `${selectedRounds}`;




function mainGame(e) {
    document.getElementById("round_container").classList.remove("display_flex");
    document.getElementById("round_container").classList.add("display_none");
    const playerScoreElement = document.createElement("h1");
    const computerScoreElement = document.createElement("h1");
    const playerSelection = e.target.attributes.value.nodeValue;
    const computerSelection = computerPlay();
    let winner = 0;
    round++;
    whoWon();
    updateComputerButtons();
    updateScores();
    gameOver();

    function updateComputerButtons(){
        if(computerSelection === "paper"){
            displayPaper();
            }
        else if(computerSelection === "rock"){
         displayRock();
        }
        else if(computerSelection === "scissors"){
         displayScissors();
        }
    }

    function whoWon(){
        if (playerSelection == "rock" && computerSelection == "rock") { winner = 0; }
        else if (playerSelection == "rock" && computerSelection == "paper") { winner = -1; }
        else if (playerSelection == "rock" && computerSelection == "scissors") { winner = 1; }

        else if (playerSelection == "paper" && computerSelection == "rock") { winner = 1; }
        else if (playerSelection == "paper" && computerSelection == "paper") { winner = 0; }
        else if (playerSelection == "paper" && computerSelection == "scissors") { winner = -1; }

        else if (playerSelection == "scissors" && computerSelection == "rock") { winner = -1; }
        else if (playerSelection == "scissors" && computerSelection == "paper") { winner = 1; }
        else if (playerSelection == "scissors" && computerSelection == "scissors") { winner = 0; }
    }

    function updateScores(){
        if (winner == 1) {
            playerScore++;
            playerScoreElement.appendChild(document.createTextNode("1"));
            computerScoreElement.appendChild(document.createTextNode("0"));
            totalPlayerScores++;
        }
        else if (winner == -1) {
            computerScore++;
            playerScoreElement.appendChild(document.createTextNode("0"));
            computerScoreElement.appendChild(document.createTextNode("1"));
            totalComputerScores++;
        }
        else {
            playerScoreElement.appendChild(document.createTextNode("0"));
            computerScoreElement.appendChild(document.createTextNode("0"));
        }
        document.querySelector("#player_scores > .score").appendChild(playerScoreElement);
        document.querySelector("#computer_scores > .score").appendChild(computerScoreElement);
    }

    function gameOver(){
        if (round === selectedRounds) {
            document.getElementById("gameOver").classList.remove("display_none");
            document.getElementById("gameOver").classList.remove("display_block");
            document.getElementById("totalPlayerScores").textContent = `Player: ${totalPlayerScores}`;
            document.getElementById("totalComputerScores").textContent = `Computer: ${totalComputerScores}`;
            document.getElementById("total_scores").classList.remove("display_none");
            document.getElementById("total_scores").classList.add("display_flex");
            document.getElementById("winOrLose").classList.remove("display_none");
            document.getElementById("playAgain").classList.remove("display_none");
        
            if(totalPlayerScores>totalComputerScores){
                document.getElementById('win').classList.remove('display_none');
            }
            else if(totalPlayerScores<totalComputerScores){
                document.getElementById('lose').classList.remove('display_none');
            }
            else if(totalPlayerScores==totalComputerScores){
                document.getElementById('tie').classList.remove('display_none');
            }
        for (let i = 0; i < document.querySelectorAll("#player_selection > .btns").length; i++) {
            document.querySelectorAll("#player_selection > .btns")[i].removeEventListener("click", mainGame);
            setTimeout(displayAllComputerButtons, 1500);
        }
        }
    }
}


function playAgain(){
    location.reload();
}

function computerPlay() {
    choices = ["rock", "scissors", "paper"];
    return choices[Math.floor(Math.random() * choices.length)];
}

for (let i = 0; i < document.querySelectorAll("#player_selection > .btns").length; i++) {
    document.querySelectorAll("#player_selection > .btns")[i].addEventListener("click", mainGame);
}
for (let i = 0; i < document.querySelectorAll("#computer_selection > .btns").length; i++) {
    document.querySelectorAll("#computer_selection > .btns")[i].addEventListener("click", computerHands);
}

function displayPaper(){
    document.getElementById("paper_c").classList.remove("display_none");
    document.getElementById("rock_c").classList.add("display_none");
    document.getElementById("scissors_c").classList.add("display_none");
}

function displayRock(){
    document.getElementById("rock_c").classList.remove("display_none");
    document.getElementById("paper_c").classList.add("display_none");
    document.getElementById("scissors_c").classList.add("display_none");
}

function displayScissors(){
    document.getElementById("scissors_c").classList.remove("display_none");
    document.getElementById("paper_c").classList.add("display_none");
    document.getElementById("rock_c").classList.add("display_none");
}

function displayAllComputerButtons(){
    document.getElementById("scissors_c").classList.remove("display_none");
    document.getElementById("paper_c").classList.remove("display_none");
    document.getElementById("rock_c").classList.remove("display_none");
}

function roundPlus(){
    selectedRounds++;
    document.getElementById('roundDisplayBox').textContent = `${selectedRounds}`;
    if(selectedRounds===10){
        document.getElementById("roundPlus").removeEventListener("click", roundPlus);
    }
    else if(selectedRounds>1){
        document.getElementById("roundMinus").addEventListener("click", roundMinus);
    }
}

function roundMinus(){
    selectedRounds--;
    document.getElementById('roundDisplayBox').textContent = `${selectedRounds}`;
    if(selectedRounds===1){
        document.getElementById("roundMinus").removeEventListener("click", roundMinus);
    }
    else if(selectedRounds<10){
        document.getElementById("roundPlus").addEventListener("click", roundPlus);
    }
}

function computerHands(){
    const choices = ["Use your hands! The ones the left side.", "These are my hands!", "Not your hands!"]
    alert(choices[Math.floor(Math.random() * choices.length)]);
}
