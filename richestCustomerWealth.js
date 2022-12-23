// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function (accounts) {
  let result = [];
  for (let i = 0; i < accounts.length; i++) {
    // let sum = 0;
    // for (let j = 0; j < accounts[i].length; j++) {
    //   sum = sum + accounts[i][j];
    // }
    let sum = accounts[i].reduce((x, y) => x + y, 0);
    result.push(sum);
  }
  return Math.max(...result);
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

// let arr = [1, 1, 1, 1];
// const sum = arr.reduce((x, y) => x + y, 0);
// console.log(sum);
