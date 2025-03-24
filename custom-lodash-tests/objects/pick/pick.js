import { getProp } from "../utils/getProp";
import { objectCheck } from "../utils/objectCheck";
import { setProp } from "../utils/setProp";

function pick(object, ...paths) {
  objectCheck(object);

  const newObj = {};

  for (let path of paths) {
    const defaultValue = Math.random() + Date.now();
    const objValue = getProp(object, path, defaultValue);

    if (defaultValue !== objValue) {
      setProp(newObj, path, objValue);
    }
  }

  return newObj;
}

export { pick };
