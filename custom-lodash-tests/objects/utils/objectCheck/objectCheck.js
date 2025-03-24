const isPlainObject = require('../../../utils/isPlainObject/isPlainObject')
// import { isPlainObject } from "../../utils/isPlainObject";

function objectCheck(obj) {
  if (!isPlainObject(obj)) {
    throw Error("Value must be Object.");
  }
}

module.exports = objectCheck;
// export { objectCheck };
