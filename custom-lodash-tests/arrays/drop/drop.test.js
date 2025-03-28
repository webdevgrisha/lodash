const drop = require("./drop");

describe("'drop' function tests:", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => drop({}, 2)).toThrow(errorMessage);
    expect(() => drop(42, 2)).toThrow(errorMessage);
    expect(() => drop(true, 2)).toThrow(errorMessage);
    expect(() => drop(null, 2)).toThrow(errorMessage);
    expect(() => drop(undefined, 2)).toThrow(errorMessage);
    expect(() => drop(new Date(), 2)).toThrow(errorMessage);
    expect(() => drop(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => drop(new Map(), 2)).toThrow(errorMessage);
    expect(() => drop(new Set(), 2)).toThrow(errorMessage);
    expect(() => drop(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should return same new array if 'n' is 0 or less", () => {
    const arr = ["a", "b", "c", "d"];

    expect(drop(arr, 0)).toStrictEqual(arr);
    expect(drop(arr, -1)).toStrictEqual(arr);
  });

  test("Should return same new array if 'n' is NaN", () => {
    const arr = ["a", "b", "c", "d"];

    expect(drop(arr, NaN)).toStrictEqual(arr);
  });

  test("Should return same new array if 'n' is not a number type", () => {
    const arr = ["a", "b", "c", "d"];

    expect(drop(arr, "")).toStrictEqual(arr);
    expect(drop(arr, null)).toStrictEqual(arr);
    expect(drop(arr, true)).toStrictEqual(arr);
    expect(drop(arr, new Date())).toStrictEqual(arr);
    expect(drop(arr, new Map())).toStrictEqual(arr);
    expect(drop(arr, new Set())).toStrictEqual(arr);
    expect(drop(arr, function () {})).toStrictEqual(arr);
    expect(drop(arr, {})).toStrictEqual(arr);
  });

  test("Should return empty array if input array is empty", () => {
    expect(drop([], 2)).toStrictEqual([]);
  });

  test("Should use default 'n' of 1 if not provided", () => {
    const arr = ["a", "b", "c", "d"];

    expect(drop(arr)).toStrictEqual(["b", "c", "d"]);
    expect(drop(arr, undefined)).toStrictEqual(["b", "c", "d"]);
  });

  const testArr = ["a", "b", "c", "d"];
  const testData = [
    {
      start: testArr,
      n: 1,
      end: testArr.slice(1),
    },
    {
      start: testArr,
      n: 2,
      end: testArr.slice(2),
    },
    {
      start: testArr,
      n: 3,
      end: testArr.slice(3),
    },
    {
      start: testArr,
      n: 4,
      end: testArr.slice(4),
    },
    {
      start: testArr,
      n: 5,
      end: testArr.slice(5),
    },
  ];

  test.each(testData)(
    "Should correctly drop array: '$start' for size: '$size' to '$end'",
    ({ start, n, end }) => {
      expect(drop(start, n)).toStrictEqual(end);
    }
  );

  test("Should not change the original array", () => {
    const arr = ["a", "b", "c", "d"];
    const arrCopy = [...arr];

    drop(arr, 2);

    expect(arr).toStrictEqual(arrCopy);
  });

  test("Should return empty array if 'n' is greater than array length", () => {
    expect(drop(["a", "b", "c"], 10)).toStrictEqual([]);
    expect(drop(["a", "b", "c"], Infinity)).toStrictEqual([]);
    expect(drop(["a", "b", "c"], Number.MAX_SAFE_INTEGER)).toStrictEqual([]);
  });

  test("Should correctly drop decimal 'n' by flooring to integer", () => {
    expect(drop(["a", "b", "c", "d"], 2.9)).toStrictEqual(["c", "d"]);
    expect(drop(["a", "b", "c", "d"], 1.1)).toStrictEqual(["b", "c", "d"]);
  });
});
