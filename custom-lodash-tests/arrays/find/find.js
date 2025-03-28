const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const setPredicate = require("../../utils/setPredicate/setPredicate");

function find(collection, predicate, fromIndex = 0) {
  arrayCheck(collection);

  predicate = setPredicate(predicate);

  if (typeof fromIndex !== "number" || Number.isNaN(fromIndex)) {
    fromIndex = 0;
  }

  if (fromIndex < 0) {
    fromIndex = collection.length + fromIndex;
    fromIndex = fromIndex < 0 ? 0 : fromIndex;
  }

  for (let i = Math.floor(fromIndex); i < collection.length; i++) {
    const result = predicate(collection[i], i, collection);

    if (result) return collection[i];
  }

  return undefined;
}

module.exports = find;
