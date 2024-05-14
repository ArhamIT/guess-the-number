let secretNumber;
let roundsPlayed = 0;
let roundsWon = 0;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);

  if (guess === secretNumber) {
    document.getElementById('message').textContent = 'Congratulations! You guessed the secret number!';
    roundsWon++;
  } else {
    document.getElementById('message').textContent = 'Sorry, the secret number was ' + secretNumber;
  }

  roundsPlayed++;
  document.getElementById('rounds-won').textContent = roundsWon;
  document.getElementById('rounds-played').textContent = roundsPlayed;

  if (roundsPlayed === 10) {
    endGame();
  }
}

function endGame() {
  alert('Game Over!\nYou won ' + roundsWon + ' out of ' + roundsPlayed + ' rounds.');
  if (roundsWon >= 3) {
    alert('Congratulations! You win the game!');
  } else {
    alert('Sorry, you didn\'t win the game. Better luck next time!');
  }
}

startGame();
