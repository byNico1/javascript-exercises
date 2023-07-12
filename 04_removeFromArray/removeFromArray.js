const removeFromArray = function (arr, ...numb) {
  const newArray = [];

  arr.forEach((item) => {
    if (!numb.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
