const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");

function compact(array) {
  arrayCheck(array);

  const compactArr = [];

  for (let value of array) {
    if (!value) continue;

    push(compactArr, value);
  }

  return compactArr;
}

module.exports = compact;
