function spiralMatrix(rows, cols) {
  let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  let num = 1; // Start number
  let top = 0,
    bottom = rows - 1,
    left = 0,
    right = cols - 1;

  while (top <= bottom && left <= right) {
    // Fill top row
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Fill right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Fill bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // Fill left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  // Print the matrix
  matrix.forEach((row) => console.log(row.join(" ")));
}

// Examples:
spiralMatrix(5, 5);
/* Output:
1 2 3 4 5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
*/

spiralMatrix(3, 3);
/* Output:
1 2 3
8 9 4
7 6 5
*/
