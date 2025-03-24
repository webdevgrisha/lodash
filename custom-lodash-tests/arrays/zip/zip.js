const map = require('../map/map');

function zip(...arrays) {
  const arraysLength = map(arrays, (value) => {
    return Array.isArray(value) ? value.length : 1;
  });

  const maxLength = Math.max(...arraysLength);

  const newArr = Array.from({ length: maxLength }, (_, index) =>
    map(arrays, (value) => {
      return Array.isArray(value) ? value[index] : [value][index];
    })
  );

  return newArr;
}

module.exports = zip;
