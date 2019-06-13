const startBtn = document.querySelectorAll('.start');
const gameBoard = document.querySelector('#board');
const pawn = document.querySelectorAll('.pawn')
const scoreBoard = document.querySelector('.scoreBoard');
const svgX = `
<div class="svgX" style="clolr:white">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
    </svg>
</div>
`;
const svgO = `
<div class="svgO">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
    </svg>
</div>
`;
let isX = false;
function start() {

}
function handleBoardClick() {
    isX ? isX = false : isX = true;
    pawn[this.value].textContent = isX ? svgX : svgO;
}

















startBtn.forEach(button => button.addEventListener('click', start));
gameBoard.addEventListener('click', handleBoardClick)