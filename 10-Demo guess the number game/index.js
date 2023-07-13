var min = 1;
var max = 100;
var guess;
var resultElement = document.getElementById("result");
var guessNumberElement = document.getElementById("guess-number");
var lowerButton = document.getElementById("lower-btn");
var correctButton = document.getElementById("correct-btn");
var higherButton = document.getElementById("higher-btn");

guess = guessCalculation();

function makeGuess(feedback) {
  if (feedback === "lower") {
    max = guess - 1;
  } else if (feedback === "higher") {
    min = guess + 1;
  } else if (feedback === "correct") {
    resultElement.innerHTML = "I guessed it! Your number is " + guessNumberElement.textContent + ".";
    lowerButton.disabled = true;
    higherButton.disabled = true;
    lowerButton.style.display = "none";
    higherButton.style.display = "none";
    correctButton.innerText = "Reset";
    correctButton.onclick = resetGame;

    return;
  }

  guess = guessCalculation();
  guessNumberElement.textContent = guess.toString();
}

function guessCalculation() {
  return Math.floor((min + max) / 2);
}

function resetGame() {
  min = 1;
  max = 100;
  guess = guessCalculation();
  resultElement.innerHTML = "";
  guessNumberElement.textContent = "50";
  lowerButton.disabled = false;
  higherButton.disabled = false;
  correctButton.innerText = "Correct";
  correctButton.onclick = function() {
    makeGuess('correct');
  };
  lowerButton.style.display = "inline-block";
  higherButton.style.display = "inline-block";
}
