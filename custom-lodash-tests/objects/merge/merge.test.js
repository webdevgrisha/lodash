const merge = require("./merge");

describe("'merge' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";

    expect(() => merge("")).toThrow(errorMessage);
    expect(() => merge(10)).toThrow(errorMessage);
    expect(() => merge(true)).toThrow(errorMessage);
    expect(() => merge(null)).toThrow(errorMessage);
    expect(() => merge(undefined)).toThrow(errorMessage);
    expect(() => merge([])).toThrow(errorMessage);
    expect(() => merge(new Date())).toThrow(errorMessage);
    expect(() => merge(new RegExp())).toThrow(errorMessage);
    expect(() => merge(new Map())).toThrow(errorMessage);
    expect(() => merge(new Set())).toThrow(errorMessage);
    expect(() => merge(function () {})).toThrow(errorMessage);
  });

  test("Should merge two objects with primitive values", () => {
    const object = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };

    expect(merge(object, source)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("Should recursively merge nested objects", () => {
    const object = { a: { b: 2 } };
    const source = { a: { c: 3 } };

    expect(merge(object, source)).toEqual({ a: { b: 2, c: 3 } });
  });

  test("Should merge arrays by concatenating them", () => {
    const object = { a: [1, 2] };
    const source = { a: [3, 4] };

    expect(merge(object, source)).toEqual({ a: [1, 2, 3, 4] });
  });

  test("Should override non-object values by object values", () => {
    const object = { a: { b: 2 } };
    const source = { a: { b: { c: 1 } } };

    expect(merge(object, source)).toEqual({ a: { b: { c: 1 } } });
  });

  test("Should override object values by non-object values", () => {
    const object = { a: { b: { c: 1 } } };
    const source = { a: { b: 2 } };

    expect(merge(object, source)).toEqual({ a: { b: 2 } });
  });
});
