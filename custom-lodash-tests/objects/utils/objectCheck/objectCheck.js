const isPlainObject = require('../../../utils/isPlainObject/isPlainObject')

function objectCheck(obj) {
  if (!isPlainObject(obj)) {
    throw Error("Value must be Object.");
  }
}

module.exports = objectCheck;
