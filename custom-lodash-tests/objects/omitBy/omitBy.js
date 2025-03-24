import { selectBy } from "../utils/selectBy";

function omitBy(object, predicate) {
  const condition = (value) => !value;

  return selectBy(object, predicate, condition);
}

export { omitBy };
