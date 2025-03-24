const map = require("./map");

describe("'map' function tests:'", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => map({}, 2)).toThrow(errorMessage);
    expect(() => map(42, 2)).toThrow(errorMessage);
    expect(() => map(true, 2)).toThrow(errorMessage);
    expect(() => map(null, 2)).toThrow(errorMessage);
    expect(() => map(undefined, 2)).toThrow(errorMessage);
    expect(() => map(new Date(), 2)).toThrow(errorMessage);
    expect(() => map(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => map(new Map(), 2)).toThrow(errorMessage);
    expect(() => map(new Set(), 2)).toThrow(errorMessage);
    expect(() => map(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should return empty array if input array is empty", () => {
    expect(map([], (value) => value)).toStrictEqual([]);
  });

  test("Should return new array", () => {
    const arr = [1, 2, 3];

    expect(map(arr, (value) => value)).not.toBe(arr);
  });

  test("Should not change original array", () => {
    const arr = [1, 2, 3];
    const arrCopy = [...arr];

    map(arr)

    expect(arr).not.toBe(arrCopy);
  });

  test("Should use 'iteratee' default function when 'iteratee' is not provided", () => {
    expect(map([1, 2, 3], undefined)).toStrictEqual([1, 2, 3]);
    expect(map([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });

});
