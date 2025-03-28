const arrayCheck = require("../arrayCheck/arrayCheck");
const push = require("../push/push");

function flat(array) {
  arrayCheck(array);

  const newArr = [];

  for (let value of array) {
    Array.isArray(value) ? push(newArr, ...value) : push(newArr, value);
  }

  return newArr;
}

module.exports = flat;

// tests
// 1: Проверка на массив типов данных
// 2:
