'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const diceRollBtn = document.querySelector('.btn--roll');
const diceHoldBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

// Expressions
const rollDice = function() {
    return Number(Math.trunc(Math.random() * 6) + 1);
};
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Starter 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// 
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceRollBtn.addEventListener('click', function() {
    const dice = rollDice();
    diceEl.src = `dice-${dice}.png`
    diceEl.classList.remove('hidden');
    if (dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

diceHoldBtn.addEventListener('click', function() {
    scores[activePlayer] += currentScore;
    activePlayer === 0 ? score0El.textContent = scores[activePlayer] : score1El.textContent = scores[activePlayer];
    switchPlayer();
});



