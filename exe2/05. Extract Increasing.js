function extractIncreasingSubset(arr) {
  let result = [];
  let biggest = Number.NEGATIVE_INFINITY;

  for (let num of arr) {
    if (num >= biggest) {
      result.push(num);
      biggest = num;
    }
  }

  return result;
}

// Examples:
console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// Output: [1, 3, 8, 10, 12, 24]

console.log(extractIncreasingSubset([1, 2, 3, 4]));
// Output: [1, 2, 3, 4]

console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));
// Output: [20]
