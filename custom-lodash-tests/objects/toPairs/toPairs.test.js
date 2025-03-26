const toPairs = require("./toPairs");

describe("'toPairs' function tests:'", () => {
  test("Should throw an error for all not object data", () => {
    const errorMessage = 'Value must be type of "object';
    const path = "a";

    expect(() => toPairs("", path)).toThrow(errorMessage);
    expect(() => toPairs(10, path)).toThrow(errorMessage);
    expect(() => toPairs(true, path)).toThrow(errorMessage);
    expect(() => toPairs(null, path)).toThrow(errorMessage);
    expect(() => toPairs(undefined, path)).toThrow(errorMessage);
  });

  test("should work correctly for string paths", () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
      }
       
      Foo.prototype.c = 3;

    expect(toPairs(new Foo())).toEqual([['a', 1], ['b', 2]]);
  });

  test("should work correctly for string paths", () => {
    const array = [1, 2, 3]

    expect(toPairs(array)).toEqual( [['0', 1], ['1', 2], ['2', 3]]);
  });
});
