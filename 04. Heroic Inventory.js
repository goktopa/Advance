function heroRegister(input) {
  let heroes = [];

  for (let line of input) {
    if (line.trim() === "") continue; // skip empty lines

    let [name, level, items] = line.split(" / ");
    level = Number(level);
    items = items ? items.split(", ").map((item) => item.trim()) : [];

    heroes.push({ name, level, items });
  }

  return JSON.stringify(heroes);
}

// Examples:
console.log(
  heroRegister([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
//  {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
//  {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

console.log(heroRegister(["Jake / 1000 / Gauss, HolidayGrenade"]));
// [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]
