const objectCheck = require("../objectCheck/objectCheck");
const transformPath = require("../../../utils/transformPath/transformPath");
const pickLast = require("../../../arrays/utils/pickLast/pickLast");
// import { objectCheck } from "./objectCheck";
// import { transformPath } from "../../utils/transformPath";
// import { pickLast } from "../../arrays/utils/pickLast";

function setProp(object, path, value) {
  objectCheck(object);

  if (path.length === 0) return object;

  path = transformPath(path);

  let currObj = object;

  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];

    if (!(key in currObj)) {
      currObj[key] = {};
    }

    currObj = currObj[key];
  }

  const lastKey = pickLast(path);
  currObj[lastKey] = value;

  return object;
}

module.exports = setProp;
// export { setProp };
