function cookingByNumbers(start, op1, op2, op3, op4, op5) {
  let number = Number(start);
  let operations = [op1, op2, op3, op4, op5];

  for (let op of operations) {
    switch (op) {
      case "chop":
        number /= 2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number += 1;
        break;
      case "bake":
        number *= 3;
        break;
      case "fillet":
        number *= 0.8;
        break;
    }
    console.log(number);
  }
}

// Примери:
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
// 16
// 8
// 4
// 2
// 1

cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
// 3
// 4
// 2
// 6
// 4.8
