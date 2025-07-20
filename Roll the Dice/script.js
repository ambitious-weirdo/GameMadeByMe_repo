

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const sectionP1 = document.querySelector('.player--0');
const sectionP2 = document.querySelector('.player--1');

alert(`Want to play the game ?...Click OK and then enter player names!`);

let p1 = prompt(`Who is Player 1 ?...🤔 LOL`);
if (p1.length > 5) {
  alert(`Player 1 - name should not be more than 8 char long..shorting...`);
  p1 = p1.substring(0, 5);
}
let p2 = prompt(`Player 2 ....even has a name?...🤣 LMAO XD`);
if (p2.length > 5) {
  alert(`Player 2 - name should not be more than 8 char long..shorting...`);
  p2 = p2.substring(0, 5);
}

document.getElementById('name--0').textContent = '🩻' + ' - ' + p1 + ' Buoy !';
document.getElementById('name--1').textContent = '🐧' + ' - ' + p2 + ' Dudy !';

let scoreP1 = 0,
  scoreP2 = 0,
  scoreP1current = 0,
  scoreP2current = 0,
  diceRolled = 0;

const resetPlayer1 = function () {
  (scoreP1 = 0),
    (scoreP1current = 0),
    (document.querySelector('#current--0').textContent = scoreP1current);
  document.querySelector('#score--0').textContent = scoreP1;
};

const resetPlayer2 = function () {
  (scoreP2 = 0),
    (scoreP2current = 0),
    (document.querySelector('#current--1').textContent = scoreP2current);
  document.querySelector('#score--1').textContent = scoreP2;
};

const newGame = function () {
  resetPlayer1();
  resetPlayer2();
  sectionP1.classList.add('player--active');
  sectionP2.classList.remove('player--active');
  diceImage(0);
  document.querySelector('.modal1').classList.add('hidden');
  document.querySelector('.modal2').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

const diceImage = function (x) {
  document.querySelector('.dice1').classList.add('hidden');
  document.querySelector('.dice2').classList.add('hidden');
  document.querySelector('.dice3').classList.add('hidden');
  document.querySelector('.dice4').classList.add('hidden');
  document.querySelector('.dice5').classList.add('hidden');
  document.querySelector('.dice6').classList.add('hidden');
  document.querySelector('.diceInfinite').classList.add('hidden');

  switch (x) {
    case 1:
      document.querySelector('.dice1').classList.remove('hidden');
      break;
    case 2:
      document.querySelector('.dice2').classList.remove('hidden');
      break;
    case 3:
      document.querySelector('.dice3').classList.remove('hidden');
      break;
    case 4:
      document.querySelector('.dice4').classList.remove('hidden');
      break;
    case 5:
      document.querySelector('.dice5').classList.remove('hidden');
      break;
    case 6:
      document.querySelector('.dice6').classList.remove('hidden');
      break;
    default:
      document.querySelector('.diceInfinite').classList.remove('hidden');
      break;
  }
};

const roll = function () {
  diceRolled = Math.trunc(Math.random() * 6) + 1;
  //console.log(diceRolled);
  diceImage(diceRolled);
  if (sectionP1.classList.contains('player--active')) {
    if (diceRolled != 1) {
      // diceImage(diceRolled);
      scoreP1current += diceRolled;
      document.querySelector('#current--0').textContent = scoreP1current;
    } else {
      //   diceImage(diceRolled);
      resetPlayer1();
      sectionP2.classList.add('player--active');
      sectionP1.classList.remove('player--active');
      return;
    }
  }
  if (sectionP2.classList.contains('player--active')) {
    if (diceRolled != 1) {
      //   diceImage(diceRolled);
      scoreP2current += diceRolled;
      document.querySelector('#current--1').textContent = scoreP2current;
    } else {
      //   diceImage(diceRolled);
      resetPlayer2();
      sectionP1.classList.add('player--active');
      sectionP2.classList.remove('player--active');
    }
  }
};

const hold = function () {
  //   console.log('I am here');
  if (sectionP1.classList.contains('player--active')) {
    scoreP1 += scoreP1current;
    if (scoreP1 >= 50) {
      document.querySelector('.modal1').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
      document.querySelector('.player1').innerHTML =
        '🎉 Winner is <i>' + p1 + '</i> 🎉';
    } else {
      //   console.log('I am here');
      scoreP1current = 0;
      document.querySelector('#current--0').textContent = scoreP1current;
      document.querySelector('#score--0').textContent = scoreP1;
      sectionP2.classList.add('player--active');
      sectionP1.classList.remove('player--active');
      return;
    }
  }
  if (sectionP2.classList.contains('player--active')) {
    scoreP2 += scoreP2current;
    if (scoreP2 >= 50) {
      document.querySelector('.modal2').classList.remove('hidden');
      document.querySelector('.overlay').classList.remove('hidden');
      document.querySelector('.player2').innerHTML =
        '🎉 Winner is <i>' + p2 + '</i> 🎉';
    } else {
      scoreP2current = 0;
      document.querySelector('#current--1').textContent = scoreP2current;
      document.querySelector('#score--1').textContent = scoreP2;
      sectionP1.classList.add('player--active');
      sectionP2.classList.remove('player--active');
    }
  }
};

btnNewGame.addEventListener('click', newGame);
btnRoll.addEventListener('click', roll);
btnHold.addEventListener('click', hold);

document.querySelector('.play-again1').addEventListener('click', newGame);
document.querySelector('.play-again2').addEventListener('click', newGame);
