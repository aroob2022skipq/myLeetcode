//
var decode = function (encoded, first) {
  let arr = [first];
  for (let i = 0; i < encoded.length; i++) {
    arr[i + 1] = arr[i] ^ encoded[i];
  }
  return arr;
};
