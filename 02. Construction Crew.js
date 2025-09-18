function hydrateWorker(worker) {
  if (worker.dizziness) {
    let requiredWater = 0.1 * worker.weight * worker.experience;
    worker.levelOfHydrated += requiredWater;
    worker.dizziness = false;
  }
  return worker;
}

// Examples:
console.log(
  hydrateWorker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
  })
);
// { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

console.log(
  hydrateWorker({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
// { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

console.log(
  hydrateWorker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
  })
);
// { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
