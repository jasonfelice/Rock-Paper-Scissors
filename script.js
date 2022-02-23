function mainGame(e){

    
    const playerSelection = e.target.attributes.value.nodeValue;
    const computerSelection = computerPlay();

    function play(){
     if(playerSelection=="rock"&&computerSelection=="rock"){return 0;}
        else if(playerSelection=="rock"&&computerSelection=="paper"){return -1;}
        else if(playerSelection=="rock"&&computerSelection=="scissors"){return 1;}
    
        else if(playerSelection=="paper"&&computerSelection=="rock"){return 1;}
         else if(playerSelection=="paper"&&computerSelection=="paper"){return 0;}
         else if(playerSelection=="paper"&&computerSelection=="scissors"){return -1;}
    
         else if(playerSelection=="scissors"&&computerSelection=="rock"){return -1;}
         else if(playerSelection=="scissors"&&computerSelection=="paper"){return 1;}
         else if(playerSelection=="scissors"&&computerSelection=="scissors"){return 0;}
    }
    play();
}

function computerPlay() {
    choices = ["rock", "scissors","paper"];
       return choices[Math.floor(Math.random() * choices.length)];
   }

for(let i = 0; i<document.querySelectorAll("#player_selection > .btns").length;i++){
    document.querySelectorAll("#player_selection > .btns")[i].addEventListener("click", mainGame);
}