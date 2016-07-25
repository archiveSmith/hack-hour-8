// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

 function numToWords(num) {
   const ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
   const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
   const onesAndTeens = ones.concat(teens);
   if (num.toString().length <= 2) return onesAndTeens[num-1];
   const tens = ['Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
   const bigBoysInDaHizzle = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
   const numArr = num.toString().split('')
   let tripleArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
   console.log(tripleArr.length);

   for (var i = 0; i < numArr.length; i++) {
     tripleArr.push(numArr[i]);
   }
   console.log(tripleArr);
 }

module.exports = numToWords;
