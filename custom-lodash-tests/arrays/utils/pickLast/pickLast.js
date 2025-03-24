const arrayCheck = require("../arrayCheck/arrayCheck");

function pickLast(arr) {
  arrayCheck(arr);

  return arr[arr.length - 1];
}

module.exports = pickLast;

