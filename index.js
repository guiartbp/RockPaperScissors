const showResult = document.getElementById('showResult');

let pointPlayer = 0;
let pointPc = 0;
const yourScore = document.getElementById('yourScore');
const pcScore = document.getElementById('pcScore');


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
    playAgain.style.display = 'none'
    showResult.style.display = 'none'

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            showResult.style.display = "block";
            const playerSelection = button.id;
            const computerSelection = String(getComputerChoice());
            const result = playRound(playerSelection, computerSelection);
            if (result === 2){
                pointPlayer++;
                showResult.textContent = "Win";
                yourScore.textContent = pointPlayer;

            } else if (result === 1){
                pointPc++;
                showResult.textContent = "Lose";
                pcScore.textContent = pointPc;
            } else{
                showResult.textContent = "Tie";
            }
            if (pointPlayer === 5){
                endGame('win')
            } else if (pointPc === 5){
                endGame('lose')
            }

        });
    });
}

game()

function endGame(result) {
    pointPlayer = 0;
    pointPc = 0;
    yourScore.textContent = pointPlayer;
    pcScore.textContent = pointPc;

    if (result === 'win'){
        showResult.textContent = "You Win!"
    } else{
        showResult.textContent = "You Lose!"
    }

    playAgain.style.display = 'block'
    playAgain.addEventListener('click', () => {
        game();
      });

}