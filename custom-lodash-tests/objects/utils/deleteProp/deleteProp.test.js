const deleteProp = require("./deleteProp");

describe("'deleteProp' function tests:", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = "Value must be Object.";

    expect(() => deleteProp("")).toThrow(errorMessage);
    expect(() => deleteProp(10)).toThrow(errorMessage);
    expect(() => deleteProp(true)).toThrow(errorMessage);
    expect(() => deleteProp(null)).toThrow(errorMessage);
    expect(() => deleteProp(undefined)).toThrow(errorMessage);
    expect(() => deleteProp([])).toThrow(errorMessage);
    expect(() => deleteProp(new Date())).toThrow(errorMessage);
    expect(() => deleteProp(new RegExp())).toThrow(errorMessage);
    expect(() => deleteProp(new Map())).toThrow(errorMessage);
    expect(() => deleteProp(new Set())).toThrow(errorMessage);
    expect(() => deleteProp(function () {})).toThrow(errorMessage);
  });

  test("Should return false if path is empty.", () => {
    expect(deleteProp({}, [])).toBeFalsy();
  });

  test("Should return false if property wasn't delete.", () => {
    const obj = { a: { b: { c: 10 } } };

    expect(deleteProp(obj, "a.b.x")).toBeFalsy(); 
  });

  test("Should return true if property delete succesfuly.", () => {
    const obj = { a: { b: { c: 10 } } };

    deleteProp(obj, "a.b.c");

    expect(obj.a.b.c).toBeUndefined();
  });

  test("Should change original object.", () => {
    const obj = { a: { b: { c: 10 } } };
    const objCopy = JSON.parse(JSON.stringify(obj));

    deleteProp(obj, "a.b.c");

    expect(obj).not.toStrictEqual(objCopy);
  });

  test("Should not change the original object if path does not exist", () => {
    const obj = { a: { b: { c: 10 } } };
    const objCopy = JSON.parse(JSON.stringify(obj));

    deleteProp(obj, "a.b.x");

    expect(obj).toStrictEqual(objCopy);
  });

  test("Should handle paths as arrays", () => {
    const obj = { a: { b: { c: 10 } } };

    deleteProp(obj, ["a", "b", "c"]);

    expect(obj.a.b.c).toBeUndefined();
  });


  test("Should handle cases where intermediate path is not an object", () => {
    const obj = { a: { b: null, d: '1' } };
    const objCopy = JSON.parse(JSON.stringify(obj));

    expect(deleteProp(obj, "a.b.c")).toBeFalsy();
    expect(obj).toStrictEqual(objCopy);
  });

  test("Should delete property from an object containing arrays", () => {
    const obj = { a: [{ b: 10 }, { c: 20 }] };

    deleteProp(obj, "a.0.b");

    expect(obj.a[0].b).toBeUndefined();
  });

  test("Should delete properties from objects inside arrays", () => {
    const obj = { items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }] };

    deleteProp(obj, "items.1.name");

    expect(obj.items['1'].name).toBeUndefined();
  });

  test("Should do nothing if trying to delete an not existed property", () => {
    const obj = { a: { b: { c: 10 } } };
    const objCopy = JSON.parse(JSON.stringify(obj));
    
    expect(deleteProp(obj, "a.b.g")).toBeFalsy();;

    expect(obj).toStrictEqual(objCopy);
  });
});