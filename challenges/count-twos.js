// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	let n = 0;
	
	if (num < 2) {
		return 0;
	}
	
	// loop through each number and stringify them
	for (let i = 0; i < num; i++) {
		let string = i.toString();

		// then loop through each string
		for (let j = 0; j < string.length; j++) {
			
			// if it equals 2, increment count by 1
			if (string[j] === '2') {
				n++
			}
		}
	}

	return n;
}

module.exports = countTwos;