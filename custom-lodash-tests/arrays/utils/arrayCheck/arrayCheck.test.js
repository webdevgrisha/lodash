const arrayCheck = require("./arrayCheck");

describe("'arrayCheck' function tests:", () => {
  test("Should throw an error for all not array data", () => {
    const errorMessage = "Collection must be Array.";

    expect(() => arrayCheck({})).toThrow(errorMessage);
    expect(() => arrayCheck(10)).toThrow(errorMessage);
    expect(() => arrayCheck(true)).toThrow(errorMessage);
    expect(() => arrayCheck(null)).toThrow(errorMessage);
    expect(() => arrayCheck(undefined)).toThrow(errorMessage);
    expect(() => arrayCheck(new Date())).toThrow(errorMessage);
    expect(() => arrayCheck(new RegExp())).toThrow(errorMessage);
    expect(() => arrayCheck(new Map())).toThrow(errorMessage);
    expect(() => arrayCheck(new Set())).toThrow(errorMessage);
    expect(() => arrayCheck(function () {})).toThrow(errorMessage);
  });

  test("Should not throw error for array data type", () => {
    expect(() => arrayCheck([])).not.toThrow();
    expect(() => arrayCheck(new Array())).not.toThrow();
  });

  test("Should return nothing for array data type", () => {
    expect(arrayCheck([])).toBeUndefined();
    expect(arrayCheck(new Array())).toBeUndefined();
  });
});
