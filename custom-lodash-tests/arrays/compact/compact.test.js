const compact = require("./compact");

describe("compact function tests:", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => compact({}, 2)).toThrow(errorMessage);
    expect(() => compact(42, 2)).toThrow(errorMessage);
    expect(() => compact(true, 2)).toThrow(errorMessage);
    expect(() => compact(null, 2)).toThrow(errorMessage);
    expect(() => compact(undefined, 2)).toThrow(errorMessage);
    expect(() => compact(new Date(), 2)).toThrow(errorMessage);
    expect(() => compact(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => compact(new Map(), 2)).toThrow(errorMessage);
    expect(() => compact(new Set(), 2)).toThrow(errorMessage);
    expect(() => compact(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should return empty array for empty input array", () => {
    expect(compact([])).toStrictEqual([]);
  });

  test("Should return array without falsy values", () => {
    const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

    expect(compact(arr)).toStrictEqual([1, 2, 3]);
  });


  test("Should return new array", () => {
    const arr = [];

    expect(compact(arr)).not.toBe(arr);
  });

  test("Should not changed original array", () => {
    const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

    compact(arr);

    expect(arr).toStrictEqual([0, 1, false, 2, "", 3, null, undefined, NaN]);
  });
});
