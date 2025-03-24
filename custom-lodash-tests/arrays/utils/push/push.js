const arrayCheck = require("../arrayCheck/arrayCheck");

function push(arr, item) {
  arrayCheck(arr);
  
  arr[arr.length] = item;

  return arr;
}

module.exports = push;
// export { push };
