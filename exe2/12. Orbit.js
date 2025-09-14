function createStarOrbits(input) {
  // Destructure the input array to get the dimensions and star coordinates
  let [width, height, starRow, starCol] = input;

  // Create an empty matrix to store the results
  let matrix = [];

  // Iterate through each row of the matrix
  for (let row = 0; row < height; row++) {
    // Create an empty array for the current row
    let currentRow = [];

    // Iterate through each column in the current row
    for (let col = 0; col < width; col++) {
      // Calculate the Chebyshev distance from the current cell to the star
      const distance = Math.max(
        Math.abs(row - starRow),
        Math.abs(col - starCol)
      );

      // The cell's value is the distance + 1
      // Push the calculated value to the current row array
      currentRow.push(distance + 1);
    }
    // Add the completed row (as a string with spaces) to the matrix
    matrix.push(currentRow.join(" "));
  }

  // Join all rows with a newline character and print the final result
  console.log(matrix.join("\n"));
}

// --- Examples ---

// Example 1:
console.log("Input: [4, 4, 0, 0]");
console.log("Output:");
createStarOrbits([4, 4, 0, 0]);
// Expected Output:
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

console.log("\n" + "-".repeat(20) + "\n");

// Example 2:
console.log("Input: [5, 5, 2, 2]");
console.log("Output:");
createStarOrbits([5, 5, 2, 2]);
// Expected Output:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

console.log("\n" + "-".repeat(20) + "\n");

// Example 3:
console.log("Input: [3, 3, 2, 2]");
console.log("Output:");
createStarOrbits([3, 3, 2, 2]);
// Expected Output:
// 3 3 3
// 3 2 2
// 3 2 1
