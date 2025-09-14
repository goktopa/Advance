function isMagicMatrix(matrix) {
  let targetSum = matrix[0].reduce((a, b) => a + b, 0); // sum of first row

  // check rows
  for (let row of matrix) {
    let rowSum = row.reduce((a, b) => a + b, 0);
    if (rowSum !== targetSum) {
      return false;
    }
  }

  // check columns
  for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }
    if (colSum !== targetSum) {
      return false;
    }
  }

  return true;
}

// Examples:
console.log(
  isMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
// Output: true

console.log(
  isMagicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
// Output: false

console.log(
  isMagicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
// Output: true
