
 let humanScore = 0; 
 let computerScore = 0;
 
function getHumanChoice() {
  let choice = prompt("Digite sua escolha");
  choice = choice.toLowerCase()
  
  if (choice === "pedra" || choice === "papel" ||choice === "tesoura") {
    return choice;
  } else {
    return "Fatal error"
  }
}

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  let choice;
  
  switch(num) {
    case 1:
      choice = "pedra";
      break;
    case 2:
      choice = "papel";
      break;
    case 3:
      choice = "tesoura";
      break;
    default:
      console.log("Fatal error")
  }
  
  return choice
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Empate")
        humanScore++
        computerScore++;
    } else if (
        (humanChoice === "pedra" && computerChoice === "tesoura") ||
        (humanChoice === "papel" && computerChoice === "pedra") ||
        (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
        console.log("Você venceu!");
        humanScore++; 
    } else {
        console.log("Você perdeu!");
        computerScore++;
    }
}

function playGame() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log(`Human Wins: ${humanScore} X ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`Computer Wins: ${humanScore} X ${computerScore}`)
    } else {
        console.log(`Draw: ${humanScore} X ${computerScore}`)
    }
}

playGame()

