const transformPath = require("./transformPath");

describe("'transformPath' function tests:", () => {
  test("Should return an array same array is passed", () => {
    const arr = ["a", "b", "c"];

    expect(transformPath(arr)).toStrictEqual(arr);
  });

  const testData = [
    {
      start: "a.b.c",
      end: ["a", "b", "c"],
    },
    {
      start: "a[0].b",
      end: ["a", "0", "b"],
    },
    {
      start: 'a["b"].c',
      end: ["a", "b", "c"],
    },
    {
      start: 'a["b"]["c"]',
      end: ["a", "b", "c"],
    },
    {
      start: "a['bobr bydlo'].c",
      end: ["a", "bobr bydlo", "c"],
    },
    {
      start: "a['[bobr bydlo]'].c",
      end: ["a", "[bobr bydlo]", "c"],
    },
    {
      start: 'a["b.c"]',
      end: ["a", "b", "c"],
    },
    {
      start: "a..b",
      end: ["a", "", "b"],
    },
    {
      start: "a[].b",
      end: ["a", "", "b"],
    },
    {
      start: "",
      end: [""],
    },
  ];

  test.each(testData)(
    "Should correctly transform path from '$start' to '$end'",
    ({ start, end }) => {
      expect(transformPath(start)).toStrictEqual(end);
    }
  );

  test("Should throw an error for all data type apart from 'array' and 'string'", () => {
    const errorMessage = "Invalid path. Path should be a string or an array.";

    expect(() => transformPath({})).toThrow(errorMessage);
    expect(() => transformPath(42)).toThrow(errorMessage);
    expect(() => transformPath(true)).toThrow(errorMessage);
    expect(() => transformPath(null)).toThrow(errorMessage);
    expect(() => transformPath(undefined)).toThrow(errorMessage);
    expect(() => transformPath(new Date())).toThrow(errorMessage);
    expect(() => transformPath(new RegExp())).toThrow(errorMessage);
    expect(() => transformPath(new Map())).toThrow(errorMessage);
    expect(() => transformPath(new Set())).toThrow(errorMessage);
    expect(() => transformPath(function () {})).toThrow(errorMessage);
  });
});
