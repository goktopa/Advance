function addAndRemove(commands) {
  let result = [];
  let number = 1;

  for (let command of commands) {
    if (command === "add") {
      result.push(number);
    } else if (command === "remove") {
      result.pop();
    }
    number++;
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join("\n"));
  }
}

// Examples:
addAndRemove(["add", "add", "add", "add"]);
// Output:
// 1
// 2
// 3
// 4

addAndRemove(["add", "add", "remove", "add", "add"]);
// Output:
// 1
// 4
// 5

addAndRemove(["remove", "remove", "remove"]);
// Output:
// Empty
