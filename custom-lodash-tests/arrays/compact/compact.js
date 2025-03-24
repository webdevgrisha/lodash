const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");
// import { arrayCheck } from "../utils/arrayCheck";
// import { push } from "../utils/push";

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
// export { compact };
