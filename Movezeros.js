function moveZeroes(nums) {
  let nonZeroIndex = 0;

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining elements with zeroes
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums1));  // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
console.log(moveZeroes(nums2));  // Output: [0]
