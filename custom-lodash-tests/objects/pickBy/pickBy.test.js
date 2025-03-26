const pickBy = require("./pickBy");

describe("'pickBy' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";
    const path = "a";

    expect(() => pickBy("", path)).toThrow(errorMessage);
    expect(() => pickBy(10, path)).toThrow(errorMessage);
    expect(() => pickBy(true, path)).toThrow(errorMessage);
    expect(() => pickBy(null, path)).toThrow(errorMessage);
    expect(() => pickBy(undefined, path)).toThrow(errorMessage);
    expect(() => pickBy([], path)).toThrow(errorMessage);
    expect(() => pickBy(new Date(), path)).toThrow(errorMessage);
    expect(() => pickBy(new RegExp(), path)).toThrow(errorMessage);
    expect(() => pickBy(new Map(), path)).toThrow(errorMessage);
    expect(() => pickBy(new Set(), path)).toThrow(errorMessage);
    expect(() => pickBy(function () {}, path)).toThrow(errorMessage);
  });

  test("should work correctly for string paths", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(pickBy(object, (value) => typeof value === 'number')).toEqual({ 'a': 1, 'c': 3 });
  });
});
