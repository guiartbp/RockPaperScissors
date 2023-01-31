function getComputerChoice () {
    let choise = ['Rock', 'Paper', 'Scissor']
    let numR = Math.floor(Math.random() * 3);
    
    return choise[numR]
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissor") {
        return "You win"    
    }else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win"
    }else if (playerSelection === "scissor" && computerSelection === "Paper") {
        return "You win"
    }
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose"    
    }else if (playerSelection === "paper" && computerSelection === "Scissor") {
        return "You lose"
    }else if (playerSelection === "scissor" && computerSelection === "Rock") {
        return "You lose"
    }else{
        return "Tie"
    }
}
function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Chose your weapon: Rock, Paper or Scissor").toLowerCase()
        const computerSelection = String(getComputerChoice());
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("End Game")
}

game()