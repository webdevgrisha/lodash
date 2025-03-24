const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const find = require("../find/find");
const isMatch = require("../../utils/isMatch/isMatch");
// import { find } from "../find/find";

function includes(collection, value, fromIndex = 0) {
  arrayCheck(collection);

  if (!collection.length) return false;

  // получается нельзя переиспользовать
  const result = find(
    collection,
    (currValue) => {
      if (Number.isNaN(currValue) && Number.isNaN(value)) {
        return Number.isNaN(currValue) === Number.isNaN(value);
      }

      return currValue === value;
    },
    fromIndex
  );

  if (result === undefined && value !== undefined) {
    return false;
  }

  return true;
}

module.exports = includes;
// export { includes };
