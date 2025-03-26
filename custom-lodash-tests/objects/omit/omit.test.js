const omit = require("./omit");

describe("'omit' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";
    const path = "a";

    expect(() => omit("", path)).toThrow(errorMessage);
    expect(() => omit(10, path)).toThrow(errorMessage);
    expect(() => omit(true, path)).toThrow(errorMessage);
    expect(() => omit(null, path)).toThrow(errorMessage);
    expect(() => omit(undefined, path)).toThrow(errorMessage);
    expect(() => omit([], path)).toThrow(errorMessage);
    expect(() => omit(new Date(), path)).toThrow(errorMessage);
    expect(() => omit(new RegExp(), path)).toThrow(errorMessage);
    expect(() => omit(new Map(), path)).toThrow(errorMessage);
    expect(() => omit(new Set(), path)).toThrow(errorMessage);
    expect(() => omit(function () {}, path)).toThrow(errorMessage);
  });

  test("should work correctly for string paths", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(omit(object, "a", "c")).toEqual({ b: "2" });
  });

  test("should work correctly for array path", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(omit(object, ["a", "c"])).toEqual({ b: "2" });
  });

  test("should work correctly for arrays paths", () => {
    const object = { a: 1, b: "2", c: 3 };

    expect(omit(object, ["a"], ["c"])).toEqual({ b: "2" });
  });
});
