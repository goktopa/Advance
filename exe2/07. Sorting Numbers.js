function sortingNumbers(arr) {
  arr.sort((a, b) => a - b);

  let result = [];

  while (arr.length > 0) {
    result.push(arr.shift());
    if (arr.length > 0) {
      result.push(arr.pop());
    }
  }

  return result;
}

// Examples:
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// Output: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
// Output: [2, 63, 3, 54, 9, 22, 11, 21, 18, 19]
