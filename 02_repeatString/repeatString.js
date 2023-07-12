const repeatString = function (string, num) {
  if (typeof num !== "number" || num < 0) return "ERROR";
  return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
