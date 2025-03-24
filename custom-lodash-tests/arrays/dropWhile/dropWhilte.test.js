const dropWhile = require("./dropWhile");

describe("'dropWhileWhile' function tests:'", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => dropWhile({}, 2)).toThrow(errorMessage);
    expect(() => dropWhile(42, 2)).toThrow(errorMessage);
    expect(() => dropWhile(true, 2)).toThrow(errorMessage);
    expect(() => dropWhile(null, 2)).toThrow(errorMessage);
    expect(() => dropWhile(undefined, 2)).toThrow(errorMessage);
    expect(() => dropWhile(new Date(), 2)).toThrow(errorMessage);
    expect(() => dropWhile(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => dropWhile(new Map(), 2)).toThrow(errorMessage);
    expect(() => dropWhile(new Set(), 2)).toThrow(errorMessage);
    expect(() => dropWhile(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should return empty array if input array is empty", () => {
    expect(dropWhile([], () => true)).toStrictEqual([]);
  });

  test("Should return new array", () => {
    const arr = [1, 2, 3];

    expect(dropWhile(arr, () => true)).not.toBe(arr);
  });

  test("Should not changed original array", () => {
    const arr = [1, 0, false];

    dropWhile(arr, () => true);

    expect(arr).toStrictEqual([1, 0, false]);
  });

  test("Should use default 'predicate' of Boolean if not provided", () => {
    const arr = [1, 2, 3, 0, 5, false];

    expect(dropWhile(arr)).toStrictEqual([0, 5, false]);
    expect(dropWhile(arr, undefined)).toStrictEqual([0, 5, false]);
  });

  test("Should return array without elements while predicate is true", () => {
    const arr = [1, 2, 3, 4];

    expect(dropWhile(arr, (el) => el)).toStrictEqual([]);
  });

  // Lodash documentation test cases
  const users = [
    { user: "barney", active: false },
    { user: "fred", active: false },
    { user: "pebbles", active: true },
  ];

  test("Should drop elements while function predicate is true", () => {
    expect(dropWhile(users, (o) => !o.active)).toStrictEqual([
      { user: "pebbles", active: true },
    ]);
  });

  test("Should drop elements using _.matches iteratee shorthand", () => {
    expect(dropWhile(users, { user: "barney", active: false })).toStrictEqual([
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ]);
  });

  test("Should drop elements using _.matchesProperty iteratee shorthand", () => {
    expect(dropWhile(users, ["active", false])).toStrictEqual([
      { user: "pebbles", active: true },
    ]);
  });

  test("Should drop elements using _.property iteratee shorthand", () => {
    expect(dropWhile(users, "active")).toStrictEqual([
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ]);
  });
});
