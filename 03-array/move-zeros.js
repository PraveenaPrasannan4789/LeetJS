// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.imp

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


const moveZeros = (nums)=>{
let position = 0;

for(let i=0;i<nums.length;i++){
    if(nums[i]!== 0){
       nums[position]= nums[i];
       position++;
    }
}

for(let i=position;i<nums.length;i++){
nums[i]=0;
}
return nums;
}

console.log(moveZeros([1,0,1,0,3,12]));

// Approach used:
// Move all non-zero elements forward and fill remaining positions with zeros

// Why:
// Maintains relative order of non-zero elements and does it in-place

// Time complexity:
// O(n) → single pass to shift non-zeros + second pass to fill zeros

// Space complexity:
// O(1) → in-place, no extra arrays used

// Pattern used:
// Two-pointer / single pass

// Memory trick:
// Use 'position' pointer to track next non-zero placement

// Loop type:
// Single loop for non-zeros + loop to fill zeros → O(n)