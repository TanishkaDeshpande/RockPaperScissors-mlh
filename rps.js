const choices = ["rock", "paper", "scissors"];

function play(choice) {
    const computerChoice = getRandomChoice();
    const result = getResult(choice, computerChoice);
    displayResult(choice, computerChoice, result);
}

function getRandomChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const message = `You chose ${playerChoice}.The computer chose ${computerChoice}. ${result}`;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = message;
}
