'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 1;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secretNumber;

let lost = true;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (guess > 20 || guess < 1) {
    if (lost === true) {
      displayMessage('Number between 1 and 20!');
    }
  } else if (guess === secretNumber && lost) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1 && lost) {
      guess > secretNumber
        ? displayMessage('Too high')
        : displayMessage('Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lost = false;
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game.');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  lost = true;
  score = 1;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
