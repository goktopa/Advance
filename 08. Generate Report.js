function generateReport() {
  // Get table and output textarea
  const table = document.querySelector("table");
  const output = document.getElementById("output");

  // Get all headers and their checkboxes
  const headers = Array.from(table.querySelectorAll("thead th"));

  // Determine which columns are selected
  const selectedColumns = headers
    .map((th, index) => {
      const checkbox = th.querySelector("input[type='checkbox']");
      if (checkbox && checkbox.checked) {
        return { index, name: th.getAttribute("name") };
      }
      return null;
    })
    .filter((h) => h !== null);

  // Collect row data
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  const result = rows.map((row) => {
    const cells = Array.from(row.querySelectorAll("td"));
    const obj = {};
    selectedColumns.forEach((col) => {
      obj[col.name] = cells[col.index].textContent;
    });
    return obj;
  });

  // Output as JSON string
  output.value = JSON.stringify(result);
}
