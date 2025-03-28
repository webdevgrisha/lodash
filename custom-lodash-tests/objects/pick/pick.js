const flat = require("../../arrays/utils/flat/flat");
const getProp = require("../utils/getProp/getProp");
const objectCheck = require("../utils/objectCheck/objectCheck");
const setProp = require("../utils/setProp/setProp");

function pick(object, ...paths) {
  objectCheck(object);

  const newObj = {};
  paths = flat(paths);

  for (let path of paths) {
    const defaultValue = Symbol();

    const objValue = getProp(object, path, defaultValue);

    if (defaultValue !== objValue) {
      setProp(newObj, ...path, objValue);
    }
  }

  return newObj;
}

module.exports = pick;
