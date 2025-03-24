const zip = require("./zip");

describe("'zip' function tests:'", () => {
  test("Should return an empty array when no arguments are passed", () => {
    expect(zip()).toEqual([]);
  });

  test("Should zip arrays with same length", () => {
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });

  test("Should zip arrays of different lengths, filling missing values with undefined", () => {
    expect(zip(["a", "b"], [1], [true, false, "bonus"])).toEqual([
      ["a", 1, true],
      ["b", undefined, false],
      [undefined, undefined, "bonus"],
    ]);
  });

  test("Should zip empty arrays", () => {
    expect(zip([], [], [])).toEqual([]);
  });

  test("Should zip a single array", () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test("Should zip non-array values", () => {
    expect(zip(["a", "b"], 1, [true, false])).toEqual([
      ["a", 1, true],
      ["b", undefined, false],
    ]);
  });

  test("Should zip when only non-array values are passed", () => {
    expect(zip(1, 2, 3)).toEqual([[1, 2, 3]]);
  });

  test("Should zip an array with undefined values", () => {
    expect(zip(["a", undefined, "c"], [1, 2, 3])).toEqual([
      ["a", 1],
      [undefined, 2],
      ["c", 3],
    ]);
  });

  test("Should zip arrays containing empty arrays", () => {
    expect(zip(["a", "b"], [], [true, false])).toEqual([
      ["a", undefined, true],
      ["b", undefined, false],
    ]);
  });
});
