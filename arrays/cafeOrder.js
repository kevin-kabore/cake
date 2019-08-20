/**
 * 
 * My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.
 * 
 * I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the
 * kitchen, where they should be handled first-come, first-served.
 * 
 * Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!
 * 
 * To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:
 * The take-out orders as they were entered into the system and given to the kitchen. (takeOut)
 * The dine-in orders as they were entered into the system and given to the kitchen. (dineIn)
 * Each customer order as it was finished by the kitchen. (servedOrders)
 * Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.
 * 
 * We'll represent each customer order as a unique integer.
 * 
 */


 // Clean solution: O(n) time where n is the length of servedOrders
 function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {

    // Check if we're serving orders first-come, first-served
    if(takeOut.length + dineIn.length != servedOrders.length) return false;
    
    let takeOutIndex = 0,
        dineInIndex = 0;
        
    for(let i = 0; i < servedOrders.length; i++) {
      let currentOrder = servedOrders[i];
      
      if(currentOrder === takeOut[takeOutIndex]) {
        takeOutIndex++;
      } else if (currentOrder === dineIn[dineInIndex]) {
        dineInIndex++;
      } else {
        return false;
      }
    }
  
    return true;
  }
  


function isFirstComeFirstServed2(takeOut, dineIn, servedOrders) { // O(n) time and O(n) space

    // Check if we're serving orders first-come, first-served
    const takeOutLength = takeOut.length,
          dineInLength = dineIn.length,
          servedLength = servedOrders.length;
    
    if(takeOutLength + dineInLength != servedLength) return false;
    
    let i = 0, j = 0, mergedIndex = 0;
    const correctOrders = [];
    
    while(mergedIndex < (takeOutLength + dineInLength)) {
      let isTakeOutDone = i >= takeOutLength,
          isDineInDone = j >= dineInLength;
      
      if(!isTakeOutDone && isDineInDone || (takeOut[i] < dineIn[j])) {
        correctOrders[mergedIndex] = takeOut[i];
        i++;
        
      } else {
        correctOrders[mergedIndex] = dineIn[j];
        j++;
      }
      
      mergedIndex++;
    }
    
    for(let i = 0; i < servedLength; i++) {
      if(servedOrders[i] != correctOrders[i]) return false;
    }
  
    return true;
  }


// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

  