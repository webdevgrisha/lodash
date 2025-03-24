const filter = require("./filter");

describe("'filter' function tests:'", () => {
  test("Should throw error for all not array or simple object data", () => {
    const errorMessage = "Collection must be array or object";

    const predicate = (value) => value;

    expect(() => filter("", predicate)).toThrow(errorMessage);
    expect(() => filter(42, predicate)).toThrow(errorMessage);
    expect(() => filter(true, predicate)).toThrow(errorMessage);
    expect(() => filter(null, predicate)).toThrow(errorMessage);
    expect(() => filter(undefined, predicate)).toThrow(errorMessage);
    expect(() => filter(new Date(), predicate)).toThrow(errorMessage);
    expect(() => filter(new RegExp(), predicate)).toThrow(errorMessage);
    expect(() => filter(new Map(), predicate)).toThrow(errorMessage);
    expect(() => filter(new Set(), predicate)).toThrow(errorMessage);
    expect(() => filter(function () {}, predicate)).toThrow(errorMessage);
  });

  test("Should not change the original array", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const arrayCopy = [...array];
    const predicate = (value) => value % 2 === 0;

    filter(array, predicate);

    expect(array).toStrictEqual(arrayCopy);
  });

  test("Should not change the original object", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const objCopy = JSON.parse(JSON.stringify(obj));
    const predicate = ([key, value]) => value % 2 === 0;

    filter(obj, predicate);

    expect(obj).toStrictEqual(objCopy);
  });

  test("Should use default 'predicate' function if 'predicate' not provide", () => {
    const array = [0, 1, "", 2, null, 3, NaN, 4, undefined, 5, false];

    expect(filter(array)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test("Filters an array based on predicate functions", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const predicate1 = (value) => value % 2 === 0;
    const predicate2 = (value) => value % 2 !== 0;

    expect(filter(array, predicate1)).toStrictEqual([2, 4, 6]);
    expect(filter(array, predicate2)).toStrictEqual([1, 3, 5]);
  });

  test("Filters an array using the `_.matches` iteratee shorthand.", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    expect(filter(users, { age: 36, active: true })).toStrictEqual([
      { user: "barney", age: 36, active: true },
    ]);

    expect(
      filter(users, { user: "fred", age: 40, active: false })
    ).toStrictEqual([{ user: "fred", age: 40, active: false }]);

    expect(filter(users, {})).toStrictEqual(users);
  });

  test("Filters an array using the `_.matchesProperty` iteratee shorthand.", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    expect(filter(users, ["active", false])).toStrictEqual([
      { user: "fred", age: 40, active: false },
    ]);

    expect(filter(users, ["active", true])).toStrictEqual([
      { user: "barney", age: 36, active: true },
    ]);
  });

  test("Filters an array using the `_.property` iteratee shorthand.", () => {
    const users = [
      { user: "barney", age: 36, active: true },
      { user: "fred", age: 40, active: false },
    ];

    expect(filter(users, "active")).toStrictEqual([
      { user: "barney", age: 36, active: true },
    ]);
  });

  test("Filters an object using the `_.matchesProperty` iteratee shorthand.", () => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    const predicate = ([key, value]) => value % 2 === 0;

    expect(filter(obj, predicate)).toEqual([{ b: 2 }, { d: 4 }]);
  });

  test("returns an empty array when no values match", () => {
    const array = [1, 3, 5, 7];
    const predicate = (num) => num % 2 === 0;

    expect(filter(array, predicate)).toEqual([]);
  });

  test("filters an array with nested objects", () => {
    const users = [
      { id: 1, details: { age: 25, active: true } },
      { id: 2, details: { age: 30, active: false } },
      { id: 3, details: { age: 22, active: true } },
    ];
    const predicate = (user) => user.details.active;
    const predicate2 = (user) => user.details.age > 25;

    expect(filter(users, predicate)).toEqual([
      { id: 1, details: { age: 25, active: true } },
      { id: 3, details: { age: 22, active: true } },
    ]);

    expect(filter(users, predicate2)).toEqual([
      { id: 2, details: { age: 30, active: false } },
    ]);
  });

  test("filters an object with nested values", () => {
    const data = {
      user1: { name: "John", details: { active: true, age: 25 } },
      user2: { name: "Jane", details: { active: false, age: 30 } },
      user3: { name: "Tom", details: { active: true, age: 22 } },
    };
    const predicate = ([key, value]) => value.details.active;
    const predicate2 = ([key, value]) => value.details.age > 25;

    expect(filter(data, predicate)).toEqual([
      { user1: { name: "John", details: { active: true, age: 25 } } },
      { user3: { name: "Tom", details: { active: true, age: 22 } } },
    ]);

    expect(filter(data, predicate2)).toEqual([
      { user2: { name: "Jane", details: { active: false, age: 30 } } },
    ]);
  });
});
