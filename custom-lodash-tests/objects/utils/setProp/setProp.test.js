const setProp = require("./setProp");

describe("'setProp' function tests:", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";

    expect(() => setProp("")).toThrow(errorMessage);
    expect(() => setProp(10)).toThrow(errorMessage);
    expect(() => setProp(true)).toThrow(errorMessage);
    expect(() => setProp(null)).toThrow(errorMessage);
    expect(() => setProp(undefined)).toThrow(errorMessage);
    expect(() => setProp([])).toThrow(errorMessage);
    expect(() => setProp(new Date())).toThrow(errorMessage);
    expect(() => setProp(new RegExp())).toThrow(errorMessage);
    expect(() => setProp(new Map())).toThrow(errorMessage);
    expect(() => setProp(new Set())).toThrow(errorMessage);
    expect(() => setProp(function () {})).toThrow(errorMessage);
  });

  test("Should change original object", () => {
    const obj = { a: { b: { c: 10 } } };
    const objCopy = JSON.parse(JSON.stringify(obj));

    setProp(obj, "a.b.c", 1);

    expect(obj).not.toStrictEqual(objCopy)
  });

  test("Should always return original object", () => {
    const obj = { a: 1 };

    expect(setProp(obj, [], 10)).toBe(obj);
    expect(setProp(obj, ['a', 10], 10)).toBe(obj);
    expect(setProp(obj, 'a.b', 10)).toBe(obj);
  });

  test("Sets a new property in an object", () => {
    const obj = {};

    setProp(obj, "a", 10);
    expect(obj.a).toBe(10);
  });

  test("Overwrites an existing property", () => {
    const obj = { a: 1 };

    setProp(obj, "a", 10);
    expect(obj.a).toBe(10);
  });

  test("Creates nested objects if missing", () => {
    const obj = {};

    setProp(obj, "a.b.c", 10);
    expect(obj).toEqual({ a: { b: { c: 10 } } });
  });

  test("Works with array paths", () => {
    const obj = {};

    setProp(obj, ["a", "b", "c"], 10);
    expect(obj).toEqual({ a: { b: { c: 10 } } });
  });

  test("Sets value inside an array", () => {
    const obj = { a: [{ b: { c: 1 } }] };

    setProp(obj, "a[0].b.c", 10);
    expect(obj.a[0].b.c).toBe(10);
  });
});
