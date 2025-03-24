import { selectBy } from "../utils/selectBy";

function pickBy(object, predicate) {
  const condition = (value) => value;

  return selectBy(object, predicate, condition);
}

export { pickBy };
