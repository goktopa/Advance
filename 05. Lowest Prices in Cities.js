function lowestPrices(input) {
  let products = {};

  for (let line of input) {
    let [town, product, priceStr] = line.split(" | ");
    let price = Number(priceStr);

    if (!products[product]) {
      products[product] = { price, town };
    } else {
      if (price < products[product].price) {
        products[product] = { price, town };
      }
    }
  }

  for (let product in products) {
    console.log(
      `${product} -> ${products[product].price} (${products[product].town})`
    );
  }
}

// Example test
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

// Output:
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
