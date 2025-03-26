const chunk = require("../chunk/chunk");
const arrayCheck = require("../utils/arrayCheck/arrayCheck");

function take(array, n = 1) {
  arrayCheck(array);

  const minLen = Math.min(n, array.length);

  const takeArr = chunk(array, minLen);

  return takeArr.length ? takeArr[0] : takeArr;
}

module.exports = take;
