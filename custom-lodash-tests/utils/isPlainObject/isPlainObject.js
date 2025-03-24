function isPlainObject(obj) {
  const result =
    obj !== null &&
    typeof obj === "object" &&
    (Object.getPrototypeOf(obj) === Object.prototype ||
      Object.getPrototypeOf(obj) === null);

  return result;
}


module.exports = isPlainObject;

