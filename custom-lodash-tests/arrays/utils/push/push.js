const arrayCheck = require("../arrayCheck/arrayCheck");

function push(arr, ...items) {
  arrayCheck(arr);
  
  for(let value of items) {
    arr[arr.length] = value;
  }

  return arr;
}

module.exports = push;

// расширить тесты