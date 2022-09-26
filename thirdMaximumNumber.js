var thirdMax = function (nums) {
  let sortedNums = new Set(nums.sort((a, b) => b - a));
  let unique = [...sortedNums];
  let maximum =
    unique.length >= 3
      ? unique[2]
      : unique.reduce((a, b) => {
          return Math.max(a, b);
        });
  return maximum;
};

// var thirdMax = function (nums) {
//   let uniqueNums = new Set(nums);
//   let maximum;

//   if (uniqueNums.size < 3) {
//     return Math.max(...uniqueNums);
//   }
//   for (let i = 0; i < 3; i++) {
//     maximum = Math.max(...uniqueNums);
//     uniqueNums.delete(maximum);
//   }

//   return maximum;
};
console.log(thirdMax([2, 1]));
