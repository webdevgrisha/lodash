function arrayCheck(arr) {
  if (!Array.isArray(arr)) {
    throw Error("Collection must be Array.");
  }
}

module.exports = arrayCheck;
// export { arrayCheck };
