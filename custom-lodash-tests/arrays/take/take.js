const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");

function take(array, n = 1) {
  arrayCheck(array);

  const takeArr = [];

  for (let i = 0; i < n && i < array.length; i++) {
    push(takeArr, array[i]);
  }

  return takeArr;
}

module.exports = take;
