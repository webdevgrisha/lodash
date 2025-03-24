const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");
// import { arrayCheck } from "../utils/arrayCheck";
// import { push } from "../utils/push";

function map(collection, iteratee = (value) => value) {
  arrayCheck(collection);

  const newArr = [];

  for (let i = 0; i < collection.length; i++) {
    const result = iteratee(collection[i], i, collection);

    push(newArr, result);
  }

  return newArr;
}

module.exports = map;
// export { map };
