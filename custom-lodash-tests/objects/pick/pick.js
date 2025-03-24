const getProp = require('../utils/getProp/getProp');
const objectCheck = require('../utils/objectCheck/objectCheck');
const setProp = require('../utils/setProp/setProp');

function pick(object, ...paths) {
  objectCheck(object);

  const newObj = {};

  for (let path of paths) {
    const defaultValue = Math.random() + Date.now();
    const objValue = getProp(object, path, defaultValue);

    if (defaultValue !== objValue) {
      setProp(newObj, path, objValue);
    }
  }

  return newObj;
}

module.exports = pick;
