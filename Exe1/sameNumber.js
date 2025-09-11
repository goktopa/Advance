function sameNumber(num) {
  let numAsString = num.toString();
  let isSame = true;

  let firstNum = numAsString[0];
  let sum = Number(firstNum);
  for (let i = 1; i < numAsString.length; i++) {
    sum += Number(numAsString[i]);
    if (firstNum !== numAsString[i]) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}
sameNumber(2222222);
