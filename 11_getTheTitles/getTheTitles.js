const getTheTitles = function (arr) {
  const array = [];
  arr.forEach((val) => {
    console.log(val);
    array.push(val.title);
  });
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

getTheTitles(books);
