// function globalObjectSelling(originalObj, objCopy) {
//     const isSealed = Object.isSealed(originalObj);
//     const isExtensible = Object.isExtensible(originalObj);
//     const isFrozen = Object.isFrozen(originalObj);

//     if (isSealed) {
//       Object.seal(objCopy);
//     }

//     if (!isExtensible) {
//       Object.preventExtensions(objCopy);
//     }

//     if (isFrozen) {
//       Object.freeze(objCopy);
//     }
//   }

function deepCopy(obj) {
  if (typeof obj === "symbol") {
    return Symbol(obj.description);
  }

  if (obj instanceof Date) {
    const dateCopy = new Date(obj.getTime());

    const prototype = Object.getPrototypeOf(obj);
    Object.setPrototypeOf(dateCopy, prototype);

    //   globalObjectSelling(obj, dateCopy);

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
        value: deepCopy(obj[i]),
      });
    }

    //   globalObjectSelling(obj, arrayCopy);

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
        Object.defineProperty(objCopy, deepCopy(key), {
          ...descriptor,
          value: deepCopy(value),
        });
      }
    }

    //   globalObjectSelling(obj, objCopy);

    return objCopy;
  }

  return obj;
}

module.exports = deepCopy;
// module.exports = deepCopy;
// export { copy };
