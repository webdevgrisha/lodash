const isPlainObject = require("../../utils/isPlainObject/isPlainObject");
const setPredicate = require("../../utils/setPredicate/setPredicate");
const push = require("../utils/push/push");
// import { isPlainObject } from "../../utils/isPlainObject";
// import { setPredicate } from "../../utils/setPredicate";
// import { push } from "../utils/push";

function filter(collection, predicate) {
  if (!(Array.isArray(collection) || isPlainObject(collection))) {
    throw Error("Collection must be array or object");
  }

  predicate = setPredicate(predicate);

  const newCollection = Array.isArray(collection)
    ? collection
    : Object.entries(collection);

  const isObject = isPlainObject(collection);

  const filterArr = [];

  for (let i = 0; i < newCollection.length; i++) {
    const result = predicate(newCollection[i], i, newCollection);

    if (!result) continue;

    if (isObject) {
      const [key, value] = newCollection[i];

      push(filterArr, { [key]: value });
    } else {
      push(filterArr, newCollection[i]);
    }
  }

  return filterArr;
}

// export { filter };
module.exports = filter;
