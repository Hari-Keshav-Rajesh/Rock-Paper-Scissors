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



let a=getComputerChoice()

function Rock(){
    const result=document.querySelector('.result');
        if(a==="rock"){
            const display=document.createElement("div");
            display.innerText="It is a draw";
            result.appendChild(display);
        }
        else if(a==="paper"){
            const display=document.createElement("div");
            display.innerText="YOU LOSE!!! Pper beats Rock";
            result.appendChild(display);
            ++Comp;
        }
        else if(a==="scissor"){
            const display=document.createElement("div");
            display.innerText="YOU WIN!!! Rock beats Scissor";
            result.appendChild(display);
            ++Play;
        }
    }

    function Paper(){
        const result=document.querySelector('.result');
        if(a==="paper"){
            const display=document.createElement("div");
            display.innerText="It is a draw";
            result.appendChild(display);
        }
        else if(a==="scissor"){
            const display=document.createElement("div");
            display.innerText="YOU LOSE!!! Scissor beats Paper";
            result.appendChild(display);
            ++Comp;
        }
        else if(a==="rock"){
            const display=document.createElement("div");
            display.innerText="YOU WIN!!! Paper beats Rock";
            result.appendChild(display);
            ++Play;
        }
    }

    function Scissor(){
        const result=document.querySelector('.result');
        if(a==="scissor"){
            const display=document.createElement("div");
            display.innerText="It is a draw";
            result.appendChild(display);
        }
        else if(a==="rock"){
            const display=document.createElement("div");
            display.innerText="YOU LOSE!!! Rock beats Scissor";
            result.appendChild(display);
            ++Comp;
        }
        else if(a==="paper"){
            const display=document.createElement("div");
            display.innerText="YOU WIN!!! Scissor beats Paper";
            result.appendChild(display);
            ++Play;
        }
    }

let Comp=0;
let Play=0;

/*function game(){
    while((Comp+Play)<5){
        if(Comp>2){
            console.log("The Computer has won");
            break;
        }
        if(Play>2){
            console.log("The Player has won");
            break;
        }
        round();
    }
    if(Comp>Play){
        console.log("Computer wins the game");
    }
    else{
        console.log("Player wins the game");
    }
}*/
const rock=document.querySelector('.rock');
const paper=document.querySelector('.paper');
const scissor=document.querySelector('.scissor');

rock.addEventListener('click',Rock);
paper.addEventListener('click',Paper);
scissor.addEventListener('click',Scissor);

