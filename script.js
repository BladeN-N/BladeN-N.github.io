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

const init = function() {
    const scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
    let currentScore = 0;
    let activePlayer = 0;
    let playing = true;
}
// Beggining

init();

diceRollBtn.addEventListener('click', function() {
    if (playing) {
            const dice = rollDice();
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`
        if (dice !== 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
        switchPlayer();
        }
    }

});

diceHoldBtn.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore;
        activePlayer === 0 ? score0El.textContent = scores[activePlayer] : score1El.textContent = scores[activePlayer];
        if (scores[activePlayer] >= 50) {
        playing = false
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
        switchPlayer();
        }
    }
});

newGameBtn.addEventListener('click', function () {
    init();
})



