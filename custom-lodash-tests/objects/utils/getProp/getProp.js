const isPlainObject = require("../../../utils/isPlainObject//isPlainObject.js");
const transformPath = require("../../../utils/transformPath/transformPath.js");
const isObject = require("../../../utils/isObject/isObject.js");
// import { isObject } from "../../utils/isObject/isObject.js";
// import { transformPath } from "../../utils/transformPath/transformPath.js";

function getProp(object, path, defaultValue = undefined) {
  if (!(Array.isArray(object) || isPlainObject(object))) {
    return false;
  }

  path = transformPath(path);

  if (!path.length) {
    return defaultValue;
  }

  let result = object;

  for (let key of path) {
    if (!isObject(result)) {
      return defaultValue;
    }

    if (key in result) {
      result = result[key];
      continue;
    }

    return defaultValue;
  }

  return result;
}

module.exports = getProp;
// export { getProp };
