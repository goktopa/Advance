function ticTacToe(moves) {
  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let currentPlayer = "X";
  let moveIndex = 0;

  function checkWin(player) {
    // Check rows
    for (let row of board) {
      if (row.every((cell) => cell === player)) return true;
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === player &&
        board[1][col] === player &&
        board[2][col] === player
      )
        return true;
    }

    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    )
      return true;
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    )
      return true;

    return false;
  }

  function boardFull() {
    return board.every((row) => row.every((cell) => cell !== false));
  }

  while (moveIndex < moves.length) {
    let [row, col] = moves[moveIndex].split(" ").map(Number);

    if (board[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      moveIndex++;
      continue;
    }

    board[row][col] = currentPlayer;

    if (checkWin(currentPlayer)) {
      console.log(`Player ${currentPlayer} wins!`);
      printBoard(board);
      return;
    }

    if (boardFull()) {
      console.log("The game ended! Nobody wins :(");
      printBoard(board);
      return;
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    moveIndex++;
  }

  function printBoard(board) {
    for (let row of board) {
      console.log(row.join("\t"));
    }
  }
}

// Example runs:
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
