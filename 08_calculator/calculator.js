const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const initialValue = 0;
  return arr.reduce((acc, current) => acc + current, initialValue);
};

const multiply = function (a, ...b) {
  let base = b.reduce((acc, current) => acc * current);
  return a * base;
};

const power = function (num, pow) {
  return Math.pow(num, pow);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
