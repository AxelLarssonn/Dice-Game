var knockoutNumber;
var totalScore = 0;

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("resetButton").addEventListener("click", resetGame);

function startGame() {
  knockoutNumber = parseInt(document.getElementById("knockoutInput").value);

  if (knockoutNumber >= 6 && knockoutNumber <= 9) {
    document.getElementById("knockoutInput").disabled = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("rollButton").disabled = false;
    document.getElementById("resetButton").disabled = false;
  } else {
    alert("Please choose a knockout number between 6 and 9.");
  }
}

function rollDice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var diceSum = dice1 + dice2;

  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";

  document.getElementById("diceResult").textContent = "Dice 1: " + dice1 + " - Dice 2: " + dice2;

  if (diceSum === knockoutNumber) {
    document.getElementById("diceResult").textContent += " - You lose!";
    document.getElementById("rollButton").disabled = true;
  } else {
    totalScore += diceSum;
    document.getElementById("totalScore").textContent = "Total Score: " + totalScore;
  }

  showDice(dice1, dice2);
}

function showDice(dice1, dice2) {
  document.getElementById("dice1").style.backgroundImage = "url('dice" + dice1 + ".jpg')";
  document.getElementById("dice2").style.backgroundImage = "url('dice" + dice2 + ".jpg')";

  document.getElementById("dice1").style.display = "block";
  document.getElementById("dice2").style.display = "block";
}

function resetGame() {
  knockoutNumber = null;
  totalScore = 0;

  document.getElementById("knockoutInput").value = "";
  document.getElementById("diceResult").textContent = "";
  document.getElementById("totalScore").textContent = "";
  document.getElementById("knockoutInput").disabled = false;
  document.getElementById("startButton").disabled = false;
  document.getElementById("rollButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("dice1").style.display = "none";
  document.getElementById("dice2").style.display = "none";
}
