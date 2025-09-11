function timeToUniversity(steps, footprintLength, speed) {
  let distanceMeters = steps * footprintLength;
  let distanceKm = distanceMeters / 1000;

  let timeHours = distanceKm / speed;
  let timeSeconds = timeHours * 3600;

  let rests = Math.floor(distanceMeters / 500);
  timeSeconds += rests * 60;

  let hours = Math.floor(timeSeconds / 3600);
  let minutes = Math.floor((timeSeconds % 3600) / 60);
  let seconds = Math.round(timeSeconds % 60);

  // Корекция, ако секундите станат 60
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  console.log(
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  );
}

// Тестове:
timeToUniversity(4000, 0.6, 5);
timeToUniversity(2564, 0.7, 5.5);
