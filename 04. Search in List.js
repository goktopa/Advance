function search() {
  let towns = document.querySelectorAll("li");
  let searchText = document.getElementById("searchText").value;
  let result = document.getElementById("result");

  let matches = 0;

  // Clear previous highlights
  for (let town of towns) {
    town.style.fontWeight = "normal";
    town.style.textDecoration = "none";
  }

  // Highlight matches
  for (let town of towns) {
    if (town.textContent.includes(searchText) && searchText !== "") {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }

  // Show match count
  result.textContent = `${matches} matches found`;
}
