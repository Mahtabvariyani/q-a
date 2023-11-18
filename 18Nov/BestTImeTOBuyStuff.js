/* 
so in this example we have an array like prices 
and it has to show when we buy and selll best to make Profit 


*/

function MaxProfit(prices) {
  let global = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > global) global = currentProfit;
    }
  }

  return global
}


console.log(MaxProfit([7,1,5,3,6,4]))




// The algorithm is designed to find the maximum profit by considering all possible pairs of buying and selling days. In the example array [7, 1, 5, 3, 6, 4], the algorithm correctly calculates the maximum profit by considering buying on day 1 (price 1) and selling on day 5 (price 6), resulting in a profit of 6 - 1 = 5.

// The algorithm doesn't consider buying on day 1 and selling on day 6 (price 4) because the inner loop (j) always starts from i + 1, ensuring that selling occurs after buying. Therefore, it doesn't consider future days for a given buying day in the same iteration.

// To explicitly explain the steps:

// Buy on day 1 (price 1).
// Sell on day 5 (price 6).
// Profit = 6 - 1 = 5.
// The stock price 7 is not considered for buying or selling because the algorithm always considers selling days that occur after the buying day in the inner loop. The goal is to find the best combination for maximum profit, and in this case, it's buying on day 1 and selling on day 5.

