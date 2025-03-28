const includes = require("./includes");

describe("'includes' function tests:", () => {
  test("Should throw error for all non-array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => includes({}, 2)).toThrow(errorMessage);
    expect(() => includes(42, 2)).toThrow(errorMessage);
    expect(() => includes(true, 2)).toThrow(errorMessage);
    expect(() => includes(null, 2)).toThrow(errorMessage);
    expect(() => includes(undefined, 2)).toThrow(errorMessage);
    expect(() => includes(new Date(), 2)).toThrow(errorMessage);
    expect(() => includes(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => includes(new Map(), 2)).toThrow(errorMessage);
    expect(() => includes(new Set(), 2)).toThrow(errorMessage);
    expect(() => includes(function () {}, 2)).toThrow(errorMessage);
  });

  const arr = [1, 2, 3, 4, 5];

  test("Should use default 'fromIndex' of 0 if not provided", () => {
    expect(includes(arr, 1)).toBeTruthy();
    expect(includes(arr, 1, undefined)).toBeTruthy();
  });

  test("Should use default 'fromIndex' of 0 if fromIndex is non-numeric", () => {
    expect(includes(arr, 3, "")).toBeTruthy();
    expect(includes(arr, 3, null)).toBeTruthy();
    expect(includes(arr, 3, true)).toBeTruthy();
    expect(includes(arr, 3, new Date())).toBeTruthy();
    expect(includes(arr, 3, new Map())).toBeTruthy();
    expect(includes(arr, 3, new Set())).toBeTruthy();
    expect(includes(arr, 3, function () {})).toBeTruthy();
    expect(includes(arr, 3, {})).toBeTruthy();
  });

  test("Should floor down fractional fromIndex values", () => {
    expect(includes(arr, 3, 2.9)).toBeTruthy();
    expect(includes(arr, 4, 3.1)).toBeTruthy();
  });

  test("Should start search from 'fromIndex'", () => {
    expect(includes(arr, 1, 2)).toBeFalsy();
  });

  test("Should allow negative 'fromIndex'", () => {
    expect(includes(arr, 4, -2)).toBeTruthy();
    expect(includes(arr, 4, -10)).toBeTruthy();
  });

  test("Should return false if 'fromIndex' is greater or equal to array length", () => {
    expect(includes(arr, 5, 6)).toBeFalsy();
  });

  test("Should return false if no element found", () => {
    expect(includes(arr, 100)).toBeFalsy();
  });

  test("Should return false for empty array", () => {
    const emptyArr = [];
    expect(includes(emptyArr, 1)).toBeFalsy();
  });

  test("Should not change the original array", () => {
    const arrCopy = [...arr];
    includes(arr, 3);
    expect(arr).toStrictEqual(arrCopy);
  });

  test("Should make correct undefined check", () => {
    expect(includes([...arr, undefined], undefined)).toBeTruthy();
    expect(includes(arr, undefined)).toBeFalsy();
  });

  test("Should make correct NaN check", () => {
    expect(includes([...arr, NaN], NaN)).toBeTruthy();
    expect(includes(arr, NaN)).toBeFalsy();
  });

  test("Should make correct check for same object, not 'isMatch", () => {
    const newObj = {};

    expect(includes([...arr, newObj], newObj)).toBeTruthy();
  });

  test("Should doesn't use 'isMatch' compare", () => {
    expect(includes([...arr, ["a"]], ["a"])).toBeFalsy();
    expect(includes([...arr, { a: 1 }], { a: 1 })).toBeFalsy();
  });
});
