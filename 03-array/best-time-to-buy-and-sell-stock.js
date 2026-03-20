// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



function maxProfit(arr){
let minPrice =  arr[0];
let maxProfit = 0;
for(let i=1;i<arr.length;i++){
    if(arr[i]<minPrice){
        minPrice= arr[i]
    }
    else{
        let profit  =arr[i]-minPrice;
        maxProfit= Math.max(profit,maxProfit);

    }
}
 return maxProfit;
}

console.log(maxProfit([1,6,9,3,1]))


// Approach used:
// Track minimum price and calculate profit in one pass

// Why:
// Ensures buying happens before selling and avoids unnecessary comparisons

// Time complexity:
// O(n) If array has n elements → loop runs n times

// Space complexity:
// O(1)
//let minPrice = prices[0];
//let maxProfit = 0; Memory used does NOT grow with input size

// Pattern used:
// Greedy + Single pass

// Memory trick:
// min → profit → max

// Loop type:
// Single loop → O(n)