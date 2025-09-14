function rotateArray(arr, rotations) {
  let effectiveRotations = rotations % arr.length;

  for (let i = 0; i < effectiveRotations; i++) {
    let last = arr.pop(); // remove last element
    arr.unshift(last); // add it to the front
  }

  console.log(arr.join(" "));
}

// Examples:
rotateArray(["1", "2", "3", "4"], 2);
// Output: 3 4 1 2

rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
// Output: Orange Coconut Apple Banana
