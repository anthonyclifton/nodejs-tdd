const Enzyme = require('enzyme');
const Fizzbuzz = require('../src/fizzbuzz');

describe("fizzbuzz", () => {
    it("should return fizz when input is three", () => {
        const result = Fizzbuzz(3);
        expect(result).toEqual("Fizz");
    });
});