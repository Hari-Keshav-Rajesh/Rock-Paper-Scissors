function getComputerChoice(){
    let rand=Math.floor(Math.random()*3);
    switch(rand){
        case 0:
            return "rock";
        case 1:
            return "scissor";
        case 2:
            return "paper";
    }
}


function round(){
    let PlaySel=prompt("Enter your play(rock/paper/scissor)");

    if(PlaySel.toLowerCase()==="rock"){
        if(getComputerChoice()==="rock"){
            console.log("It is a draw!");
        }
        else if(getComputerChoice()==="paper"){
            console.log("You LOSE!! Paper beats Rock.");
            ++Comp;
        }
        else if(getComputerChoice()==="scissor"){
            console.log("You WIN!! Rock beats Scissor");
            ++Play;
        }
    }

    else if(PlaySel.toLowerCase()==="paper"){
        if(getComputerChoice()==="paper"){
            console.log("It is a draw!");
        }
        else if(getComputerChoice()==="scissor"){
            console.log("You LOSE!! Scissor beats Paper.");
            ++Comp;
        }
        else if(getComputerChoice()==="rock"){
            console.log("You WIN!! Paper beats Rock");
            ++Play;
        }
    }

    else if(PlaySel.toLowerCase()==="scissor"){
        if(getComputerChoice()==="scissor"){
            console.log("It is a draw!");
        }
        else if(getComputerChoice()==="rock"){
            console.log("You LOSE!! Rock beats Scissor.");
            ++Comp;
        }
        else if(getComputerChoice()==="paper"){
            console.log("You WIN!! Scissor beats Paper");
            ++Play;
        }
    }
}

let Comp=0;
let Play=0;

function game(){
    while((Comp+Play)<5){
        round();
    }
    if(Comp>Play){
        console.log("Computer wins the game");
    }
    else{
        console.log("Player wins the game");
    }
}
game();