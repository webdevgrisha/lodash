const objectCheck = require("../objectCheck/objectCheck");
const setPredicate = require("../../../utils/setPredicate/setPredicate");
const deepCopy = require("../deepCopy/deepCopy");
const setProp = require("../setProp/setProp");

function selectBy(object, predicate, condition) {
  objectCheck(object);
  predicate = setPredicate(predicate);

  const newObj = {};

  for (let key in object) {
    const result = predicate(object[key], key);

    if (condition(result)) {
      const value = deepCopy(object[key]);

      setProp(newObj, key, value);
    }
  }

  return newObj;
}

module.exports = selectBy;
