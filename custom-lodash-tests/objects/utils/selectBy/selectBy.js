import { setPredicate } from "../../utils/setPredicate";
import { add } from "../setProp/setProp";
import { deepCopy } from "../deepCopy";
import { objectCheck } from "./objectCheck";

function selectBy(object, predicate, condition) {
  objectCheck(object);

  predicate = setPredicate(predicate);

  const newObj = {};

  for (let key in object) {
    const result = predicate(object[key], key);

    if (condition(result)) {
      const value = deepCopy(object[key]);

      add(newObj, key, value);
    }
  }

  return newObj;
}

export { selectBy };
