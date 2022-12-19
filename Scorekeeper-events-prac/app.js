
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winnningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

let gameOver = false;

player1.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
});
player2.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;
    }
});

winnningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetButton();
});
reset.addEventListener('click', resetButton);

function resetButton() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
};