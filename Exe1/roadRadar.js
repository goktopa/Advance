function checkSpeed(speed, area) {
  let limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let limit = limits[area];
  let difference = speed - limit;

  if (difference <= 0) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else {
    let status = "";
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }
}

// Примери:
checkSpeed(40, "city");
// Driving 40 km/h in a 50 zone

checkSpeed(21, "residential");
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

checkSpeed(120, "interstate");
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

checkSpeed(200, "motorway");
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
