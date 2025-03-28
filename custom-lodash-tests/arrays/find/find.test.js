const find = require("./find");

describe("'find' function tests:", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => find({}, 2)).toThrow(errorMessage);
    expect(() => find(42, 2)).toThrow(errorMessage);
    expect(() => find(true, 2)).toThrow(errorMessage);
    expect(() => find(null, 2)).toThrow(errorMessage);
    expect(() => find(undefined, 2)).toThrow(errorMessage);
    expect(() => find(new Date(), 2)).toThrow(errorMessage);
    expect(() => find(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => find(new Map(), 2)).toThrow(errorMessage);
    expect(() => find(new Set(), 2)).toThrow(errorMessage);
    expect(() => find(function () {}, 2)).toThrow(errorMessage);
  });

  const arr = [1, 2, 3, 4, 5];
  const predicate = (el) => el > 2;

  test("Should use default 'fromIndex' of 0 if not provided", () => {
    expect(find(arr, predicate)).toStrictEqual(3);
    expect(find(arr, predicate, undefined)).toStrictEqual(3);
  });

  test("Should use default 'fromIndex' of 0 if from index not number type", () => {
    expect(find(arr, predicate, "")).toStrictEqual(3);
    expect(find(arr, predicate, null)).toStrictEqual(3);
    expect(find(arr, predicate, true)).toStrictEqual(3);
    expect(find(arr, predicate, new Date())).toStrictEqual(3);
    expect(find(arr, predicate, new Map())).toStrictEqual(3);
    expect(find(arr, predicate, new Set())).toStrictEqual(3);
    expect(find(arr, predicate, function () {})).toStrictEqual(3);
    expect(find(arr, predicate, {})).toStrictEqual(3);
  });

  test("Should floor down fractional fromIndex values", () => {
    expect(find(arr, predicate, 2.9)).toStrictEqual(3);
    expect(find(arr, predicate, 3.1)).toStrictEqual(4);
  });  

  test("Should start search from 'fromIndex'", () => {
    expect(find(arr, predicate, 3)).toStrictEqual(4);
  });

  test("Should allow negative 'fromIndex'", () => {
    expect(find(arr, predicate, -2)).toStrictEqual(4);
    expect(find(arr, predicate, -10)).toStrictEqual(3);
  });

  test("Should return undefined if 'fromIndex' is greater or equle than array length", () => {
    expect(find(arr, predicate, 5)).toBeUndefined();
    expect(find(arr, predicate, 6)).toBeUndefined();
  });

  test("Should return undefined if no element found", () => {
    expect(find(arr, (el) => el > 100)).toBeUndefined();
  });

  test("Should return undefined for emty array", () => {
    const arr = [];

    expect(find(arr, predicate)).toBeUndefined();
  });

  test("Should not change original array", () => {
    const arrCopy = [...arr];
    const predicate = (el) => el > 2;

    find(arr, predicate);

    expect(arr).toStrictEqual(arrCopy);
  });

  // Lodash documentation test cases
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  test("Should find first elements for what predicate function return true", () => {
    expect(
      find(users, function (o) {
        return o.age < 40;
      })
    ).toStrictEqual({ user: "barney", age: 36, active: true });
  });

  test("Should find element using _.matches iteratee shorthand", () => {
    expect(find(users, { age: 1, active: true })).toStrictEqual({
      user: "pebbles",
      age: 1,
      active: true,
    });
  });

  test("Should find element using _.matchesProperty iteratee shorthand", () => {
    expect(find(users, ["active", false])).toStrictEqual({
      user: "fred",
      age: 40,
      active: false,
    });
  });

  test("Should find element using _.property iteratee shorthand", () => {
    expect(find(users, "active")).toStrictEqual({
      user: "barney",
      age: 36,
      active: true,
    });
  });
});
