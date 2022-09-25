var runningSum = function (nums) {
  let sum = 0;
  let arr = [];
  arr.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    sum = arr[i - 1] + nums[i];
    arr.push(sum);
  }
  return arr;
};

console.log(runningSum([1, 2, 3, 4]));
