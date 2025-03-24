import { isObject } from "../../utils/isObject";
import { objectCheck } from "../utils/objectCheck";

function merge(object, ...sources) {
  objectCheck(object);

  for (let source of sources) {
    if (!isObject(source)) continue;

    for (let key in Object.keys(source)) {
      const sourceValue = source[key];
      const objectValue = object[key];

      if (sourceValue === undefined) continue;

      if (Array.isArray(sourceValue) && Array.isArray(objectValue)) {
        object[key] = [...objectValue, ...sourceValue];
        continue;
      }

      if (isObject(sourceValue) && isObject(objectValue)) {
        merge(objectValue, structuredClone(sourceValue));
        continue;
      }

      object[key] = sourceValue;
    }
  }

  return object;
}

export { merge };
