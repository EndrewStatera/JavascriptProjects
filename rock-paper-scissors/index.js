let buttons = document.getElementsByClassName("choice");
const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("player");
const computerDisplay = document.getElementById("computer");
const resultDisplay = document.getElementById("result");

function play(choice){
    let computerChoice = options[Math.floor(Math.random() * 3)];
    /*let computerChoice = roubo(choice);*/
    /*IF YOU WANT TO TROLL ANIBODY*/

    let result = "";
    if(choice === computerChoice){
        result = "It's a tie!"
    }else{
        switch(choice){ 
            case options[0]:
                computerChoice === options[1] ? result = "YOU LOSE!" : result = 'YOU WIN!'; break;
            case options[1]:
                computerChoice === options[2] ? result = "YOU LOSE!" : result = 'YOU WIN!'; break;
            case options[2]:
                computerChoice === options[0] ? result = "YOU LOSE!" : result = 'YOU WIN!'; break;
        }
    }

    playerDisplay.textContent = `Player: ${choice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");break;
    }
}

function roubo(choice){
    switch(choice){
        case options[0]: return options[1];
        case options[1]: return options[2];
        case options[2]: return options[0];
    }
}