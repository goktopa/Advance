function calorieObject(input) {
  let result = {};

  for (let i = 0; i < input.length; i += 2) {
    let food = input[i];
    let calories = Number(input[i + 1]);
    result[food] = calories;
  }

  console.log(result);
}

// Examples:
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// { Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
