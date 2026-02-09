function countVowels(text) {
  let count = 0;
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels(""));
console.log(countVowels("hello"));
console.log(countVowels("HelLO"));
console.log(countVowels("javascript"));