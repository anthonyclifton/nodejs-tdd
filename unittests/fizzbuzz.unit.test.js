const Enzyme = require('enzyme');
const Fizzbuzz = require('../src/fizzbuzz');

describe("fizzbuzz", () => {
    it("should return something", () => {
        const result = Fizzbuzz();
        expect(result).toEqual("Something");
    })
});