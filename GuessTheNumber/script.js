'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(
//   (document.querySelector('.message').textContent = '🎉 Correct Number!')
// );

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 80;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });

let scoreNow = 20,
  maxScore = 0;

console.log('I am under generator section');
let number = Math.trunc(Math.random() * 100) + 1;
console.log('generated is : ' + number);

let callBackFunction = function () {
  let guessed = Number(document.querySelector('.guess').value);

  if (!guessed || guessed < 0) {
    document.querySelector('.message').textContent =
      '❌ Please enter a valid number!';
  } else if (guessed == number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🎉 Correct Guess!';
    document.querySelector('.score').textContent = scoreNow;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (maxScore < scoreNow) {
      document.querySelector('.highscore').textContent = scoreNow;
      maxScore = scoreNow;
    }
  } else {
    scoreNow -= 1;

    if (scoreNow == 0) {
      document.querySelector('body').style.backgroundColor = '#BB0bFF';
      document.querySelector('.message').textContent =
        '😵 LOST Baby! ... Play Again!';
      document.querySelector('.guess').value = '';
      scoreNow = 20;
      document.querySelector('.score').textContent = scoreNow;
      document.querySelector('.number').textContent = number;
      console.log('I am under generator section');
      number = Math.trunc(Math.random() * 100) + 1;
      console.log('generated is : ' + number);
    } else {
      document.querySelector('.number').textContent = '?';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.message').textContent =
        guessed < number
          ? '📉 Low ↙️ .. Keep Guessing...!'
          : '📈 High ↖️ .. Keep Guessing...!';
    }
    document.querySelector('.score').textContent = scoreNow;
  }
};

document.querySelector('.check').addEventListener('click', callBackFunction);

document.addEventListener('keydown', function (lolus) {
  // console.log(lolus.key);
  if (lolus.key === 'Enter') {
    callBackFunction();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  scoreNow = 20;
  document.querySelector('.score').textContent = scoreNow;
  document.querySelector('.number').textContent = '?';
  console.log('I am under generator section');
  number = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  console.log('generated is : ' + number);
});
