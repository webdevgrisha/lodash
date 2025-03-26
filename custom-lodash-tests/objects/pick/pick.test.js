const pick = require("./pick");

describe("'pick' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";
    const path = "a";

    expect(() => pick("", path)).toThrow(errorMessage);
    expect(() => pick(10, path)).toThrow(errorMessage);
    expect(() => pick(true, path)).toThrow(errorMessage);
    expect(() => pick(null, path)).toThrow(errorMessage);
    expect(() => pick(undefined, path)).toThrow(errorMessage);
    expect(() => pick([], path)).toThrow(errorMessage);
    expect(() => pick(new Date(), path)).toThrow(errorMessage);
    expect(() => pick(new RegExp(), path)).toThrow(errorMessage);
    expect(() => pick(new Map(), path)).toThrow(errorMessage);
    expect(() => pick(new Set(), path)).toThrow(errorMessage);
    expect(() => pick(function () {}, path)).toThrow(errorMessage);
  });

  test("should work correctly for string paths", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(pick(object, 'a', 'c')).toEqual({ 'a': 1, 'c': 3 });
  });

  test("should work correctly for arrays path", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(pick(object, ['a'], ['c'])).toEqual({ 'a': 1, 'c': 3 });
  });

  test("should work correctly for arrays path", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });
});
