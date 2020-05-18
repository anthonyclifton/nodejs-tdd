const fizzbuzz = (input) => {
    if (input === 3) {
        return "Fizz";
    } else if (input === 5) {
        return "Buzz";
    } else {
        return "Fizzbuzz";
    }
};

module.exports = fizzbuzz;