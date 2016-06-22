// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	//create result variable, initialized to empty array
	var result = [];
	//create for loop with counter starting at 0, ending at num
	for (var i = 1; i <= num; i++){
		//push the counter value to the array
		if (i % 3 !== 0 && i % 5 !== 0)	result.push(i);
		//use modulus to determine if counter is divisible by three & five, if so push 'fizzbuzz' instead of counter
		else if (i % 3 === 0 && i % 5 === 0) result.push('fizzbuzz');
		//use modulus to determine if counter is divisible by three, if so push 'fizz' instead of counter
		else if (i % 3 === 0) result.push('fizz');
		//use modulus to determine if counter is divisible by five, if so push 'buzz' instead of counter
		else result.push('buzz');
	}
	return result;
}

module.exports = fizzbuzz;
