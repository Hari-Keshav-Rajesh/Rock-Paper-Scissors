function getComputerChoice(){
    let rand=Math.floor(Math.random()*3);
    switch(rand){
        case 0:
            return "Rock";
        case 1:
            return "Scissor";
        case 2:
            return "Paper";
    }
}
let a=getComputerChoice();
