const objectCheck = require("../utils/objectCheck/objectCheck");

function omit(object, ...paths) {
  objectCheck(object);

  const objCopy = structuredClone(object);

  for (let path of paths) {
    deleteProp(objCopy, path);
  }

  return objCopy;
}

module.exports = omit;
