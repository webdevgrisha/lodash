import { objectCheck } from "../utils/objectCheck";

function omit(object, ...paths) {
  objectCheck(object);

  const objCopy = structuredClone(object);

  for (let path of paths) {
    deleteProp(objCopy, path);
  }

  return objCopy;
}

export { omit };
