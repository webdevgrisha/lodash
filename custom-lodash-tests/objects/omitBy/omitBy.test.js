const omitBy = require("./omitBy");

describe("'omitBy' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";
    const path = "a";

    expect(() => omitBy("", path)).toThrow(errorMessage);
    expect(() => omitBy(10, path)).toThrow(errorMessage);
    expect(() => omitBy(true, path)).toThrow(errorMessage);
    expect(() => omitBy(null, path)).toThrow(errorMessage);
    expect(() => omitBy(undefined, path)).toThrow(errorMessage);
    expect(() => omitBy([], path)).toThrow(errorMessage);
    expect(() => omitBy(new Date(), path)).toThrow(errorMessage);
    expect(() => omitBy(new RegExp(), path)).toThrow(errorMessage);
    expect(() => omitBy(new Map(), path)).toThrow(errorMessage);
    expect(() => omitBy(new Set(), path)).toThrow(errorMessage);
    expect(() => omitBy(function () {}, path)).toThrow(errorMessage);
  });

  test("should work correctly for string paths", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(omitBy(object, (value) => typeof value === 'number')).toEqual({ b: "2" });
  });
});
