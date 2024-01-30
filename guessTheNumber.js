let randomNumber = generateRandomNumber();
console.log(randomNumber);

let message = document.querySelector(".msg");

let score = 10;
let topScore = 0;

document.querySelector("#btnCheck").addEventListener("click", () => {
  const guess = document.querySelector(".guessInput").value;

  if (!isValidGuess(guess)) {
    message.textContent = "Enter a number between 0-20.";
  } else if (checkGuess(parseInt(guess), randomNumber)) {
    handleCorrectGuess();
  } else {
    handleIncorrectGuess(parseInt(guess));
  }
});

document.querySelector("#btnAgain").onclick = () => {
  resetGame();
};

function generateRandomNumber() {
  return Math.ceil(Math.random() * 20);
}

function isValidGuess(guess) {
  return guess !== '' && guess >= 0 && guess <= 20;
}

function checkGuess(guess, target) {
  return guess === target;
}

function handleCorrectGuess() {
  message.textContent = "Guessed Right! 🎉";
  document.querySelector(".showNumber").textContent = randomNumber;
  if (score > topScore) {
    topScore = score;
    document.querySelector(".top-score").textContent = topScore;
  }
}

function handleIncorrectGuess(guess) {
  if (score > 1) {
    score--;
    document.querySelector(".score").textContent = score;

    guess < randomNumber
      ? (message.textContent = "Higher!")
      : (message.textContent = "Lower!");
  } else {
    endGame();
  }
}

function resetGame() {
  randomNumber = generateRandomNumber();
  message.textContent = "Newame is starting!";
  document.querySelector(".showNumber").textContent = '?';
  document.querySelector(".guessInput").value = "0";
  score = 10;
  document.querySelector(".score").textContent = 10;
}

function endGame() {
  message.textContent = "Game Over! You lost.";
  document.querySelector(".score").textContent = 0;
}
