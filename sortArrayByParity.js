var sortArrayByParity = function (nums) {
  let arr = [];
  let oddArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
      oddArr.push(nums[i]);
    } else {
      arr.push(nums[i]);
    }
  }

  return [...arr, ...oddArr];
};

console.log(sortArrayByParity([2, 3, 4, 4]));
