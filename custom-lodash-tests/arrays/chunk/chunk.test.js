const chunk = require("./chunk");

describe("'chunk' function tests:", () => {
  test("Should throw error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => chunk({}, 2)).toThrow(errorMessage);
    expect(() => chunk(42, 2)).toThrow(errorMessage);
    expect(() => chunk(true, 2)).toThrow(errorMessage);
    expect(() => chunk(null, 2)).toThrow(errorMessage);
    expect(() => chunk(undefined, 2)).toThrow(errorMessage);
    expect(() => chunk(new Date(), 2)).toThrow(errorMessage);
    expect(() => chunk(new RegExp(), 2)).toThrow(errorMessage);
    expect(() => chunk(new Map(), 2)).toThrow(errorMessage);
    expect(() => chunk(new Set(), 2)).toThrow(errorMessage);
    expect(() => chunk(function () {}, 2)).toThrow(errorMessage);
  });

  test("Should throw error for all not number 'size' date", () => {
    const errorMessage = "Size must be a number.";

    expect(() => chunk([], "1")).toThrow(errorMessage);
    expect(() => chunk([], {})).toThrow(errorMessage);
    expect(() => chunk([], true)).toThrow(errorMessage);
    expect(() => chunk([], null)).toThrow(errorMessage);
    expect(() => chunk([], new Date())).toThrow(errorMessage);
    expect(() => chunk([], new RegExp())).toThrow(errorMessage);
    expect(() => chunk([], new Map())).toThrow(errorMessage);
    expect(() => chunk([], new Set())).toThrow(errorMessage);
    expect(() => chunk([], function () {})).toThrow(errorMessage);
  });

  test("Should return empty array for size less or equal 0", () => {
    const arr = ["a", "b", "c", "d"];

    expect(chunk(arr, 0)).toStrictEqual([]);
    expect(chunk(arr, -1)).toStrictEqual([]);
  });

  test("Should return empty array if size is NaN", () => {
    expect(chunk([1, 2], NaN)).toStrictEqual([]);
  });

  test("Should use default size of 1 if not provided", () => {
    const arr = ["a", "b", "c", "d"];

    expect(chunk(arr)).toStrictEqual([["a"], ["b"], ["c"], ["d"]]);
    expect(chunk(arr, undefined)).toStrictEqual([["a"], ["b"], ["c"], ["d"]]);
  });

  test("Should return empty array if input array is empty", () => {
    expect(chunk([], 2)).toStrictEqual([]);
  });

  const testArr = ["a", "b", "c", "d"];
  const testData = [
    {
      start: testArr,
      size: 1,
      end: [["a"], ["b"], ["c"], ["d"]],
    },
    {
      start: testArr,
      size: 2,
      end: [
        ["a", "b"],
        ["c", "d"],
      ],
    },
    {
      start: testArr,
      size: 3,
      end: [["a", "b", "c"], ["d"]],
    },
    {
      start: testArr,
      size: 4,
      end: [[...testArr]],
    },
    {
      start: testArr,
      size: 5,
      end: [[...testArr]],
    },
  ];

  test.each(testData)(
    "Should correctly chank array: '$start' for size: '$size' to '$end'",
    ({ start, size, end }) => {
      expect(chunk(start, size)).toStrictEqual(end);
    }
  );

  test("Should not change the original array", () => {
    const arr = ["a", "b", "c", "d"];
    const arrCopy = [...arr];

    chunk(arr, 2);

    expect(arr).toStrictEqual(arrCopy);
    expect(chunk([])).not.toBe([]);
  });

  test("Should allways return new array", () => {
    const arr = [];

    expect(chunk(arr)).not.toBe(arr);
  });
});
