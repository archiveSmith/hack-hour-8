/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  // hackhour solution
  // if (!target) return true;
  // if (!array.length) return false;
  //
  // return subsetSum(array.slice(1), target - array[0] || subsetSum(array.slice(1), target));

  const nums = array;
  if (nums.indexOf(target) > 0) return true;

  let count = 0;
  while (count < nums.length) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
      if (sum === target) return true;
    }
    nums.unshift(nums.pop());
    count++;
  }

  return false;
}

module.exports = subsetSum;
