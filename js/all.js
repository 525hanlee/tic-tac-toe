/* Selector */
const startBtn = document.querySelectorAll('.startBtn');
const startBoard = document.querySelector('#start');
const gameBoard = document.querySelector('#play');
const game = document.querySelector('.game');
const ox = document.querySelectorAll('.ox');
const scoreX = document.querySelector('.x-score');
const scoreO = document.querySelector('.o-score');
const Xturn = document.querySelector('.x-turn');
const Oturn = document.querySelector('.o-turn');
/* Winner Board */
const Xwin = document.querySelector('.x-win');
const Owin = document.querySelector('.o-win');
const draw = document.querySelector('.draw');
/* init Data */
let gaming = false
let isX = false;
let winX = Number(localStorage.getItem('winX')) || 0;
let winO = Number(localStorage.getItem('winO')) || 0;
let type = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let status = [0,0,0,0,0,0,0,0,0];
/* Funcion */
function start(e) {
    if (e.target.textContent === 'START') {
        startBoard.classList.add('hide');
        document.body.style.backgroundColor = "#FF6D70"
        gameBoard.classList.remove('hide');
    }
    /* init */
    ox.forEach(o => o.textContent = '');
    isX = false;
    gaming = true;
    status = [0,0,0,0,0,0,0,0,0];
    showTurn();
    updateScore();
    /* Switch Board */
    game.classList.remove('hide');
    Xwin.classList.add('hide');
    Owin.classList.add('hide');
    draw.classList.add('hide');
}
function handleBoardClick(e) {
    /* Check is Have O X */
    check = e.target.textContent ? true : false
    if (check) return;
    /* But O or X */
    e.target.textContent = isX ? '🞨' : '○';
    changeOXColor(e);
    /* Update Board Status */
    status[e.target.dataset.index] = isX ? -1 : 1;
    /* Check Win & Show Turn */
    let anser = checkWin();
    if (anser) showWinner(anser);
    isX ? isX = false : isX = true;
    showTurn();
}
function showTurn() {
    if (!isX) {
        Xturn.style.visibility = 'hidden';
        Oturn.style.visibility = 'visible';
    } else {
        Oturn.style.visibility = 'hidden';
        Xturn.style.visibility = 'visible';
    }
}
function changeOXColor(e) {
    if (e.target.textContent === '○') {
        e.target.style.color = 'black';
        e.target.style.fontSize = '80px';
    } else {
        e.target.style.color = 'white';
        e.target.style.fontSize = '90px';
    }
}
function checkWin() {
    for (let i = 0; i < 8; i+=1) {
        const [a, b, c] = type[i];
        const sum = status[a] + status[b] + status[c];
        if (sum === 3) {
          winO += 1;
          updateScore()
          gaming = false;
          return 1;
        }
        if (sum === -3) {
          winX += 1;
          updateScore()
          gaming = false;
          return -1;
        }
    }
    if (status.indexOf(0) === -1) {
        gaming = false;
        return 3;
    }
}
function updateScore() {
    localStorage.setItem("winO", winO);
    scoreO.textContent = winO;
    localStorage.setItem("winX", winX);
    scoreX.textContent = winX;
}
function showWinner(num) {
    if (num === 1) {
        game.classList.add('hide');
        Owin.classList.remove('hide');
        console.log('O Win');
    }
    if (num === -1) {
        game.classList.add('hide');
        Xwin.classList.remove('hide');
        console.log('X Win');
    }
    if (num === 3) {
        game.classList.add('hide');
        draw.classList.remove('hide');
        console.log('Draw');
    }
}
startBtn.forEach(button => button.addEventListener('click', start));
game.addEventListener('click', (e) => gaming && handleBoardClick(e));