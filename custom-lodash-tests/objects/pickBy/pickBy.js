const selectBy = require('../utils/selectBy');

function pickBy(object, predicate) {
  const condition = (value) => value;

  return selectBy(object, predicate, condition);
}

module.exports = pickBy;
