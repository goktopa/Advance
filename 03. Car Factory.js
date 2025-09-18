function assembleCar(order) {
  // Available engines
  const engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  // Pick the smallest engine that satisfies the power requirement
  let engine = engines.find((e) => e.power >= order.power);

  // Carriage
  let carriage = {
    type: order.carriage,
    color: order.color,
  };

  // Wheels → must be odd
  let wheelSize =
    order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
  let wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

  // Final car object
  return {
    model: order.model,
    engine,
    carriage,
    wheels,
  };
}

// Examples:
console.log(
  assembleCar({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
// { model: 'VW Golf II',
//   engine: { power: 90, volume: 1800 },
//   carriage: { type: 'hatchback', color: 'blue' },
//   wheels: [13, 13, 13, 13] }

console.log(
  assembleCar({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
// { model: 'Opel Vectra',
//   engine: { power: 120, volume: 2400 },
//   carriage: { type: 'coupe', color: 'grey' },
//   wheels: [17, 17, 17, 17] }
