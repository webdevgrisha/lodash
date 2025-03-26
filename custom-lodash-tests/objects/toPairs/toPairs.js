const push = require("../../arrays/utils/push/push");
const isObject = require("../../utils/isObject/isObject");

function toPairs(obj) {
  if (!isObject(obj)) {
    throw Error('Value must be type of "object');
  }

  if (obj instanceof Map || obj instanceof Set) {
    return Array.from(obj.entries());
  }

  const objOwnKeys = Object.keys(obj);

  const arrPairs = [];

  for (let key of objOwnKeys) {
    const value = obj[key];

    push(arrPairs, [key, value]);
  }

  return arrPairs;
}

module.exports = toPairs;
