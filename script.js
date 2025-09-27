
let humanScore = 0;
let computerScore = 0;

let pedra = document.querySelector("#pedra");
let papel = document.querySelector("#papel");
let tesoura = document.querySelector("#tesoura");

let humanPoints = document.querySelector("#hPoints")
let robotPoints = document.querySelector("#rPoints")
let result = document.querySelector("#result")

let playerHand = document.querySelector("#playerChoice")
let robotHand = document.querySelector("#computerChoice")


function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  let choice;
    
  switch(num) {
    case 1:
      choice = "pedra";
      robotHand.textContent = "✊"
      break;
    case 2:
      choice = "papel";
      robotHand.textContent = "✋"
      break;
    case 3:
      choice = "tesoura";
      robotHand.textContent = "✌️"
      break;
    default:
      view.innerHTML = "Fatal error"
} 
  return choice
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  let roundResult = "";

  if (humanChoice == computerChoice) {
    roundResult = `Empate! Ambos escolheram ${humanChoice}.`;
  } else if (
    (humanChoice === "pedra" && computerChoice === "tesoura") ||
    (humanChoice === "papel" && computerChoice === "pedra") ||
    (humanChoice === "tesoura" && computerChoice === "papel")
  ) {
    humanScore++;
    roundResult = `Você venceu! ${humanChoice} ganha de ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult = `Você perdeu! ${computerChoice} ganha de ${humanChoice}.`
  }

  humanPoints.textContent = humanScore;
  robotPoints.textContent = computerScore;
  result.textContent = roundResult;

  
  // Verifica vencedor final
  if (humanScore >= 5) {
    result.textContent = `Parabéns! Você ganhou o jogo!`;
    resetGame();
  } else if (computerScore >= 5) {
    result.textContent = `O computador ganhou o jogo! Tente novamente.`;
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanPoints.textContent = humanScore;
  robotPoints.textContent = computerScore;
}

pedra.addEventListener("click", () => {
  playRound("pedra")
  playerHand.textContent = "✊"
})

papel.addEventListener("click", () => {
  playRound("papel")
  playerHand.textContent = "✋"
})

tesoura.addEventListener("click", () => {
  playRound("tesoura")
  playerHand.textContent = "✌️"
})


