const isMatch = require("./isMatch");

describe("'isMatch' function tests:", () => {
  test("isNaN should return true for NaN", () => {
    expect(isMatch(NaN, NaN)).toBeTruthy();
  });

  test("Should return false for different primitive values", () => {
    expect(isMatch(1, "1")).toBeFalsy();
    expect(isMatch(1, 2)).toBeFalsy();
    expect(isMatch("a", "b")).toBeFalsy();
    expect(isMatch(null, undefined)).toBeFalsy();
    expect(isMatch(true, false)).toBeFalsy();
    expect(isMatch(BigInt(1), BigInt(2))).toBeFalsy();
    expect(isMatch(Symbol(), Symbol())).toBeFalsy();
  });  
  
  test("Should return true for same primitive values", () => {
    expect(isMatch(1, 1)).toBeTruthy();
    expect(isMatch("a", "a")).toBeTruthy();
    expect(isMatch(true, true)).toBeTruthy();
    expect(isMatch(null, null)).toBeTruthy();
    expect(isMatch(undefined, undefined)).toBeTruthy();
    expect(isMatch(BigInt(1), BigInt(1))).toBeTruthy();

    const symbol = Symbol();
    expect(isMatch(symbol, symbol)).toBeTruthy();
  });

  test("Should return true for same objects", () => {
    const obj = { a: 1, b: 2, c: 3, b() {} };
    const arr = [1, 2, 3];
    const f = obj.b;

    expect(isMatch(obj, obj)).toBeTruthy();
    expect(isMatch(arr, arr)).toBeTruthy();
    expect(isMatch(obj.b, f)).toBeTruthy();
  });

  test("Should return false if one object array and other not", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const arr = [1, 2, 3];

    expect(isMatch(obj, arr)).toBeFalsy();
  });

  test("Should return false if array length is different", () => {
    expect(isMatch([1, 2, 3], [1, 2])).toBeFalsy();
  });

  test("Should return false if array elements are different", () => {
    expect(isMatch([1, 2, 3], [1, 2, 4])).toBeFalsy();
    expect(isMatch([1, 2, 3, [1]], [1, 2, 3, [2]])).toBeFalsy();
  });

  test("Should return true if array elements are same", () => {
    expect(isMatch([1, 2, 3], [1, 2, 3])).toBeTruthy();
    expect(isMatch([1, 2, 3, [1]], [1, 2, 3, [1]])).toBeTruthy();
    expect(isMatch([1, 2, 3, { a: 1 }], [1, 2, 3, { a: 1 }])).toBeTruthy();
  });

  test("Should return false if Date objects time are different", () => {
    const date1 = new Date(0);
    const date2 = new Date();

    expect(isMatch(date1, date2)).toBeFalsy();
  });

  test("Should return true if Date objects time are equale", () => {
    const date1 = new Date(3);
    const date2 = new Date(3);

    expect(isMatch(date1, date2)).toBeTruthy();
  });
  
  test("Should return true when source is empty", () => {
    expect(isMatch({ a: 1, b: 2 }, {})).toBeTruthy();
    expect(isMatch([1, 2, 3], {})).toBeTruthy();
  });

  test("Should return false if source keys and values are not in compare with object", () => {
    const object = { a: 1 };
    const source = { a: 1, b: 2 };

    expect(isMatch(object, source)).toBeFalsy();

    const object2 = { a: 1, b: 2, c: { a: 2, b: 3 } };
    const source2 = { a: 1, b: 2, c: { a: 2, b: 4 } };

    expect(isMatch(object2, source2)).toBeFalsy();
  });

  test("Should return true if source and object keys and values are same", () => {
    const object = { a: 1, b: 2, c: 3 };
    const source = { a: 1 };

    expect(isMatch(object, source)).toBeTruthy();

    const object2 = { a: 1, b: 2, c: { a: 2, b: 3 } };
    const source2 = { a: 1, b: 2, c: { a: 2, b: 3 } };

    expect(isMatch(object2, source2)).toBeTruthy();
  });
});
