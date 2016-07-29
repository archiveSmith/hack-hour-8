/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
 	if (a === 0) {
    return b;
 	}

  while (b !== 0) {
    if (a > b) {
      a = a - b;
    }
    else {
      b = b - a;
    }
  }

  return a;
}

module.exports = gcd;