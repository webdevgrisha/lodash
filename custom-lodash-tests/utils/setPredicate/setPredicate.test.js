const setPredicate = require("./setPredicate");

describe("'setPredicate' function tests:", () => {
    test("Should return a same function if functions set", () => {
        const fn = () => {};

        expect(setPredicate(fn)).toBe(fn);
    });

    test("Should throw an error if predicate is an array with length not equal to 2", () => {
        const predicate = [1];
        const errorMessage = 'Predicate must be an array with 2 elements';
        
        expect(() => setPredicate(predicate)).toThrow(errorMessage);
    });

    test("Should return a function that checks if an object has a truthy property by key", () => {
        const fn = setPredicate('a');

        expect(fn({a: 1})).toBeTruthy();
        expect(fn({a: 0})).toBeFalsy();
    });

    
});