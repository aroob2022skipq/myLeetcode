var decodeMessage = function (key, message) {
  let obj = { " ": " " };
  let char = 97;
  const keyString = key.replace(/\s/g, "").split("");

  // console.log(keyString);

  for (let i = 0; i < keyString.length; i++) {
    if (!obj[keyString[i]]) {
      obj[keyString[i]] = String.fromCharCode(char);
      char++;
    }
  }
  let decodedMessage = [];

  // const keys = Object.keys(obj);
  for (let i = 0; i < message.length; i++) {
    decodedMessage.push(obj[message[i]]);
  }

  return decodedMessage.join("");
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
