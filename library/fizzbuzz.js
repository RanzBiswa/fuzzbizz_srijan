'use strict';

function fizzbuzz(number, callback) {
    if (isNaN(number)) {
        callback(true, {});
    } else {
        var output = [];
        for (var i = 1; i <= number; i++) {
            var isFizz = ((i % 3) == 0);
            var isBuzz = ((i % 5) == 0);
            var isFizzBuzz = (isFizz && isBuzz);
            if (isFizzBuzz) {
                output.push("fizzbuzz");
            } else if (isFizz) {
                output.push("fizz");
            } else if (isBuzz) {
                output.push("buzz");
            } else {
                output.push(i);
            }
        }
        callback(false, output);
    }
};

module.exports.fizzbuzz = fizzbuzz;