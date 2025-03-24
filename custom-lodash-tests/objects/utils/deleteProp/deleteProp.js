const objectCheck = require("../objectCheck/objectCheck");
const isObject = require("../../../utils/isObject/isObject");
const transformPath = require("../../../utils/transformPath/transformPath");
const pickLast = require("../../../arrays/utils/pickLast/pickLast");
// import { objectCheck } from "../objectCheck";
// import { isObject } from "../../utils/isObject";
// import { transformPath } from "../../utils/transformPath";
// import { pickLast } from "../../arrays/utils/pickLast";

function deleteProp(object, path) {
  objectCheck(object);

  if (path.length === 0) return false;

  path = transformPath(path);

  let result = object;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];

    if (!isObject(result[key])) {
      return false;
    }

    if (key in result) {
      result = result[key];
    } else {
      return false;
    }
  }

  const lastKey = pickLast(path);
  const valueExists = lastKey in result;
  delete result[lastKey];

  return valueExists;
}

module.exports = deleteProp;
// export { deleteProp };
