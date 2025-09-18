function townsToJSON(input) {
  let result = [];

  for (let i = 1; i < input.length; i++) {
    let line = input[i]
      .split("|")
      .map((x) => x.trim())
      .filter((x) => x !== "");

    let town = line[0];
    let latitude = Number(Number(line[1]).toFixed(2));
    let longitude = Number(Number(line[2]).toFixed(2));

    result.push({ Town: town, Latitude: latitude, Longitude: longitude });
  }

  return JSON.stringify(result);
}

// Example test
console.log(
  townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);

// Output:
// [{"Town":"Sofia","Latitude":42.70,"Longitude":23.33},
//  {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
