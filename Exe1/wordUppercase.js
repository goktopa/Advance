function extractUpperCase(text) {
  // Намираме всички думи с regex
  let words = text.match(/\w+/g);

  // Ако няма думи (null), връщаме празен масив
  if (!words) {
    console.log("");
    return;
  }

  // Превръщаме думите в главни букви
  let upperWords = words.map((w) => w.toUpperCase());

  // Печатаме на един ред, разделени със ", "
  console.log(upperWords.join(", "));
}

// Примери:
extractUpperCase("Hi, how are you?");
// HI, HOW, ARE, YOU

extractUpperCase("hello");
// HELLO
