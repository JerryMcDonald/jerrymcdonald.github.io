// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
 
 
 
 /*
 * DEVELOP A function with one parameter 
 * RETURN  A new string (the input reversed)
 */
function reverseString(input) {
    //split into newArray, use while loop to reverse that array based on
    //length. using push and pop methods.
    var newArray = input.split('');
    var reverseArray = [];
    while (newArray.length > 0){
        reverseArray.push(newArray.pop());
    }
    //Outout: the reversed array joined as a string
    return reverseArray.join('');
}
    



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}