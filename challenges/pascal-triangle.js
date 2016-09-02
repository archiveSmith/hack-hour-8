/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows === undefined || numRows < 1) {
    return [];
  }

  let triangle = [[1]];
  let row;

  for (var i = 0; i < numRows - 1; i++) {
    let row = [1];

    for (var j = 1; j< triangle[i].length; j++) {
      // somehow get values from previous rows
    }

    // add accumulating values new row
  }

}

module.exports = pascalTriangle;
