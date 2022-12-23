// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.
var mostWordsFound = function (sentences) {
  let arr = [];
  for (let i = 0; i < sentences.length; i++) {
    arr.push(sentences[i].split(" ").length);
  }
  return Math.max(...arr);
};
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
