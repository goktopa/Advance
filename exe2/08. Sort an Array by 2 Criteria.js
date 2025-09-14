function sortByTwoCriteria(arr) {
  arr.sort((a, b) => {
    // primary: by length
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    // secondary: alphabetical (case-insensitive)
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  console.log(arr.join("\n"));
}

// Examples:
sortByTwoCriteria(["alpha", "beta", "gamma"]);
// Output:
// beta
// alpha
// gamma

sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
// Output:
// Jack
// Isacc
// George
// Theodor
// Harrison

sortByTwoCriteria(["test", "Deny", "omen", "Default"]);
// Output:
// Deny
// omen
// test
// Default
