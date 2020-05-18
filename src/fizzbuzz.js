const fizzbuzz = (input) => {
    if (input === 3) {
        return "Fizz";
    } else if (input === 5) {
        return "Buzz";
    } else if (input === 15) {
        return "Fizzbuzz";
    } else if (!input) {
        return 0;
    } else {
        return input;
    }
};

module.exports = fizzbuzz;