// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 
 
/************************PSEUDO*****************************
 * DEVELOP A function taking parameters (numbers)
 * RETURN  An Array containing the range of numbers
              between the two given. 
**************************CODE*****************************/



function range(start, end) {
    //Create two Arrays, one to hold the interger range from lowest
     //to highest. The other to hold the intergers from highest to 
     //lowest.
    let array = [];
    let arrayReverse = [];
   // An if statement that will check if start is less than end and 
     // if so run a for loop that pushes the range of the two numbers
     // into array. 
     if (start < end) {
        for (let index = start; index <= end; index++) {
            array.push(index);
        }
     return array;
     }
     
     //If statement that will check if start is greater than end. Pushing 
     // the range (highest to lowest) into arrayReverse. 
     if (start > end) {  
        for (let index2 = start; index2 >= end; index2--) {
            arrayReverse.push(index2);
        }
        return arrayReverse;
     }
     // Return "Both Numbers are equal" if no if statements are ran. 
     return "Both Numbers are Equal";
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}