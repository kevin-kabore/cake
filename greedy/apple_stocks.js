/*

    Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

    First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

    So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

    The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    The values are the price (in US dollars) of one share of Apple stock at that time.
    So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

    Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

*/



function getMaxProfit(stockPrices) {
    /// THROW EXCEPTION IF NOT ENOUGH VALUES
    if (stockPrices.length <= 1) throw "Must buy and sell to get profit";

    //// INITIALIZE MAX TO (i = 0) - (i = 1) TO GET MAX PROFITS
    let minPrice = stockPrices[0],
        max = stockPrices[1] - stockPrices[0];

    // START at index 1 so don't buy and sell at same time
    // Otherwise max will be 0 and can't output negative profits
    for(let i = 1; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i],
            potentialProfit = currentPrice - minPrice;

        if(potentialProfit > max) {
            max = potentialProfit;
        }
        
        minPrice = Math.min(minPrice, currentPrice);
    }
  
    return max;
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'price goes up then down';
  let actual = getMaxProfit([1, 5, 3, 2]);
  let expected = 4;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes down then up';
  actual = getMaxProfit([7, 2, 8, 9]);
  expected = 7;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes up all day';
  actual = getMaxProfit([1, 6, 7, 9]);
  expected = 8;
  assertEqual(actual, expected, desc);
  
  desc = 'price goes down all day';
  actual = getMaxProfit([9, 7, 4, 1]);
  expected = -2;
  assertEqual(actual, expected, desc);
  
  desc = 'price stays the same all day';
  actual = getMaxProfit([1, 1, 1, 1]);
  expected = 0;
  assertEqual(actual, expected, desc);
  
  desc = 'error with empty prices';
  const emptyArray = () => (getMaxProfit([]));
  assertThrowsError(emptyArray, desc);
  
  desc = 'error with one price';
  const onePrice = () => (getMaxProfit([1]));
  assertThrowsError(onePrice, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }
  
  function assertThrowsError(func, desc) {
    try {
      func();
      console.log(`${desc} ... FAIL`);
    } catch (e) {
      console.log(`${desc} ... PASS`);
    }
  }