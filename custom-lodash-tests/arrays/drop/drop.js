const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");
// import { arrayCheck } from "../utils/arrayCheck";
// import { push } from "../utils/push";

function drop(array, n = 1) {
  arrayCheck(array);

  if (n < 0 || typeof n !== "number" || Number.isNaN(n)) {
    n = 0;
  }

  const dropArr = [];

  for (let i = Math.floor(n); i < array.length; i++) {
    push(dropArr, array[i]);
  }

  return dropArr;
}

module.exports = drop;
// export { drop };
