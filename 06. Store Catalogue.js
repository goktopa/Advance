function storeCatalogue(input) {
  let products = [];

  for (let line of input) {
    let [name, price] = line.split(" : ");
    products.push({ name, price: Number(price) });
  }

  // Sort alphabetically by name
  products.sort((a, b) => a.name.localeCompare(b.name));

  let currentLetter = "";

  for (let product of products) {
    let firstLetter = product.name[0];

    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      console.log(currentLetter);
    }

    console.log(`  ${product.name}: ${product.price}`);
  }
}

// Example 1
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

// Output:
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499

// Example 2
storeCatalogue([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);

// Output:
// B
//   Banana: 2
//   Barrel: 10
// P
//   Pesho: 0.000001
// R
//   Rali Car: 2000000
//   Raspberry P: 4999
//   Rolex: 100000
//   Rollon: 10
//   Rubic's Cube: 5
