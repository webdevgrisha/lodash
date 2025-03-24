const take = require("./take");

describe("'take' function tests:'", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => take({}, 2)).toThrow(errorMessage);
    expect(() => take(42, 2)).toThrow(errorMessage);
    expect(() => take(true, 2)).toThrow(errorMessage);
    expect(() => take(null, 2)).toThrow(errorMessage);
    expect(() => take(undefined, 2)).toThrow(errorMessage);
    expect(() => take(new Date(), 2)).toThrow(errorMessage);
    expect(() => take(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => take(new Map(), 2)).toThrow(errorMessage);
    expect(() => take(new Set(), 2)).toThrow(errorMessage);
    expect(() => take(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should return empty array if input array is empty", () => {
    expect(take([], 2)).toStrictEqual([]);
  });

  test("Should return new array", () => {
    const arr = [1, 2, 3];

    expect(take(arr, 1)).not.toBe(arr);
  });

  test("Should not change original array", () => {
    const arr = [1, 2, 3];
    const arrCopy = [...arr];

    take(arr, 1)

    expect(arr).not.toBe(arrCopy);
  });

  test("Should use 'n' default value when 'n' is not provided", () => {
    expect(take([1, 2, 3], undefined)).toStrictEqual([1]);
    expect(take([1, 2, 3])).toStrictEqual([1]);
  });

  test("Should return the first two elements when 'n' is 2", () => {
    expect(take([1, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  test("Should return the entire array when 'n' is greater than array length", () => {
    expect(take([1, 2, 3], 5)).toStrictEqual([1, 2, 3]);
  });

  test("Should return an empty array when 'n' is 0", () => {
    expect(take([1, 2, 3], 0)).toStrictEqual([]);
  });
});
