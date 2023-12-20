let currentPlayer = 'X';
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const turnMessage = document.getElementById('turnMessage');

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleResultValidation = () => {
  let roundWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    turnMessage.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  let roundDraw = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      roundDraw = false;
      break;
    }
  }

  if (roundDraw) {
    turnMessage.textContent = 'It\'s a draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  turnMessage.textContent = `Player ${currentPlayer}'s turn`;
};

const handleClick = cellNum => {
  if (gameActive && !cells[cellNum].textContent) {
    cells[cellNum].textContent = currentPlayer;
    handleResultValidation();
  }
};

const resetGame = () => {
  currentPlayer = 'X';
  gameActive = true;
  turnMessage.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = '');
};

turnMessage.textContent = `Player ${currentPlayer}'s turn`;
