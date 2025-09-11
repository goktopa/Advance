function previousDay(year, month, day) {
  // Създаваме дата (внимание: месеците в JS са от 0 до 11)
  let date = new Date(year, month - 1, day);

  // Намаляваме деня с 1 (предишният ден)
  date.setDate(date.getDate() - 1);

  // Връщаме резултата в желания формат
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

// Примери:
previousDay(2016, 9, 30); // 2016-9-29
previousDay(2015, 5, 10); // 2015-5-9
