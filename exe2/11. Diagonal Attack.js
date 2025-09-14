function diagonalAttack(input) {
  // Parse input into a matrix of numbers
  let matrix = input.map((row) => row.split(" ").map(Number));
  let size = matrix.length;

  let mainDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < size; i++) {
    mainDiagonalSum += matrix[i][i];
    secondaryDiagonalSum += matrix[i][size - 1 - i];
  }

  if (mainDiagonalSum === secondaryDiagonalSum) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i !== j && j !== size - 1 - i) {
          matrix[i][j] = mainDiagonalSum;
        }
      }
    }
  }

  // Print matrix
  matrix.forEach((row) => console.log(row.join(" ")));
}

// Examples:
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
// Output:
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
// Output:
// 1 1 1
// 1 1 1
// 1 1 0
