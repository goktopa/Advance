function send() {
  // Get the input and output elements
  let input = document.getElementById("input").value;
  let bestRestaurantOutput = document.getElementById("bestRestaurant");
  let workersOutput = document.getElementById("workers");

  // Parse input as JSON array
  let restaurantsArr = JSON.parse(input);

  // Object to hold all restaurants and their workers
  let restaurants = {};

  for (let line of restaurantsArr) {
    // Split restaurant name and workers part
    let [restaurantName, workersStr] = line.split(" - ");

    // Split workers by comma and map to {name, salary}
    let workers = workersStr.split(", ").map((w) => {
      let [name, salary] = w.split(" ");
      return { name: name, salary: Number(salary) };
    });

    // If restaurant already exists, append workers
    if (!restaurants[restaurantName]) {
      restaurants[restaurantName] = [];
    }
    restaurants[restaurantName] = restaurants[restaurantName].concat(workers);
  }

  // Determine the best restaurant
  let bestRestaurant = "";
  let bestAvgSalary = 0;
  let bestSalary = 0;

  for (let restaurant in restaurants) {
    let workers = restaurants[restaurant];
    let totalSalary = workers.reduce((sum, w) => sum + w.salary, 0);
    let avgSalary = totalSalary / workers.length;
    let maxSalary = Math.max(...workers.map((w) => w.salary));

    if (avgSalary > bestAvgSalary) {
      bestAvgSalary = avgSalary;
      bestSalary = maxSalary;
      bestRestaurant = restaurant;
    }
  }

  // Sort the best restaurant workers by salary descending
  let bestWorkers = restaurants[bestRestaurant].sort(
    (a, b) => b.salary - a.salary
  );

  // Format output for best restaurant
  bestRestaurantOutput.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAvgSalary.toFixed(
    2
  )} Best Salary: ${bestSalary.toFixed(2)}`;

  // Format output for workers
  let workersText = bestWorkers
    .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
    .join(" ");
  workersOutput.textContent = workersText;
}
