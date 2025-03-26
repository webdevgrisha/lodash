const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const find = require("../find/find");
const filter = require("../filter/filter");

const NaNCheck = (value, currValue) =>
  Number.isNaN(currValue) === Number.isNaN(value);
const otherCheck = (value, currValue) => currValue === value;

function includes(collection, value, fromIndex = 0) {
  arrayCheck(collection);

  if (!collection.length) return false;

  if (value === undefined) {
    const undefindArr = filter(collection, (value) => value === undefined);

    return !!undefindArr.length;
  }

  const compare = Number.isNaN(value) ? NaNCheck : otherCheck;

  const result = find(
    collection,
    (currValue) => compare(value, currValue),
    fromIndex
  );

  return result !== undefined ? true : false;
}

module.exports = includes;
