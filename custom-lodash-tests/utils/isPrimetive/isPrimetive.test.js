const isPrimetive = require('./isPrimetive');

describe("'isPrimetive' function tests:", () => {
    test('Should return true for primetive data types', () => {
        expect(isPrimetive(42)).toBeTruthy();
        expect(isPrimetive(BigInt(1))).toBeTruthy();
        expect(isPrimetive('hello')).toBeTruthy();
        expect(isPrimetive(true)).toBeTruthy();
        expect(isPrimetive(undefined)).toBeTruthy();
        expect(isPrimetive(null)).toBeTruthy();
        expect(isPrimetive(Symbol())).toBeTruthy();
    });

    test('Should return false for Objects', () => {
        expect(isPrimetive({})).toBeFalsy();
        expect(isPrimetive([])).toBeFalsy();
        expect(isPrimetive(new Map())).toBeFalsy();
        expect(isPrimetive(new Set())).toBeFalsy();
        expect(isPrimetive(new Date())).toBeFalsy();
        expect(isPrimetive(new RegExp())).toBeFalsy();
        expect(isPrimetive(new Function())).toBeFalsy();
    });
});