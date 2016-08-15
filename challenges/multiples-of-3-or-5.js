// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
//below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
    var sum = 0;

    var idx = 0;
    while (idx < 1000) {
        if (idx % 3 === 0 || idx % 5 === 0) {
            sum += idx;
        }
        idx++;
    }
    return sum;
}

//extension make it dynamic function that takes input x,y,z
//and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
    var sum = 0;

    var idx = 0;
    while (idx < z) {
        if (idx % x === 0 || idx % y === 0) {
            sum += idx;
        }
        idx++;
    }

    return sum;
}

var objectToExport = {
    sumMultiples3Or5Below1000: sumMultiples3Or5Below1000,
    sumMultiplesXOrYBelowZ: sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;