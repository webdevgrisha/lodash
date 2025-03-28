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

  test("Should work correctly for square function, on array of numbers", () => {
    const arr = [1, 2, 3, 4];
    const iteratee = (currValue) => Math.pow(currValue, 2);

    expect(map(arr, iteratee)).toEqual([1, 4, 9, 16]);
  });

  test("Should work correctly for square function, on array of objects", () => {
    const arr = [{n: 1}, {n: 2}, {n: 3}, {n: 4}];
    const iteratee = (currValue) => Math.pow(currValue.n, 2);

    expect(map(arr, iteratee)).toEqual([1, 4, 9, 16]);
  });

  test("Should currectly map, for the `_.property` iteratee shorthand.", () => {
    const users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    expect(map(users, 'user')).toEqual(['barney', 'fred']);
  });

  test("Should currectly map, for the `_.property` iteratee shorthand on array with object an non object elemets.", () => {
    const users = [
      { 'user': 'barney' },
      { 'user': 'fred' },
      1,
      "b",
      true
    ];

    expect(map(users, 'user')).toEqual(['barney', 'fred', undefined, undefined, undefined]);
  });

  test("Should currectly map, for the `_.property` iteratee shorthand on array with no object elemts.", () => {
    const arr = [1, 2, 3, 4];

    expect(map(arr, 'user')).toEqual([undefined, undefined, undefined, undefined]);
  });
});
