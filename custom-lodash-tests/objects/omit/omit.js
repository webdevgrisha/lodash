const flat = require("../../arrays/utils/flat/flat");
const deepCopy = require("../utils/deepCopy/deepCopy");
const deleteProp = require("../utils/deleteProp/deleteProp");
const objectCheck = require("../utils/objectCheck/objectCheck");

function omit(object, ...paths) {
  objectCheck(object);

  const objCopy = deepCopy(object);

  console.log('path before: ', paths);
  paths = flat(paths);
  console.log('path after: ', paths);

  for (let path of paths) {
    deleteProp(objCopy, path);
  }

  return objCopy;
}

module.exports = omit;

// 1: Проверка на то что предеанный данные являются простым объктом
// 2: что работае как для путей массивов
// 3: работает для путей массивов вложенных объектов
// 4: что работае как для путей строк
// 5: работает для путей строк вложенных объектов
// 6: не изменят исходный объект
// 7: глубокая проверка что не изменяет исходный  объект.