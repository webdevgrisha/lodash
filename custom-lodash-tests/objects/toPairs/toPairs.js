import { push } from "../../arrays/utils/push";
import { isObject } from "../../utils/isObject";

function toPairs(obj) {
  if (!isObject(obj)) {
    throw Error('Value must be type of "object');
  }

  if (Array.isArray(obj)) return obj;

  if (obj instanceof Map || obj instanceof Set) {
    return Array.from(obj.entries());
  }

  const objOwnKeys = Reflect.ownKeys(obj);

  const arrPairs = [];

  for (let key of objOwnKeys) {
    const value = obj[key];

    push(arrPairs, [key, value]);
  }

  return arrPairs;
}

export { toPairs };
