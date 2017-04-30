/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {


  if (isNaN(base)||isNaN(power)){
		return "parameter is not a number"
	}


	if (power === 1){
		return base;
	}

	else{
		return base * pow(base, power-1)
	}

}

module.exports = pow;
