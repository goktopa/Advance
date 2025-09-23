function searchTable() {
  // Get input value and table elements
  const input = document.getElementById("searchInput");
  const searchText = input.value.toLowerCase().trim();
  const table = document.getElementById("studentTable");
  const rows = table.getElementsByTagName("tr");

  // Remove existing 'select' classes from all rows
  for (let i = 1; i < rows.length; i++) {
    rows[i].classList.remove("select");
  }

  // If input is empty, return early
  if (searchText === "") {
    input.value = "";
    return;
  }

  // Search through all rows except header (start from index 1)
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let rowContainsText = false;

    // Check each cell in the row
    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].textContent.toLowerCase();
      if (cellText.includes(searchText)) {
        rowContainsText = true;
        break;
      }
    }

    // Add 'select' class if match found
    if (rowContainsText) {
      rows[i].classList.add("select");
    }
  }

  // Clear input field
  input.value = "";
}
