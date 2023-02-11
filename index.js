function getComputerChoice () {
    let choise = ['Rock', 'Paper', 'Scissor']
    let numR = Math.floor(Math.random() * 3);
    
    return choise[numR]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Scissor") {
        return 2;
    }else if (playerSelection === "paper" && computerSelection === "Rock") {
        return 2;
    }else if (playerSelection === "scissor" && computerSelection === "Paper") {
        return 2;
    }
    if (playerSelection === "rock" && computerSelection === "Paper") {
        return 1;
    }else if (playerSelection === "paper" && computerSelection === "Scissor") {
        return 1;
    }else if (playerSelection === "scissor" && computerSelection === "Rock") {
        return 1;
    }else{
        return 0;
    }
}
function game () {
    const buttons = document.querySelectorAll('button');

    let pointPlayer = 0;
    let pointPc = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            const computerSelection = String(getComputerChoice());
            const result = playRound(playerSelection, computerSelection);
            if (result === 2){
                pointPlayer++;
            } else if (result === 1){
                pointPc++;
            } else{
                console.log('tie')
            }
            if (pointPlayer === 5){
                console.log("You win. End Game");
                pointPlayer = 0;
                pointPc = 0;
            } else if (pointPc === 5){
                console.log("You lose. End Game");
                pointPlayer = 0;
                pointPc = 0;
            }
            console.log("Point Player " + pointPlayer + " x " + pointPc + " Point PC")

        });
    });
}

game()