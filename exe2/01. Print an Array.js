function printArrayWithDelimiter(arr, delimiter) {
  console.log(arr.join(delimiter));
}

printArrayWithDelimiter(["One", "Two", "Three", "Four", "Five"], "-");

printArrayWithDelimiter(
  ["How about no?", "I", "will", "not", "do", "it!"],
  "_"
);
