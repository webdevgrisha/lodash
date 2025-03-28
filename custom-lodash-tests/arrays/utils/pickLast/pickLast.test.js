const pickLast = require("./pickLast");

describe("'pickLast' function tests:", () => {
    test("Should throw an error for all not array data", () => {
      const errorMessage = "Collection must be Array.";
  
      expect(() => pickLast({})).toThrow(errorMessage);
      expect(() => pickLast(42)).toThrow(errorMessage);
      expect(() => pickLast(true)).toThrow(errorMessage);
      expect(() => pickLast(null)).toThrow(errorMessage);
      expect(() => pickLast(undefined)).toThrow(errorMessage);
      expect(() => pickLast(new Date())).toThrow(errorMessage);
      expect(() => pickLast(new RegExp())).toThrow(errorMessage);
      expect(() => pickLast(new Map())).toThrow(errorMessage);
      expect(() => pickLast(new Set())).toThrow(errorMessage);
      expect(() => pickLast(function () {})).toThrow(errorMessage);
    });
  
    test("Should return array last element", () => {
      const arr = [1, 2, 3];
  
      expect(pickLast(arr)).toStrictEqual(arr.at(-1));
    });

    test("Should not change the original array", () => {
        const arr = [1, 2, 3];
        const arrCopy = [...arr];

        pickLast(arr);
    
        expect(arr).toStrictEqual(arrCopy);
    });
  });