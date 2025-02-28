const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  )
    return "ERROR";
  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }
  let ans = 0;
  for (let i = start; i <= end; i++) {
    ans += i;
  }
  return ans;
};

// Do not edit below this line
module.exports = sumAll;
