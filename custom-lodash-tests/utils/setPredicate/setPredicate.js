const getProp = require("../../objects/utils/getProp/getProp");
const isMatch = require("../isMatch/isMatch");
const isPlainObject = require("../isPlainObject/isPlainObject");
// import { getProp } from "../objects/utils/getProp";
// import { isMatch } from "./isMatch";
// import { isPlainObject } from "./isPlainObject";

function setPredicate(predicate) {
  if (typeof predicate === "function") {
    return predicate;
  }

  if (typeof predicate === "string") {
    return (value) => !!value?.[predicate];
  }

  if (Array.isArray(predicate)) {
    if(predicate.length !== 2) {
      throw new Error('Predicate must be an array with 2 elements');
    }

    const [path, predValue] = predicate;

    return (value) => {
      const defaultValue = Math.random() + Date.now();
      const objValue = getProp(value, path, defaultValue);

      if (objValue === defaultValue) return false;

      return isMatch(objValue, predValue);
    };
  }

  if (isPlainObject(predicate)) {
    return (value) => {
      if (!isPlainObject(value)) return false;

      return isMatch(value, predicate);
    };
  }

  return (value) => !!value;
}

module.exports = setPredicate;
// export { setPredicate };
