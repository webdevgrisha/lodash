const filter = require("../filter/filter");
const arrayCheck = require("../utils/arrayCheck/arrayCheck");

function compact(array) {
  arrayCheck(array);

  return filter(array, Boolean);
}

module.exports = compact;
