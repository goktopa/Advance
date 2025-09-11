function fruit(fruitType, weightInGrams, pricePerKg) {
  // Преобразуваме грамажи в килограми
  let weightInKg = weightInGrams / 1000;

  // Изчисляваме крайната цена
  let money = weightInKg * pricePerKg;

  // Форматираме до 2 знака след десетичната точка
  console.log(
    `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}

// Примери:
fruit("orange", 2500, 1.8);
// I need $4.50 to buy 2.50 kilograms orange.

fruit("apple", 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.
