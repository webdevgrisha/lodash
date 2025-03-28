const push = require("./push");

// стоит ли добавить проверку на тип данных ?
describe("'push' function tests:", () => {
  test("Should throw an error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => push({})).toThrow(errorMessage);
    expect(() => push(42)).toThrow(errorMessage);
    expect(() => push(true)).toThrow(errorMessage);
    expect(() => push(null)).toThrow(errorMessage);
    expect(() => push(undefined)).toThrow(errorMessage);
    expect(() => push(new Date())).toThrow(errorMessage);
    expect(() => push(new RegExp())).toThrow(errorMessage);
    expect(() => push(new Map())).toThrow(errorMessage);
    expect(() => push(new Set())).toThrow(errorMessage);
    expect(() => push(function () {})).toThrow(errorMessage);
  });

  test("Should add element to the end of array", () => {
    const arr = [1, 2, 3];
    const el = 4;
    
    const addedElem = push(arr, el).at(-1);

    expect(addedElem).toStrictEqual(el);
  });

  test("Should change original array", () => {
    const arr = [1, 2, 3];
    const el = 4;

    expect(push(arr, el)).toStrictEqual([1, 2, 3, 4]);
  });
});
