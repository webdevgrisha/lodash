const isPlainObject = require("./isPlainObject.js")

describe("'isPlainObject' function tests:", () => {
  test("Should return true for simple Object", () => {
    expect(isPlainObject({})).toBeTruthy();
    expect(isPlainObject({ a: 1 })).toBeTruthy();
    expect(isPlainObject(new Object())).toBeTruthy();
  });

  test("Should return false for Arrays", () => {
    expect(isPlainObject([])).toBeFalsy();
    expect(isPlainObject([1, 2, 3])).toBeFalsy();
    expect(isPlainObject(new Array())).toBeFalsy();
  });

  test("Should return false for Date", () => {
    expect(isPlainObject(new Date)).toBeFalsy();
  });

  test("Should return false for RegExp", () => {
    expect(isPlainObject(new RegExp)).toBeFalsy();
    expect(isPlainObject(/a/)).toBeFalsy();
  });

  test("Should return false for Map", () => {
    expect(isPlainObject(new Map)).toBeFalsy();
  });

  test("Should return false for Set", () => {
    expect(isPlainObject(new Set)).toBeFalsy();
  });

  test("Should return false for primetives data types", () => {
    expect(isPlainObject(42)).toBeFalsy();
    expect(isPlainObject(BigInt(1))).toBeFalsy();
    expect(isPlainObject("hello")).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(Symbol())).toBeFalsy();
  });

  test("should return false for Functions", () => {
    expect(isPlainObject(() => {})).toBeFalsy();
    expect(isPlainObject(function () {})).toBeFalsy();
    expect(isPlainObject(new Function())).toBeFalsy();
  });
});
