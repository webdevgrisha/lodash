const isObject = require('../../utils/isObject/isObject');
const deepCopy = require('../utils/deepCopy/deepCopy');
const objectCheck = require('../utils/objectCheck/objectCheck');

function merge(object, ...sources) {
  objectCheck(object);

  for (let source of sources) {
    if (!isObject(source)) continue;

    for (let key of Object.keys(source)) {
      const sourceValue = source[key];
      const objectValue = object[key];

      if (sourceValue === undefined) continue;

      if (Array.isArray(sourceValue) && Array.isArray(objectValue)) {
        object[key] = [...deepCopy(objectValue), ...deepCopy(sourceValue)];
        continue;
      }

      if (isObject(sourceValue) && isObject(objectValue)) {
        merge(objectValue, deepCopy(sourceValue));
        continue;
      }

      object[key] = sourceValue;
    }
  }

  return object;
}

module.exports = merge;
