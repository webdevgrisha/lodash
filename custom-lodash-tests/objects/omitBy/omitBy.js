const selectBy = require('../utils/selectBy/selectBy');

function omitBy(object, predicate) {
  const condition = (value) => !value;

  return selectBy(object, predicate, condition);
}

module.exports = omitBy;
