var uniqueMorseRepresentations = function (words) {
  let morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  let unique = new Set();
  for (let i = 0; i < words.length; i++) {
    let str = "";
    let wordSplit = words[i];
    for (let j = 0; j < wordSplit.length; j++) {
      str += morse[wordSplit[j]];
    }
    unique.add(str);
  }
  return unique.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen"]));
