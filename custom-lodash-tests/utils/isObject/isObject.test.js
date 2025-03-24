const isObject = require("./isObject.js")

// обсудить данные тесты
describe("'isObject' function tests:", () => {
  test("Should return true for all 'object' type", () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject(new Object())).toBeTruthy();
  });

  // test("Should return false all other Object", () => {

  // });

  test("Should return true for Arrays", () => {
    expect(isObject([])).toBeTruthy();
    expect(isObject(new Array())).toBeTruthy();
  });

  test("Should return true for Date", () => {
    expect(isObject(new Date())).toBeTruthy();
  });

  test("Should return true for RegExp", () => {
    expect(isObject(new RegExp())).toBeTruthy();
    expect(isObject(/a/)).toBeTruthy();
  });

  test("Should return true for Map", () => {
    expect(isObject(new Map())).toBeTruthy();
  });

  test("Should return true for Set", () => {
    expect(isObject(new Set())).toBeTruthy();
  });

  test("Should return false for null", () => {
    expect(isObject(null)).toBeFalsy();
  });

  test("Should return false for primetives data types", () => {
    expect(isObject(42)).toBeFalsy();
    expect(isObject("hello")).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(Symbol())).toBeFalsy();
  });

  test("should return false for Functions", () => {
    expect(isObject(() => {})).toBeFalsy();
    expect(isObject(function () {})).toBeFalsy();
    expect(isObject(new Function())).toBeFalsy();
  });
});
