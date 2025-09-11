function validityChecker(x1, y1, x2, y2) {
  function checkDistance(a1, b1, a2, b2) {
    let distance = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
    if (Number.isInteger(distance)) {
      console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is valid`);
    } else {
      console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is invalid`);
    }
  }

  // 1. {x1, y1} → {0, 0}
  checkDistance(x1, y1, 0, 0);

  // 2. {x2, y2} → {0, 0}
  checkDistance(x2, y2, 0, 0);

  // 3. {x1, y1} → {x2, y2}
  checkDistance(x1, y1, x2, y2);
}

// Примери:
validityChecker(3, 0, 0, 4);
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

validityChecker(2, 1, 1, 1);
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid
