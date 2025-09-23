function subtract() {
  // Get values from the input fields
  let firstValue = document.getElementById("firstNumber").value;
  let secondValue = document.getElementById("secondNumber").value;

  // Convert to numbers
  let num1 = Number(firstValue);
  let num2 = Number(secondValue);

  // Subtract and display the result
  document.getElementById("result").textContent = num1 - num2;
}
