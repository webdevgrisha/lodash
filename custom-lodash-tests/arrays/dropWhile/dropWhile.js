const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const setPredicate = require("../../utils/setPredicate/setPredicate");
const drop = require("../drop/drop");

function dropWhile(array, predicate) {
  arrayCheck(array);

  predicate = setPredicate(predicate);

  let dropIndex = array.length;

  for (let i = 0; i < array.length; i++) {
    const result = predicate(array[i], i, array);

    if (!result) {
      dropIndex = i;
      break;
    }
  }

  const arr = drop(array, dropIndex);

  return arr;
}

module.exports = dropWhile;
