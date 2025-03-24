const objectCheck = require("./objectCheck");

describe("'objectCheck' function tests:", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";

    expect(() => objectCheck("")).toThrow(errorMessage);
    expect(() => objectCheck(10)).toThrow(errorMessage);
    expect(() => objectCheck(true)).toThrow(errorMessage);
    expect(() => objectCheck(null)).toThrow(errorMessage);
    expect(() => objectCheck(undefined)).toThrow(errorMessage);
    expect(() => objectCheck([])).toThrow(errorMessage);
    expect(() => objectCheck(new Date())).toThrow(errorMessage);
    expect(() => objectCheck(new RegExp())).toThrow(errorMessage);
    expect(() => objectCheck(new Map())).toThrow(errorMessage);
    expect(() => objectCheck(new Set())).toThrow(errorMessage);
    expect(() => objectCheck(function () {})).toThrow(errorMessage);
  });

  test("Should not throw error for plain object data type", () => {
    expect(() => objectCheck({})).not.toThrow();
    expect(() => objectCheck(new Object())).not.toThrow();
  });

  test("Should return nothing for plain object data type", () => {
    expect(objectCheck({})).toBeUndefined();
    expect(objectCheck(new Object())).toBeUndefined();
  });
});
