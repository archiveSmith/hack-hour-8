// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
	let splitStr = str.split(' '),
			xPoint = parseInt(splitStr[0]),
			yPoint = parseInt(splitStr[1]),
			counter = 0;
			

	// Brute force all day baby
	if (xPoint + 2 < 8 && yPoint + 1 < 8) {
		counter++;
	} 
	if (xPoint + 2 < 8 && yPoint - 1 > 0) {
		counter++;
	}
	if (xPoint - 2 > 0 && yPoint + 1 < 8) {
		counter++;
	}
	if (xPoint - 2 > 0 && yPoint - 1 > 0) {
		counter++;
	}
	if (xPoint + 1 < 8 && yPoint + 2 < 8) {
		counter++;
	}
	if (xPoint + 1 < 8 && yPoint - 2 > 0) {
		counter++;
	}
	if (xPoint - 1 > 0 && yPoint + 2 < 8) {
		counter++;
	}
	if (xPoint - 1 > 0 && yPoint - 2 > 0) {
		counter++;
	}

	return counter;
}

module.exports = knightjumps;
