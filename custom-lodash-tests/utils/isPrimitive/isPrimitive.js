function isPrimitive(value) {
  const valueType = typeof value;

  if (value === null) return true;

  if (valueType === "object" || valueType === "function") {
    return false;
  }

  return true;
}

module.exports = isPrimitive;

