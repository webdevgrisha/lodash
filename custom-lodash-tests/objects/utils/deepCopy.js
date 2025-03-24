function deepCopy(obj) {
  if (typeof obj === "symbol") {
    return Symbol(obj.description);
  }

  if (obj instanceof Date) {
    const dateCopy = new Date(obj.getTime());

    const prototype = Object.getPrototypeOf(obj);
    Object.setPrototypeOf(dateCopy, prototype);

    globalObjectSelling(obj, dateCopy);

    return dateCopy;
  }

  if (Array.isArray(obj)) {
    const arrayCopy = [];

    const prototype = Object.getPrototypeOf(obj);
    Object.setPrototypeOf(arrayCopy, prototype);

    for (let i = 0; i < obj.length; i++) {
      const descriptors = Object.getOwnPropertyDescriptor(obj, i);

      Object.defineProperty(arrayCopy, i, {
        ...descriptors,
        value: copy(obj[i]),
      });
    }

    globalObjectSelling(obj, arrayCopy);

    return arrayCopy;
  }

  if (typeof obj === "object" && obj !== null) {
    const objOwnKeys = Reflect.ownKeys(obj);
    const prototype = Object.getPrototypeOf(obj);

    const objCopy = Object.create(prototype);

    for (let key of objOwnKeys) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);
      const value = descriptor.value;

      if (descriptor.get || descriptor.set) {
        Object.defineProperty(objCopy, key, descriptor);
      } else {
        Object.defineProperty(objCopy, copy(key), {
          ...descriptor,
          value: copy(value),
        });
      }
    }

    return objCopy;
  }

  return obj;
}

export { deepCopy };
