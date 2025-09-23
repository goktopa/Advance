function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("namingConvention").value;
  let result = "";

  let words = text.toLowerCase().split(" ");

  if (convention === "Camel Case") {
    result = words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  } else if (convention === "Pascal Case") {
    for (let word of words) {
      result += word[0].toUpperCase() + word.slice(1);
    }
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}
