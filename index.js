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
let CompSel=getComputerChoice();
let PlaySel=prompt("Enter your play(rock/paper/scissor)");

if(PlaySel.toLowerCase()==="rock"){
    if(CompSel==="rock"){
        console.log("It is a draw!");
    }
    if(CompSel==="paper"){
        console.log("You LOSE!! Paper beats Rock.");
    }
    if(CompSel==="scissor"){
        console.log("You WIN!! Rock beats Scissor");
    }
}

if(PlaySel.toLowerCase()==="paper"){
    if(CompSel==="paper"){
        console.log("It is a draw!");
    }
    if(CompSel==="scissor"){
        console.log("You LOSE!! Scissor beats Paper.");
    }
    if(CompSel==="rock"){
        console.log("You WIN!! Paper beats Rock");
    }
}

if(PlaySel.toLowerCase()==="scissor"){
    if(CompSel==="scissor"){
        console.log("It is a draw!");
    }
    if(CompSel==="rock"){
        console.log("You LOSE!! Rock beats Scissor.");
    }
    if(CompSel==="paper"){
        console.log("You WIN!! Scissor beats Paper");
    }
}

