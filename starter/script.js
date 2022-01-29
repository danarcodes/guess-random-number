'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'Correct number brother!';
  } else if (!guess) {
    document.querySelector('.message').textContent = 'There is no number!';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!';
  }
});
