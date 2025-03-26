const getProp = require("../../objects/utils/getProp/getProp");
const arrayCheck = require("../utils/arrayCheck/arrayCheck");
const push = require("../utils/push/push");

function map(collection, iteratee = (value) => value) {
  arrayCheck(collection);

  if (!(typeof iteratee === "function" || typeof iteratee === "string")) {
    throw Error("Iteratee must be function or string");
  }

  if (typeof iteratee === "string") {
    const path = iteratee;
    iteratee = (currValue) => getProp(currValue, path);
  }

  const newArr = [];

  for (let i = 0; i < collection.length; i++) {
    const result = iteratee(collection[i], i, collection);

    push(newArr, result);
  }

  return newArr;

  // продумать тест кейсы
}

module.exports = map;
