const getProp = require("./getProp");

describe("'getProp' function tests:", () => {
  test("Should return false for all not object or array data.", () => {
    const symbol = Symbol();
    const path = "a.b";
    expect(getProp("", path, symbol)).toBe(symbol);
    expect(getProp(10, path, symbol)).toBe(symbol);
    expect(getProp(true, path, symbol)).toBe(symbol);
    expect(getProp(null, path, symbol)).toBe(symbol);
    expect(getProp(undefined, path, symbol)).toBe(symbol);
    expect(getProp(new Date(), path, symbol)).toBe(symbol);
    expect(getProp(new RegExp(), path, symbol)).toBe(symbol);
    expect(getProp(new Map(), path, symbol)).toBe(symbol);
    expect(getProp(new Set(), path, symbol)).toBe(symbol);
    expect(getProp(function () {}, path, symbol)).toBe(symbol);
  });

  test("Return value using string simple string path: 'a.b.c'", () => {
    const object = { a: { b: { c: 3 } } };

    expect(getProp(object, "a.b.c")).toBe(3);
  });

  test("Return value using string simple path: 'a[0].b.c'", () => {
    const object = { a: [{ b: { c: 3 } }] };

    expect(getProp(object, "a[0].b.c")).toBe(3);
  });

  test("Return value using string path with combine prop: 'a['good bye'].b.c'", () => {
    const object = { a: { "good bye": { b: { c: 3 } } } };

    expect(getProp(object, "a['good bye'].b.c")).toBe(3);
  });

  test("Return value using array path: ['a', '0', 'b', 'c']", () => {
    const object = { a: [{ b: { c: 3 } }] };

    expect(getProp(object, ["a", "0", "b", "c"])).toBe(3);
  });

  test("Return value using array path with combine prop: ['a', 'good bye', 'b', 'c']", () => {
    const object = { a: { "good bye": { b: { c: 3 } } } };

    expect(getProp(object, ["a", "good bye", "b", "c"])).toBe(3);
  });

  test("Return defaultValue if path does not exist", () => {
    const object = { a: [{ b: { c: 3 } }] };

    expect(getProp(object, "a.b.c", "default")).toBe("default");
  });

  test("Returns defaultValue if the path not found", () => {
    const object = { a: { b: undefined } };

    expect(getProp(object, "a.b.c", "default")).toBe("default");
  });

  test("Returns defaultValue if the object is empty", () => {
    expect(getProp({}, "a.b", "default")).toBe("default");
  });

  test("Returns defaultValue if the path is empty", () => {
    const object = { a: 1, b: 2 };

    expect(getProp(object, "", "default")).toBe("default");
    expect(getProp(object, [], "default")).toBe("default");
  });

  test("Returns undefind like defaultValue if, default value not provided and path not found", () => {
    const object = { a: 1, b: 2 };

    expect(getProp(object, "c.g")).toBeUndefined();
    expect(getProp(object, ["c", "g"])).toBeUndefined();
  });
});
