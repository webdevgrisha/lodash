const isPrimetive = require("../isPrimetive/isPrimetive");
const isObject = require("../isObject/isObject");
const isPlainObject = require("../isPlainObject/isPlainObject");

function isMatch(object, source) {
  if (Number.isNaN(object) && Number.isNaN(source)) return true;

  if (isPrimetive(object) || isPrimetive(source)) {
    return object === source;
  }

  if (object === source) return true;

  if(!Object.keys(source).length && isPlainObject(source)) return true;

  if (Array.isArray(object) !== Array.isArray(source)) return false;

  //   array compare
  if (Array.isArray(object) && Array.isArray(source)) {
    if (object.length !== source.length) return false;

    for (let i = 0; i < object.length; i++) {
      if (!isMatch(object[i], source[i])) return false;
    }

    return true;
  }

  // date obj compare
  if (object instanceof Date && source instanceof Date) {
    return object.getTime() === source.getTime();
  }

  //   primetive compare
  for (let key in source) {
    if (!(key in object)) return false;

    const objValue = object[key];
    const srcValue = source[key];

    if (Number.isNaN(objValue) && Number.isNaN(srcValue)) continue;

    if (isObject(objValue) && isObject(srcValue)) {
      if (!isMatch(objValue, srcValue)) return false;
    } else if (objValue !== srcValue) {
      return false;
    }
  }

  return true;
}

module.exports = isMatch;
