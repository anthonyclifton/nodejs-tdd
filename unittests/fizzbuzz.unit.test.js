const Enzyme = require('enzyme');
const Fizzbuzz = require('../src/fizzbuzz');

describe("fizzbuzz", () => {
    it("should return fizz when input is three", () => {
        const result = Fizzbuzz(3);
        expect(result).toEqual("Fizz");
    });

    it("should return buzz when input is five", () => {
        const result = Fizzbuzz(5);
        expect(result).toEqual("Buzz");
    });

    it("should return fizzbuzz when input is fifteen", () => {
        const result = Fizzbuzz(15);
        expect(result).toEqual("Fizzbuzz");
    });
});